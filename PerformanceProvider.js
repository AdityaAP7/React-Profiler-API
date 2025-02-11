import React, { createContext, useState, useContext, useCallback } from 'react';
const PerformanceContext = createContext();
export function PerformanceProvider({ children }) {
  const [metrics, setMetrics] = useState([]);
  const onRenderCallback = useCallback(
    (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
      setMetrics(prev => [
        ...prev,
        { id, phase, actualDuration, baseDuration, startTime, commitTime }
      ]);
    },
    []
  );
  return (
    <PerformanceContext.Provider value={{ metrics, onRenderCallback }}>
      {children}
    </PerformanceContext.Provider>
  );
}
export function usePerformanceData() {
  return useContext(PerformanceContext);
}
