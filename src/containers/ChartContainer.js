import { useState, useEffect } from 'react';
import ChartList from '../components/ChartList';
import './ChartContainer.css'

function ChartContainer() {
  const [chartList, setChartList] = useState({});
  const [loaded, setLoaded] = useState(false);

  function getChart() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then((response) => response.json())
      .then((data) => setChartList(data['feed']['entry']))
      .then(() => setLoaded(true));
  }

  useEffect(() => {
    getChart();
  }, []);

  return (
    <div className="chart-container">
      <h1>iTunes Top 20</h1>
      <ChartList loaded={loaded} chartList={chartList} />
    </div>
  );
}

export default ChartContainer;