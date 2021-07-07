# JupyterLite Lab Extension Example

![Github Actions Status](https://github.com/jtpio/jupyterlite-labextension-example/workflows/Build/badge.svg)

This repository demonstrates how to develop a JupyterLab extension with [JupyterLite](https://github.com/jtpio/jupyterlite):

- add instructions to use the extension with JupyterLite
- enable deploy previews on PR using JupyterLite deployed on [Netlify](https://www.netlify.com/)

## Requirements

* JupyterLab >= 3.0
* JupyterLite >= 0.1.0a3

## Contributing

### Development install

Note: You will need NodeJS to build the extension package.

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Change directory to the jupyterlite_labextension_example directory
# Install package in development mode
pip install -e .
# Link your development version of the extension with JupyterLab
jupyter labextension develop . --overwrite
# Rebuild extension Typescript source after making changes
jlpm run build
```

You can watch the source directory and run JupyterLab at the same time in different terminals to watch for changes in the extension's source and automatically rebuild the extension.

```bash
# Watch the source directory in one terminal, automatically rebuilding when needed
jlpm run watch
# Run JupyterLab in another terminal
jupyter lab
```

With the watch command running, every saved change will immediately be built locally and available in your running JupyterLab. Refresh JupyterLab to load the change in your browser (you may need to wait several seconds for the extension to be rebuilt).

By default, the `jlpm run build` command generates the source maps for this extension to make it easier to debug using the browser dev tools. To also generate source maps for the JupyterLab core extensions, you can run the following command:

```bash
jupyter lab build --minimize=False
```

### Testing with JupyterLite

To test with JupyterLite, follow the steps above just like for a normal JupyterLab extension.

Make sure you have JupyterLite installed:

```bash
pip install jupyterlite
```

```bash
# build the JupyterLite site
jupyter lite build

# start a JupyterLite static server
jupyter lite serve
```

In a web browser, open http://localhost:8000/lab/index.html to access JupyterLite.

### Development uninstall

```bash
pip uninstall jupyterlite_labextension_example
```

In development mode, you will also need to remove the symlink created by `jupyter labextension develop`
command. To find its location, you can run `jupyter labextension list` to figure out where the `labextensions`
folder is located. Then you can remove the symlink named `jupyterlite-labextension-example` within that folder.
