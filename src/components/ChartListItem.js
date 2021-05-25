import ListenNowButton from './ListNowButton.js';

function ChartListItem({ title, artist, coverArt, playLink }) {
  return (
    <>
      <br></br>
      <img src={coverArt} alt="cover art"></img>
      <>
        <p>{title} by {artist}</p>
      </>
      <ListenNowButton playLink={playLink}/>
      <br></br>
      <br></br>
    </>
  );
}

export default ChartListItem;