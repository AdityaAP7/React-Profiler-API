import React, {
  createContext,
  useRef,
  Profiler,
  useContext,
} from 'react';
// 1) Create your Context (we'll hold a ref inside).
const PerformanceContext = createContext(null);
/**
 * 2) Provide a wrapper component that:
 *    - Keeps track of an array of metrics in a ref (no repeated re-renders)
 *    - Wraps children in a <Profiler> so that the callback is actually called
 *    - Makes performance data available via context
 */
export function PerformanceProvider({ children }) {
  // Use a ref so changes don't trigger re-renders.
  const metricsRef = useRef([]);
  // React Profiler callback
  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    // Push the new metric into the ref
    metricsRef.current.push({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    });
    // No setState call here => no re-render
 };
  return (
    <Profiler id="PerformanceProfiler" onRender={onRenderCallback}>
      <PerformanceContext.Provider value={metricsRef}>
        {children}
      </PerformanceContext.Provider>
    </Profiler>
 );
}
/**
 * 3) Anywhere in your app, use the context to
 *    retrieve the latest collected metrics.
 */
export function usePerformanceMetrics() {
  const metricsRef = useContext(PerformanceContext);
  if (!metricsRef) {
