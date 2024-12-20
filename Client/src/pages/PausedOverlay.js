import { css } from "@emotion/css";

const PausedOverlay = () => (
  <div>
    <img
      src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      alt=""
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
      `}
    />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        z-index: 1;
        font-family: sans-serif;
        /* Position the text in the bottom-left corner of the overlay */
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;

        h1 {
          margin: 0 0 0.2em;
        }
        p {
          margin: 0 0.2em 0;
        }
      `}
    >
      <h1>Big Buck Bunny</h1>
      <p>Hover to play!</p>
    </div>
  </div>
);

export default PausedOverlay;
