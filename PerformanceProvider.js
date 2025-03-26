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
