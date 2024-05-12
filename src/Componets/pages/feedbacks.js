import { useContext, useEffect, useState } from "react";
import Bar from "../Home/Bar";
import "./StyPag.css";
import { Word } from "../../HeadPage/HeadContext";
export default function Feedbacks(params) {
  let [disp, setDis] = useState("feeds");
  const { PhoneDisplay } = useContext(Word);
  useEffect(() => {
    setDis("feeds");
    PhoneDisplay([setDis], ["feeds fsp"]);
  }, [PhoneDisplay]);

  return (
    <>
      <div className={disp}>
        <p className="contFeedpara">
          <p className="pp">شكرا الى كل من اعجبه موقعي يمكنك</p>
          <p className="ps">المرور على باقي الصفحات, تواصل معي</p>
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
