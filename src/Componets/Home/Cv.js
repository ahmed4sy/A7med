import { useContext, useEffect, useState } from "react";
import Cvdata from "../../Data/Datacv.json";
import { Word } from "../../HeadPage/HeadContext";

export default function Cv(params) {
  let [classs, setClasss] = useState("");
  const { PhoneDisplay } = useContext(Word);
  useEffect(() => {
    setClasss("CV");
    PhoneDisplay("ConstStyle", [setClasss], ["CVp"]);
  }, [PhoneDisplay]);
  return (
    <div className={classs + " color-back"}>
      <img src="/pro.png" alt="pro" />
      <h2 className={"Title-Cv"}>{Cvdata.name}</h2>
      <p className="P-Cv">{Cvdata.para}</p>
    </div>
  );
}
