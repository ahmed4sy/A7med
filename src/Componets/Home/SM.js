import { useContext, useEffect, useState } from "react";
import SCME from "./../../Data/social media.json";
import { Word } from "../../HeadPage/HeadContext";
export default function Scm(params) {
  let [classs, setClasss] = useState("Scm");
  const scm = SCME.data;
  const { PhoneDisplay } = useContext(Word);
  useEffect(() => {
    setClasss("Scm");
    PhoneDisplay("ConstStyle", [setClasss], ["Scmp"]);
  }, [PhoneDisplay]);
  let ele = scm.map((eve) => {
    return (
      <a href={eve.link} key={eve.id}>
        <img alt={eve.name} key={eve.id} className="Img-Scm" src={eve.img} />
      </a>
    );
  });
  return (
    <div className={classs + " color-back"}>
      <h3 className="Title-Scm">social media:</h3>
      {ele}
    </div>
  );
}
