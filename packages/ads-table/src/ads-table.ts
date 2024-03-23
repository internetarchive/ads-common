// interface class for a Lit component class that contains table data
import { css, html, LitElement, PropertyValues, TemplateResult } from "lit";
import {
  SortComparisonFunction,
  TableColumn,
  TableDataType,
  TableRow,
} from "./types";
import { property, state, query, customElement } from "lit/decorators.js";
import { EventHelpers } from "@jeffklein/ads-library";
import { getUserOS, UserOperatingSystem } from "@jeffklein/ads-library";

export abstract class AdsTable<T> extends LitElement {
  @query("#main-table") tableElement: HTMLTableElement | undefined;

  // base list of data that this class sorts
  @property({ type: Array }) rows: TableRow<T>[] = [];

  // abstract members to override
  protected abstract columns: TableColumn<T>[];
  protected abstract sortKey: keyof T | undefined;
  protected abstract secondarySortKey: keyof T | undefined;

  protected noDataText: string = "No items found";

  protected readonly defaultSortDirection: "ascending" | "descending" =
    "ascending";

  @state() protected sortDirection: "ascending" | "descending" =
    this.defaultSortDirection;

  // list of selected rows in order of least to most recently added
  @state() protected selectedRowIds: string[] = [];

  @state() isLoading: boolean = false;

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has("selectedRowIds")) {
      // report selected rows to parent via an event
      this.emitEvent("row-select", { selectedRows: this.selectedRows });
    }

    // if rows change, re-ensure selected rows exist in table
    if (this.rowsDidUpdate(changedProperties)) {
      this.filterSelectedRowsToExistingRows();
    }
  }

  // rather than compare references, determine if 'this.rows' has updated. an update occurs if:
  // - row list is a different size
  // - any elements in the sorted list may have changed place
  protected rowsDidUpdate(changedProperties: PropertyValues): boolean {
    // if the sort properties change, assume the elements have rearranged
    if (
      changedProperties.has("sortKey") ||
      changedProperties.has("sortDirection")
    ) {
      return true;
    }
    if (!changedProperties.has("rows") || !changedProperties.get("rows")) {
      return false;
    }
    const oldRowIds: string[] = (
      changedProperties.get("rows") as TableRow<T>[]
    ).map((row: TableRow<T>) => row.id);
    // first check length. if list length changes, rows have changed.
    if (oldRowIds.length !== this.rows.length) {
      return true;
    }
    // otherwise, if they're the same size, compare individual items and ensure they're the same set of items
    const newRowsIdsSet: Set<string> = new Set(this.rows.map((row) => row.id));
    return !oldRowIds.every((id) => newRowsIdsSet.has(id));
  }

  protected emitEvent(eventName: string, detail = {}) {
    this.dispatchEvent(
      EventHelpers.createEvent(eventName, detail ? { detail } : {}),
    );
  }

  protected get visibleColumns(): TableColumn<T>[] {
    return this.columns.filter(({ isHidden }) => !isHidden);
  }

  protected get rowsById(): { [key: string]: TableRow<T> } {
    return Object.fromEntries<TableRow<T>>(
      this.rows.map((row) => [row.id, row]),
    );
  }

  protected get sortedRows(): TableRow<T>[] {
    const sortByPrimaryKey = this.getSortFunction(
      this.sortColumnDataType,
      this.sortDirection,
    );
    const sortBySecondaryKey = this.getSortFunction(
      this.secondarySortDataType,
      this.secondarySortDataType?.defaultSortDirection || this.sortDirection,
    );
    return this.rows.sort((rowA, rowB) => {
      // sort by primary key: the selected column and direction
      const sortResult = sortByPrimaryKey?.(rowA.data, rowB.data) || 0;
      // if sort result on primary sort key is inconclusive, use secondary sort data type
      if (sortResult === 0) {
        return sortBySecondaryKey?.(rowA.data, rowB.data) || 0;
      } else {
        return sortResult;
      }
    });
  }

  protected get selectedRows(): TableRow<T>[] {
    return this.selectedRowIds.map((id) => this.rowsById[id]).filter((x) => x);
  }

  // handler for when a user clicks on a column header
  protected onColumnClick(
    column: TableColumn<T>,
    defaultSortDirection: "ascending" | "descending" = this
      .defaultSortDirection,
  ): void {
    if (this.sortKey === column.key) {
      // toggle the sort direction if the column you are clicking is already sorted
      this.sortDirection =
        this.sortDirection === "ascending" ? "descending" : "ascending";
    } else {
      // otherwise, sort by the column you clicked on, and in the default sort direction
      this.sortKey = column.key;
      this.sortDirection =
        column.dataType.defaultSortDirection || defaultSortDirection;
    }
  }

  // a map of column keys to their respective data types so we don't have to call .find everywhere
  protected get columnKeyToDataType(): {
    [columnKey: string]: TableDataType<T>;
  } {
    return Object.fromEntries<TableDataType<T>>(
      this.columns.map((col) => [col.key, col.dataType]),
    );
  }

  // data type of the currently sorted column
  protected get sortColumnDataType(): TableDataType<T> | undefined {
    if (this.sortKey) {
      return this.columnKeyToDataType[this.sortKey as string];
    } else {
      return undefined;
    }
  }

  // data type of the secondary sort column
  protected get secondarySortDataType(): TableDataType<T> | undefined {
    if (this.secondarySortKey) {
      return this.columnKeyToDataType[this.secondarySortKey as string];
    } else {
      return undefined;
    }
  }

  // swaps the parameters of the sort function to reverse the sort direction
  protected getSortFunction(
    dataType: TableDataType<T> | undefined,
    sortDirection: "ascending" | "descending",
  ): SortComparisonFunction<T> | undefined {
    if (!dataType) {
      return undefined;
    }
    if (sortDirection === "ascending") {
      // return the original comparison function
      return dataType.compare;
    } else if (dataType.compare !== undefined) {
      // swap compare function parameters for descending
      return (a, b) => dataType.compare?.(b, a) || 0;
    } else {
      return undefined;
    }
  }

  protected renderArrowIcon(columnKey: keyof T): TemplateResult {
    if (columnKey !== this.sortKey) {
      return html``;
    } else if (this.sortDirection === "ascending") {
      return html`▲`;
    } else {
      return html`▼`;
    }
  }

  protected get selectedRowIdsSet(): Set<string> {
    return new Set(this.selectedRowIds);
  }

  protected get rowIdsSet(): Set<string> {
    return new Set(this.rows.map((row) => row.id));
  }

  protected isSelected(row: TableRow<T>): boolean {
    return this.selectedRowIdsSet.has(row.id);
  }

  protected toggleRowSelected(rowId: string): void {
    if (this.selectedRowIdsSet.has(rowId)) {
      // row is already selected: filter out clicked id
      this.selectedRowIds = this.selectedRowIds.filter((id) => id !== rowId);
    } else {
      // row is not yet selected: append clicked id
      this.selectedRowIds = [...this.selectedRowIds, rowId];
    }
  }

  protected get lastSelectedRowId(): string {
    return this.selectedRowIds[this.selectedRowIds.length - 1];
  }

  protected get indexOfLastSelectedRow(): number {
    return this.rows.findIndex((row) => row.id === this.lastSelectedRowId);
  }

  // select rows in order from the last selected element up til the given index
  protected groupRowSelect(rowIndex: number): void {
    const getRowsToAdd = (): TableRow<T>[] => {
      // get rows between index of last selected until index of selected row
      if (rowIndex > this.indexOfLastSelectedRow) {
        return this.rows.filter(
          (_, i) => rowIndex >= i && i >= this.indexOfLastSelectedRow,
        );
      } else {
        // reverse order of adding rows since clicked index is lower than last selected
        return this.rows
          .filter((_, i) => this.indexOfLastSelectedRow >= i && i >= rowIndex)
          .reverse();
      }
    };
    const rowIdsToAdd: string[] = getRowsToAdd().map((row) => row.id);
    const rowIdsSet: Set<string> = new Set(rowIdsToAdd);
    // first remove ids you are about to re-add, so they'll be in renewed order
    this.selectedRowIds = this.selectedRowIds.filter(
      (id) => !rowIdsSet.has(id),
    );
    // finally, add the new rows
    this.selectedRowIds = [...this.selectedRowIds, ...rowIdsToAdd];
  }

  protected onRowClick(
    event: MouseEvent,
    clickedRow: TableRow<T>,
    rowIndex: number,
  ): void {
    const userOs = getUserOS();
    // meta (cmd) key for mac, control key for non-mac
    const macHoldingHotKey =
      userOs === UserOperatingSystem.MAC && event.metaKey;
    const nonMacHoldingHotKey =
      userOs !== UserOperatingSystem.MAC && event.ctrlKey;
    // if holding meta on mac or ctrl on windows/linux, toggle individual row selection
    if (macHoldingHotKey || nonMacHoldingHotKey) {
      this.toggleRowSelected(clickedRow.id);
    } else if (event.shiftKey) {
      // if holding shift, select rows between this selection and the last selection
      this.groupRowSelect(rowIndex);
    } else {
      // clicking a row will select just that row.
      this.selectedRowIds = [clickedRow.id];
    }
    this.filterSelectedRowsToExistingRows();
    // emit event so users can hook into this action
    this.emitEvent("row-click", { row: clickedRow });
  }

  // filter selected down to rows that actually exist in the table
  protected filterSelectedRowsToExistingRows() {
    this.selectedRowIds = this.selectedRowIds.filter((id) =>
      this.rowIdsSet.has(id),
    );
  }

  protected onRowDoubleClick(clickedRow: TableRow<T>): void {
    // emit event so users can hook into this event
    this.emitEvent("row-double-click", { row: clickedRow });
  }

  // All keyboard events implemented through this method.
  protected onKeyDown(event: KeyboardEvent): void {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        // shift focus to table element when navigating with arrow keys
        this.tableElement?.focus();
        return this.onUpDownArrowKey(event.key);
    }
  }

  protected onUpDownArrowKey(key: "ArrowUp" | "ArrowDown"): void {
    if (this.selectedRowIds.length === 0) {
      // select the first row if none are selected
      this.selectedRowIds = [this.rows[0].id];
      return;
    }
    // offset in the proper direction of the arrow
    const indexOffset = key === "ArrowUp" ? -1 : 1;
    const newSelectedRowIndex = this.constrainIndex(
      this.indexOfLastSelectedRow + indexOffset,
    );
    const newSelectedRowId = this.rows[newSelectedRowIndex].id;
    this.selectedRowIds = [newSelectedRowId];
  }

  // ensures index values are kept to the closest in-bounds index
  protected constrainIndex(index: number): number {
    return Math.max(Math.min(index, this.rows.length - 1), 0);
  }

  connectedCallback() {
    super.connectedCallback();
    // attach keyboard listener
    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
  }

  render() {
    return html`
      <table id="main-table" tabindex="0">
        <thead>
          <tr>
            ${this.visibleColumns.map(
              (column) => html`
                <th
                  @click=${() => this.onColumnClick(column)}
                  class=${column.dataType.compare ? "sortable" : ""}
                  style=${`flex: ${column.flexRatio}`}
                >
                  ${column.label}
                  ${column.dataType.compare
                    ? html`<span>${this.renderArrowIcon(column.key)}</span>`
                    : ""}
                </th>
              `,
            )}
          </tr>
        </thead>
        <tbody>
          ${!this.isLoading
            ? this.sortedRows.map(
                (row, index) => html`
                  <tr
                    @click=${(e: MouseEvent) => this.onRowClick(e, row, index)}
                    @dblclick=${() => this.onRowDoubleClick(row)}
                    class=${this.isSelected(row) ? "row-selected" : ""}
                    data-row-selected=${this.isSelected(row)}
                    data-id=${row.id}
                  >
                    ${this.visibleColumns.map(
                      (column) => html`
                        <td style=${`flex: ${column.flexRatio}`}>
                          ${column.dataType.format(row.data)}
                        </td>
                      `,
                    )}
                  </tr>
                `,
              )
            : html`
                <tr>
                  <td class="no-data">Loading...</td>
                </tr>
              `}
          ${!this.isLoading && this.sortedRows.length === 0
            ? html`
                <tr>
                  <td class="no-data">${this.noDataText}</td>
                </tr>
              `
            : null}
        </tbody>
      </table>
    `;
  }

  static styles = css`
    table {
      display: flex;
      flex-direction: column;
      user-select: none;
      border-collapse: collapse;
    }

    thead,
    tbody {
      display: flex;
      flex-direction: column;
    }

    thead {
      background: #2a282c;
    }

    tbody {
      scrollbar-gutter: stable;
    }

    tr {
      display: flex;
      width: 100%;
      min-height: 40px;
      flex-shrink: 0;
    }

    tr.row-selected {
      background: #ccddf2;
    }

    td.no-data {
      font-style: italic;
      justify-content: center;
    }

    td,
    th {
      display: flex;
      flex: 1;
      justify-content: flex-start;
      align-items: center;
      padding: 0 12px;
      height: 40px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }

    th {
      color: white;
    }

    th.sortable {
      cursor: pointer;
    }

    th.sortable:hover {
      background: #525252;
    }

    th span {
      padding-left: 5px;
    }

    td {
      border-bottom: 1px solid #bbbbbb;
    }
  `;
}

// a simple, generic, out-of-the box implementation of AdsTable
@customElement("ads-simple-table")
export class AdsSimpleTable<T> extends AdsTable<T> {
  // columns are exposed as a parameter like rows, not a class member to implement
  @property({ type: Array }) columns: TableColumn<T>[] = [];

  @property({ type: String }) secondarySortKey: keyof T | undefined = undefined;

  // sort key is automatically held in state
  @state() sortKey: keyof T | undefined = this.columns[0]?.key;

  protected override updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    if (changedProperties.has("columns")) {
      this.sortKey = this.columns[0]?.key;
    }
  }
}
