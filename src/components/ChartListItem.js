import './ChartListItem.css';
import ListenNowButton from './ListNowButton.js';

function ChartListItem({ title, artist, coverArt, playLink }) {
  return (
    <div className="ChartListItem">
      <img src={coverArt} alt="cover art"></img>
      <div className="SongInfo">
        <p>{title}</p>
        <p>{artist}</p>
      </div>
      <ListenNowButton playLink={playLink}/>
    </div>
  );
}

export default ChartListItem;