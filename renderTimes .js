const renderTimes = {};
function onRenderCallback(id, phase, actualDuration, baseDuration) {
  if (!renderTimes[id]) {
