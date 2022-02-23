import { Fragment } from "react";
import Technology from "./Technology";

function Technologies({ technologies }) {
  return (
    <Fragment>
      <h1 className="font-bold">Stack</h1>
      <div className="flex flex-wrap">
        {technologies.map((technology) => (
          <Technology technology={technology} />
        ))}
      </div>
    </Fragment>
  );
}

export default Technologies;
