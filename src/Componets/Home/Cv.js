import { useEffect, useState } from "react";
import Cvdata from "../../Data/Datacv.json";
export default function Cv(params) {
  const [width, setWidth] = useState(window.innerWidth);
  let [classs, setClasss] = useState("");
  //temp
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setClasss("CVp");
    }
    if (width >= 500) {
      setClasss("CV");
    }
  }, [width]);
  return (
    <div className={classs + " color-back"}>
      <img src="/pro.png" alt="pro" />
      <h2 className={"Title-Cv"}>{Cvdata.name}</h2>
      <p className="P-Cv">{Cvdata.para}</p>
    </div>
  );
}
