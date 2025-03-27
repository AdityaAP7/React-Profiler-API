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
