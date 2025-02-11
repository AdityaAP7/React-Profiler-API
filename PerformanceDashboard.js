
import { usePerformanceData } from './PerformanceProvider';
function PerformanceDashboard() {
  const { metrics } = usePerformanceData();
  // transform data to a chart-friendly format
  // e.g. group by "id" or "phase"
  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, width: '300px', background: '#fff' }}>
      {/* Use a chart library to plot metrics */}
      <h4>Last Render Times</h4>
