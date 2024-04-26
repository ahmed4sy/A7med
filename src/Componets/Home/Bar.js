import { useState } from "react";
import ListPage from "./list-page";
export default function Bar() {
  let [Onlis, setOnlis] = useState(false);
  return (
    <div className="Head">
      <h1 className="Title-Page">A7med</h1>

      {/* List */}
      <div
        className="List-Page"
        onClick={() => {
          setOnlis(Onlis ? false : true);
        }}
      >
        <span className={Onlis ? "keyframespan1 control" : "none"}></span>
        <span className={Onlis ? "hide" : "none"}></span>
        <span className={Onlis ? "keyframespan2 control" : "none"}></span>
      </div>
      <ListPage list={Onlis} />
    </div>
  );
}
