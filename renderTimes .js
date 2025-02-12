const renderTimes = {};
function onRenderCallback(id, phase, actualDuration, baseDuration) {
  if (!renderTimes[id]) {
    renderTimes[id] = [];
}
  renderTimes[id].push(actualDuration);
  // get average
  const sum = renderTimes[id].reduce((acc, val) => acc + val, 0);
  const avg = sum / renderTimes[id].length;
  if (avg > 16) {
    console.warn(`Component ${id} is "heavy": average render time is ${avg.toFixed(2)} ms`);
}
}
