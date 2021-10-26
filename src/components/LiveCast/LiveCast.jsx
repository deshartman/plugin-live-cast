import React from 'react';
import PropTypes from 'prop-types';
import { LiveCastComponentStyles } from './LiveCast.Styles';

// It is recommended to keep components stateless and use redux for managing states
const LiveCast = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <div style={{
      min_height: "100vw",
      min_width:"100vh"
    }}>
    {/* <LiveCastComponentStyles>

      Dismiss this component
      <i className="accented" onClick={props.dismissBar} aria-hidden="true">
        close
      </i> 
    </LiveCastComponentStyles> */}
      <h1>My component</h1>
        <div id='container' class='container mx-auto mt-10 justify-center items-center text-center'>
        <div id='stream' class='flex items-center justify-center w-full'>
            <p></p>
        </div>
        <div id='controls' class='mt-10'>

            <input
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='identity' type='text' placeholder='Your name' required/>

            <input
                class='bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='streamName' type='text' placeholder='Livestream name' required/>

            <button class='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 mr-2 rounded'
                id='streamStartEnd'>
                start stream
            </button>
        </div>
      </div>
      </div>

  );
};

LiveCast.displayName = 'LiveCast';

LiveCast.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  dismissBar: PropTypes.func.isRequired,
};

export default LiveCast;
