import { useContext, useEffect, useState } from "react";
import Bar from "../Home/Bar";
import "./StyPag.css";
import { Word } from "../../HeadPage/HeadContext";
export default function Feedbacks(params) {
  let [disp, setDis] = useState("feeds");
  const { PhoneDisplay } = useContext(Word);
  useEffect(() => {
    setDis("feeds");
    PhoneDisplay("ConstStyle", [setDis], ["feeds fsp"]);
  }, [PhoneDisplay]);

  return (
    <>
      <div className={disp}>
        <p className="contFeedpara">
          <pre
            className="pp"
            style={{
              fontSize: 25,
              marginTop: 65,
            }}
          >
            <span
              style={{ display: "block", textAlign: "center", marginBottom: 5 }}
            >
              Thanks
            </span>
            <span
              style={{ display: "block", textAlign: "center", marginBottom: 5 }}
            >
              for
            </span>
            <span
              style={{ display: "block", textAlign: "center", marginBottom: 5 }}
            >
              All
            </span>
          </pre>
        </p>
        <iframe
          frameBorder={"0"}
          width={"1"}
          className="cous"
          src="/api/feedbacks"
          title="feed"
        ></iframe>
      </div>
      <Bar />
    </>
  );
}
