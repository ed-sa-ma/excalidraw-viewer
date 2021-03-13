# Excalidraw Viewer

Small application to display an Exalidraw diagram with View Mode option enabled without the possibility to disable it. This diagram will be linked from https://ed-sa-ma.com as one of the entries of the portfolio.

The reason why this approach was chosen is that by using a regular link to a diagram in Excalidraw allows the person visiting it access to edit controls, so in order to show the diagram "blocked" in view mode we use the [React package](https://www.npmjs.com/package/@excalidraw/excalidraw#onChange) provided by Exaclidraw and enable view mode via props.

## Available Scripts

In the project directory, you can run:

### `yarn start`

```bash
# Runs the app in the development mode.
yarn start

# Builds the app for production to the `build` folder.
yarn build

# If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time.
yarn eject
```

---

Created with [Create React App](https://github.com/facebook/create-react-app).
