import { useEffect, useState } from "react";
export default function Cv(params) {
  const [width, setWidth] = useState(window.innerWidth);
  let [classs, setClasss] = useState("");

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
      <h2 className={"Title-Cv"}>Ahmed Yousif</h2>
      <p className="P-Cv">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam
        repellendus exercitationem mollitia. Eius incidunt nesciunt neque
      </p>
    </div>
  );
}
