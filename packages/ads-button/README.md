# About

This is a library of web components and various utilities in use by the frontend developers
on the Archiving & Data Services (ADS) team at the Internet Archive.

# Development

### Changing existing components

- In separate tabs, run `yarn dev` in the root and `yarn dev` from within the package folder(s)
  you are making changes to.
- Now, changes you make to code files in `packages/*/src` and `storybook.html` should
  auto-appear on save at http://127.0.0.1:8001/storybook.html.
- Make the code changes on a new branch, open an MR against `master`.
- In your changes, make sure you increment the version number in the `package.json` file
  in each of the packages you have made changes to. For breaking changes,
  bump the major version (0.x.x). If adding a medium-to-large feature(s) without breaking
  changes, bump the minor version (x.0.x). For internal implementation changes and
  very small feature tweaks, bump the patch version (x.x.0).
- Get a fellow maintainer to review and merge your code.
- Once the code is on `master`, the maintainer will run an `npm` release with the new version(s)
  and your package(s) will be available for upgrade in your repository via `yarn upgrade`

### Creating a new component

- Copy the template in `packages/sample-component` and rename it to your new component.
- add the component's `dist` path to `storybook.html` to introduce it there.
- Once your component exists, follow the steps for changing existing components (above).

# Sample component TODOs:

- ✅ prettier
- ✅ linter
- ✅ small bundle for publishing
- ✅ storybook
- testing? (storybook can cover this in a QA sense)
