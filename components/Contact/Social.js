import MEDIALINKS from "../../data/media";
import Media from "./Media";

function Social() {
  return (
    <div>
      {MEDIALINKS.map((media) => (
        <Media media={media} />
      ))}
    </div>
  );
}

export default Social;
