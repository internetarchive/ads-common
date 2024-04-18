import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./ads-table";
import {
  BooleanDataType,
  FromKey,
  NumberDataType,
  StringDataType,
  TableColumn,
  TableRow,
  UndefinedHelpers,
} from "./types";

// a simple interface for a sample table
interface PersonData {
  firstName: string;
  lastName: string;
  age: number;
  hasRegistered: boolean;
  catsName?: string;
}

// corresponding columns for each field in PersonData
const columns: TableColumn<PersonData>[] = [
  {
    key: "firstName",
    label: "First Name",
    dataType: FromKey(StringDataType, "firstName"),
  },
  {
    key: "lastName",
    label: "Last Name",
    dataType: FromKey(StringDataType, "lastName"),
  },
  {
    key: "age",
    label: "Age",
    dataType: FromKey(NumberDataType, "age"),
  },
  {
    key: "hasRegistered",
    label: "Registered?",
    dataType: FromKey(BooleanDataType, "hasRegistered"),
  },
  {
    key: "catsName",
    label: "Cat's Name",
    dataType: FromKey(UndefinedHelpers(StringDataType), "catsName"),
  },
];

// sample data, a list of PersonData instances with IDs
const rows: TableRow<PersonData>[] = [
  {
    id: "a",
    data: {
      firstName: "Tyler",
      lastName: "Allgeier",
      age: 22,
      hasRegistered: true,
      catsName: "Cookie",
    },
  },
  {
    id: "b",
    data: {
      firstName: "Drake",
      lastName: "London",
      age: 23,
      hasRegistered: true,
      catsName: "Garbanzo",
    },
  },
  {
    id: "c",
    data: {
      firstName: "Matt",
      lastName: "Bryant",
      age: 50,
      hasRegistered: true,
      catsName: "Boots",
    },
  },
  {
    id: "d",
    data: {
      firstName: "Jeff",
      lastName: "Klein",
      age: 30,
      hasRegistered: false,
    },
  },
];

@customElement("ads-table-storybook")
export class AdsTableStorybook extends LitElement {
  render() {
    return html`
      <ads-simple-table .columns=${columns} .rows=${rows}> </ads-simple-table>
    `;
  }

  static styles = css``;
}
