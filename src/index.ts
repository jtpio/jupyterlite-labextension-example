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
    console.log('jupyterlite-labextension-example is activated!');
    console.log('test changes');
  }
};

export default plugin;
