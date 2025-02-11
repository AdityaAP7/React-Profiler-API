
import { usePerformanceData } from './PerformanceProvider';
function PerformanceDashboard() {
  const { metrics } = usePerformanceData();
