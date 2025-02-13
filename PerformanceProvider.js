import React, {
  createContext,
  useState,
  useContext,
  useCallback,
  Profiler
} from 'react';
// 1) Create your Context (with an optional default value).
const PerformanceContext = createContext({
  metrics: []
});
/**
 * 2) Provide a wrapper component that:
 *    - Keeps track of an array of metrics in state
 *    - Wraps children in a <Profiler> so that the callback is actually called
 *    - Stores the performance data in context for the rest of the app
 */
export function PerformanceProvider({ children }) {
  const [metrics, setMetrics] = useState([]);
  const onRenderCallback = useCallback(
    (
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    ) => {
      // Push a new entry into the metrics array
