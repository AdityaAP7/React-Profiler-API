987654321function MyApp() {
  const { onRenderCallback } = usePerformanceData();
  return (
    <Profiler id="MyAppProfiler" onRender={onRenderCallback}>
      {/* ...rest of your app */}
    </Profiler>
  );
}
