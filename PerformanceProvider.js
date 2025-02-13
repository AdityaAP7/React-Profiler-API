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
