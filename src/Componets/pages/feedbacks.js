import { useEffect, useState } from "react";
import Bar from "../Home/Bar";
import "./StyPag.css";
export default function Feedbacks(params) {
  const [width, setWidth] = useState(window.innerWidth);
  let [disp, setDis] = useState("feeds");
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setDis("feeds fsp");
    }
  }, [width]);
  return (
    <>
      <div className={disp}>
        <p className="contFeedpara">
          <pre>comment</pre>
          <h1>Ahmed yousif</h1>
          <p className="pp">شكرا الى كل من اعجبه موقعي</p>
        </p>
        <iframe
          frameBorder={"0"}
          width={"1"}
          className="cous"
          src="/data/api/feedbacks"
          title="feed"
        ></iframe>
      </div>
      <Bar />
    </>
  );
}
