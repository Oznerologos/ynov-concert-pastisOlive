import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProgressCircle() {

  return (
    <div id="progressOverlay">
      <CircularProgress size={100}/>
      </div>
  );
}