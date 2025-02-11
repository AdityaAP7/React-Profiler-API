function MyApp() {
  const { onRenderCallback } = usePerformanceData();
  return (
    <Profiler id="MyAppProfiler" onRender={onRenderCallback}>
