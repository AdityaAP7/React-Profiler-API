let renderCounts = {};
function onRenderCallback(id, phase, actualDuration) {
  // increment count
  renderCounts[id] = (renderCounts[id] || 0) + 1;
