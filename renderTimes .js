const renderTimes = {};
function onRenderCallback(id, phase, actualDuration, baseDuration) {
  if (!renderTimes[id]) {
    renderTimes[id] = [];
}
  renderTimes[id].push(actualDuration);
  // get average
