import { useEffect, useState } from "react";
import SCME from "./../../Data/social media.json";
export default function Scm(params) {
  const [width, setWidth] = useState(window.innerWidth);
  let [classs, setClasss] = useState("Scm");
  const scm = SCME.data;
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setClasss("Scmp");
    }
    if (width >= 500) {
      setClasss("Scm");
    }
  }, [width]);
  let ele = scm.map((eve) => {
    return (
      <a href={eve.link}>
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
