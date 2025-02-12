let renderCounts = {};
function onRenderCallback(id, phase, actualDuration) {
  // increment count
  renderCounts[id] = (renderCounts[id] || 0) + 1;
  // check threshold
  if (renderCounts[id] > 20) {
    console.warn(`Component ${id} re-rendered more than 20 times! Potential performance issue.`);
  }
  // reset logic if needed (e.g., every minute)
}
