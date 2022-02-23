import Logo from "./Logo";

function Media({ media }) {
  return (
    <div className="p-2 mr-4">
      <a target="_blank" href={media.link} className="hover:cursor-pointer">
        <div className="flex justify-center py-2">
          {media.platform}{" "}
          <span className="w-6 h-6 ml-2">
            <Logo platform={media.platform} />
          </span>
        </div>
      </a>
    </div>
  );
}

export default Media;
