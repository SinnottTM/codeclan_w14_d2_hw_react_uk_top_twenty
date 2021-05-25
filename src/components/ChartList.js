import ChartListItem from './ChartListItem';

function ChartList({ loaded, chartList }) {
  if (!loaded) {
    return <p>Loading...</p>;
  }

  const ChartNode = chartList.map((chartItem) => {
    return <ChartListItem 
    title={chartItem['im:name']['label']} 
    artist={chartItem['im:artist']['label']} 
    coverArt={chartItem['im:image'][1]["label"]}
    playLink={chartItem['im:collection']["link"]["attributes"]["href"]}
    key={chartItem['id']['attributes']['im:id']} 
    />;
  });

  return (
    <>
      {ChartNode}
    </>
  );
}

export default ChartList;