import Logo from "./Logo";

function Technology({ technology }) {
  return (
    <div className="flex p-3">
      {technology}
      <span className="w-6 h-6 ml-2">
        <Logo technology={technology} />
      </span>
    </div>
  );
}

export default Technology;
