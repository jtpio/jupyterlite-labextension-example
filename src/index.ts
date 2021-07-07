import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlite-labextension-example extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlite-labextension-example:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlite-labextension-example is activated!');
  }
};

export default plugin;
