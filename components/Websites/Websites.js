import { Fragment } from "react";
import Website from "./Website";

function Websites({ links }) {
  return (
    <Fragment>
      <h1 className="font-bold">Links</h1>
      <div className="flex flex-wrap">
        <div className="flex p-3">
          {links.map((link) => (
            <Website link={link} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Websites;
