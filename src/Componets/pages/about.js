import { useContext, useEffect, useState } from "react";
import Bar from "../Home/Bar";
import Alret from "../static/alret";
import { Word } from "../../HeadPage/HeadContext";

export default function About(params) {
  let [ClickRank, setClickRank] = useState({ text: "Rank", click: false });
  let [ShowPropAlret, setShowPropAlret] = useState([false, false]);
  let { setProdict, PhoneDisplay } = useContext(Word);
  let [DynamicStyleSheetBut, setDynamicStyleSheetBut] = useState({});
  let [logDisplayPhone, setlogDisplayPhone] = useState("desktop");
  useEffect(() => {
    PhoneDisplay("DynamicStyle", setDynamicStyleSheetBut, (setdata) => {
      if (window.innerWidth >= 1200) {
        setdata({ left: 520 });
      } else if (window.innerWidth <= 500) {
        setdata({
          left: window.innerWidth / 10 - 15,
          padding: (20 / 2, 50 / 2),
        });
      } else {
        setdata({ left: window.innerWidth / 4 });
      }
    }).then((r) => setlogDisplayPhone(r));
  }, [PhoneDisplay]);
  useEffect(() => console.log(logDisplayPhone), [logDisplayPhone]);
  useEffect(() => setProdict(true), [setProdict]);
  return (
    <>
      <FormAbout
        ClickRank={ClickRank}
        style={DynamicStyleSheetBut}
        logDisplayPhone={logDisplayPhone}
      />
      <PrgLang
        setShowPropAlret={setShowPropAlret}
        logDisplayPhone={logDisplayPhone}
        style={{
          ...DynamicStyleSheetBut,
          left: DynamicStyleSheetBut.left + 22,
        }}
        ClickRank={ClickRank}
      />
      <div
        className={
          ClickRank.click && logDisplayPhone === "desktop"
            ? "animateRankBut"
            : ClickRank.click && logDisplayPhone === "phone"
            ? "butRank RankPhone"
            : "butRank"
        }
        style={
          logDisplayPhone !== "phone"
            ? {
                ...DynamicStyleSheetBut,
                left: DynamicStyleSheetBut.left + 27,
                padding: 0,
              }
            : {
                ...DynamicStyleSheetBut,
                left: DynamicStyleSheetBut.left + 27,
                padding: 0,
                width: 306,
                top: 540,
              }
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
        logDisplayPhone === "phone" ? (
          <div className="CouShowSkill">
            <p
              style={{
                fontFamily: "cursive",
                position: "fixed",
                left: 900 - 750,
                top: 300 + 145,
              }}
            >
              Python
            </p>
            <div
              className="skilemy python"
              style={{
                left: 900 - 750,
                top: 340 + 140,
              }}
            >
              <div className="countPy"></div>
            </div>
            <p
              style={{
                fontFamily: "cursive",
                position: "fixed",
                left: 1050 - 750,
                top: 370 + 120 + 20,
              }}
            >
              50%
            </p>
          </div>
        ) : (
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
        )
      ) : (
        ""
      )}

      {ClickRank.click ? (
        logDisplayPhone === "phone" ? (
          <div className="CouShowSkill">
            <p
              style={{
                fontFamily: "cursive",
                position: "fixed",
                left: 900 - 750,
                top: 380 + 135,
              }}
            >
              JavaScript
            </p>
            <div
              className="skilemy js"
              style={{
                left: 900 - 750,
                top: 420 + 135,
              }}
            >
              <div className="countJs"></div>
            </div>
            <p
              style={{
                fontFamily: "cursive",
                position: "fixed",
                left: 1050 - 750,
                top: 450 + 120 + 15,
              }}
            >
              25%
            </p>
          </div>
        ) : (
          <div className="CouShowSkill">
            <p
              style={{
                fontFamily: "cursive",
                position: "fixed",
                left: 900,
                top: 380,
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
                left: 1050,
                top: 450,
              }}
            >
              25%
            </p>
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
}
function FormAbout({ ClickRank, style, logDisplayPhone }) {
  return (
    <div
      style={style}
      className={
        ClickRank.click && logDisplayPhone === "desktop"
          ? "animateRankProf "
          : "FormAbout "
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
function PrgLang({ setShowPropAlret, ClickRank, style, logDisplayPhone }) {
  return (
    <div
      className={
        ClickRank.click && logDisplayPhone === "desktop"
          ? "animateRankPrg "
          : ClickRank.click && logDisplayPhone === "phone"
          ? "PrgLang animateRankPrgPhone "
          : "PrgLang "
      }
      style={style}
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
