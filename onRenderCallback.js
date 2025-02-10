import React, { Profiler } from 'react';
function onRenderCallback(
  id, // the "id" prop of the Profiler tree
  phase, // either "mount" or "update"
  actualDuration, // time spent rendering the Profiler and its descendants
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // timestamp when React began rendering
  commitTime, // timestamp when React committed changes
  interactions // the Set of interactions
) {
  // You can store or process this data
  console.log({ id, phase, actualDuration, baseDuration });
}
function App() {
  return (
