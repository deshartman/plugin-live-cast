import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import LiveCastContainer from './components/LiveCast/LiveCast.Container';
import reducers, { namespace } from './states';
import IncomingVideoComponent from './IncomingVideoComponent';
import DummyCRM from './components/DummyCRM';

const PLUGIN_NAME = 'LiveCastPlugin';

export default class LiveCastPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {

    this.registerReducers(manager);

    // const options = { sortOrder: -1 };
    // flex.AgentDesktopView.Panel2.Content.replace(<LiveCastContainer key="LiveCastPlugin-component" />, options);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel2.Content.replace(<DummyCRM key="dummy-crm" />, options);

    //flex.AgentDesktopView.defaultProps.splitterOptions = { initialFirstPanelSize: "400px", minimumFirstPanelSize: "400px" }

  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
