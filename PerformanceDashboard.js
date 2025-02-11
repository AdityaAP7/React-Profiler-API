
import { usePerformanceData } from './PerformanceProvider';
function PerformanceDashboard() {
  const { metrics } = usePerformanceData();
  // transform data to a chart-friendly format
  // e.g. group by "id" or "phase"
  return (
