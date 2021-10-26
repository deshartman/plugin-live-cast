import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';

class DummyCRM extends React.Component {

  render() {

    return (
      <div style={{
        minHeight: '100vh',
        // minWidth: '100vw'
      }}>
        {/* <iframe src='https://live-serverless-3666-dev.twil.io/streamer.html' allow='camera; microphone' height='100%' width='100%' /> */}
        <iframe src='https://twilio-live-interactive-video-0169-1264-dev.twil.io' allow='camera; microphone; display-capture' height='100%' width='100%' />
      </div>

    );
  }
}

export default withTaskContext(DummyCRM);
