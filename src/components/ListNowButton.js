import './ListNowButton.css';

function ListenNowButton({ playLink }) {
  return (
    <a className="ListNowButton" href={playLink}  target="_blank" rel="noopener noreferrer">
      <p>Play &#9658;</p>
    </a>
  );
}

export default ListenNowButton;