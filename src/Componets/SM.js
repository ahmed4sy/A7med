import { useEffect, useState } from "react";

export default function Scm(params) {
  const [width, setWidth] = useState(window.innerWidth);
  let [classs, setClasss] = useState("Scm");
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setClasss("Scmp");
    }
    if (width >= 500) {
      setClasss("Scm");
    }
  }, [width]);
  return (
    <div className={classs + " color-back"}>
      <h3 className="Title-Scm">social media:</h3>
      <img alt="twiter" className="Img-Scm" src="/I.webp" />
      <img alt="Insta" className="Img-Scm" src="/X.svg" />
    </div>
  );
}
