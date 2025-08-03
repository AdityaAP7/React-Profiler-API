11111q11111111111111
import { usePerformanceData } from './PerformanceProvider';
function PerformanceDashboard() {
  const { metrics } = usePerformanceData();
  // transform data to a chart-friendly format
  // e.g. group by "id" or "phase"
  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, width: '300px', background: '#fff' }}>
      {/* Use a chart library to plot metrics */}
      <h4>Last Render Times</h4>
      {metrics.slice(-5).map((m, idx) => (
        <div key={idx}>
          {m.id} - {m.phase} - {m.actualDuration.toFixed(2)} ms
        </div>
      ))}
    </div>
  );
}
