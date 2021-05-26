import { useState, useEffect } from 'react';
import ChartList from '../components/ChartList';

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
    <>
      <h1>UK I-Tunes Top 20</h1>
      <ChartList loaded={loaded} chartList={chartList} />
    </>
  );
}

export default ChartContainer;