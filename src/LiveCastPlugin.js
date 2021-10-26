import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import LiveCast from './components/LiveCast';

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

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel2.Content.replace(<LiveCast key="live-cast" />, options);

  }
}
