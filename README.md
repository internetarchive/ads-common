# About

This is a library of web components and various utilities in use by the frontend developers
on the Archiving & Data Services (ADS) team at the Internet Archive.

# Development

### Creating a new package or component

- Copy the template in `packages/sample-package` and rename files and variables to your new component where applicable.
```shell
# from project root
cp -r packages/sample-package packages/new-package-name
```
- Once renamed, export the new component's storybook file from `index.js` in the project root.
- Once you've implemented your package, export public modules from `index.ts` in the package folder.
  Follow the steps for changing existing components (below) to publish your new package.

### Changing existing components

- If it's not already there, create a storybook lit component at `packages/component-name/src/component-name-storybook.ts`,
  and in `index.js` of the root project folder, ensure you export the storybook web component.
- In separate tabs, run `yarn dev` in the root (storybook server) and `yarn dev` from within the package folder(s)
  you are making changes to (component server(s)).
- Now, changes you make to component files, your storybook web component, and `storybook.html` will
  auto-appear on save at http://127.0.0.1:8001/storybook.html.
- Your storybook web component is also now available for use in `storybook.html`. Add your storybook component
  to this file.
- Implement your storybook component with multiple examples of the component, demonstrating its capabilities.
  Document in html what each example represents. When making changes to a component, use the storybook as a
  simple test environment.
- Make the code changes on a new branch, open an MR against `master`.
- In your changes, make sure you increment the version number in the `package.json` file
  in each of the packages you have made changes to. For breaking changes,
  bump the major version (0.x.x). If adding a medium-to-large feature(s) without breaking
  changes, bump the minor version (x.0.x). For internal implementation changes and
  very small feature tweaks, bump the patch version (x.x.0).
- Get a fellow maintainer to review and merge your code.
- Once the code is on `master`, the maintainer will run an `npm` release with the new version(s)
  and your package(s) will be available for upgrade in your repository via `yarn upgrade`

# Sample component TODOs:

- ✅ prettier
- ✅ linter
- ✅ small bundle for publishing
- ✅ storybook
- testing? (storybook can cover this in a sense)
