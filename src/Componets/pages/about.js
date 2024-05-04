import { useEffect, useState } from "react";
import Bar from "../Home/Bar";
import Alret from "../static/alret";

export default function About(params) {
  const [width, setWidth] = useState(window.innerWidth);
  let [ClickRank, setClickRank] = useState({ text: "Rank", click: false });
  let [ShowPropAlret, setShowPropAlret] = useState([false, false]);
  const [Phd, setPhd] = useState("");
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setPhd("PhoneDisplay");
    }
  }, [width]);
  return (
    <>
      <FormAbout Phd={Phd} ClickRank={ClickRank} />
      <PrgLang
        Phd={Phd}
        setShowPropAlret={setShowPropAlret}
        ClickRank={ClickRank}
      />
      <div
        className={ClickRank.click ? "animateRankBut" : "butRank"}
        style={
          Phd !== ""
            ? {
                left: "25px",
              }
            : {}
        }
        onClick={() =>
          ClickRank.click
            ? setClickRank({ text: "Rank", click: false })
            : setClickRank({ text: "Leave", click: true })
        }
      >
        <p>{ClickRank.text}</p>
      </div>
      <Bar />
      {ShowPropAlret[0] ? (
        <Alret
          text={"Python"}
          pos={ClickRank.click ? [730, 350] : [670, 420]}
        />
      ) : (
        ""
      )}
      {ShowPropAlret[1] ? <Alret text={"JavaScript"} pos={[730, 420]} /> : ""}

      {ClickRank.click ? (
        <div className="CouShowSkill">
          <p
            style={{
              fontFamily: "cursive",
              position: "fixed",
              left: "900px",
              top: "300px",
            }}
          >
            Python
          </p>
          <div className="skilemy python">
            <div className="countPy"></div>
          </div>
          <p
            style={{
              fontFamily: "cursive",
              position: "fixed",
              left: "1050px",
              top: "370px",
            }}
          >
            50%
          </p>
        </div>
      ) : (
        ""
      )}
      {ClickRank.click ? (
        <div className="CouShowSkill">
          <p
            style={{
              fontFamily: "cursive",
              position: "fixed",
              left: "900px",
              top: "380px",
            }}
          >
            JavaScript
          </p>
          <div className="skilemy js">
            <div className="countJs"></div>
          </div>
          <p
            style={{
              fontFamily: "cursive",
              position: "fixed",
              left: "1050px",
              top: "450px",
            }}
          >
            25%
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
function FormAbout({ Phd, ClickRank }) {
  return (
    <div
      className={
        ClickRank.click ? "animateRankProf " + Phd : "FormAbout " + Phd
      }
    >
      <img alt="profile" id="prof" src="20230508_190001.jpg" />
      <div>
        <p>
          👉 <code>name:Ahmed</code>
        </p>
        <p>
          👉 <code>age:17.11</code>
        </p>
        <p>
          👉 <code>from:sudan</code>
        </p>
        <p>
          <a href="/">
            <img alt="My Github" className="git" src="/github.png" />
          </a>
        </p>
      </div>
    </div>
  );
}
function PrgLang({ Phd, setShowPropAlret, ClickRank }) {
  return (
    <div
      className={ClickRank.click ? "animateRankPrg " + Phd : "PrgLang " + Phd}
    >
      <label>Supported Programming languages:</label>
      <div className="ImgsCou">
        <img
          alt="Python"
          src="/py.webp"
          className="ImgsCount"
          onMouseMove={() => {
            setShowPropAlret([true, false]);
          }}
          onMouseOut={() => setShowPropAlret([false, false])}
        />
        <img
          alt="Js"
          src="/js.png"
          className="ImgsCount"
          onMouseMove={() => setShowPropAlret([false, true])}
          onMouseOut={() => setShowPropAlret([false, false])}
        />
      </div>
    </div>
  );
}
