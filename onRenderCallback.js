import React, { Profiler } from 'react';
function onRenderCallback(
  id, // the "id" prop of the Profiler tree
  phase, // either "mount" or "update"
  actualDuration, // time spent rendering the Profiler and its descendants
  baseDuration, // estimated time to render the entire subtree without memoization
