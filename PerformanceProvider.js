import React, { createContext, useState, useContext, useCallback } from 'react';
const PerformanceContext = createContext();
export function PerformanceProvider({ children }) {
