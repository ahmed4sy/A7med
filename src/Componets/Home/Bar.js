import { useContext, useEffect, useState } from "react";
import ListPage from "./list-page";
import "./../../Styles/bar.css";
import { Word } from "../../HeadPage/HeadContext";
export default function Bar() {
  let [Onlis, setOnlis] = useState(false);

  const [Timeout, setOut] = useState(false);
  const { logDisplay, stateBarList, setBarList } = useContext(Word);
  useEffect(() => {
    if (stateBarList.turn === true) {
      setOut(true);
      setTimeout(() => {
        setOut(false);
      }, 1000);
    }
  }, [stateBarList.turn]);
  return (
    <div className="Head">
      <h1 className="Title-Page">A7med</h1>

      {/* List */}
      {stateBarList.type === "defult" && !stateBarList.click ? (
        <>
          <div
            className="List-Page"
            onMouseMoveCapture={() =>
              setBarList({ ...stateBarList, turn: true })
            }
            onMouseOutCapture={() =>
              setBarList({ ...stateBarList, turn: false })
            }
            onClick={() => {
              setOnlis(Onlis ? false : true);
            }}
          >
            <span className={Onlis ? "keyframespan1 control" : "none"}></span>
            <span className={Onlis ? "hide" : "none"}></span>
            <span className={Onlis ? "keyframespan2 control" : "none"}></span>
          </div>
          <ListPage list={Onlis} />
        </>
      ) : (
        ""
      )}
      <BarList stateBarList={stateBarList} />
      {logDisplay !== "phone" ? (
        <div
          className={
            stateBarList.click
              ? "hideBarList"
              : (stateBarList.turn || Timeout) && !Onlis
              ? "AnimateBarListDesk"
              : "AnimateBarListDeskOut"
          }
          onMouseMoveCapture={() => setBarList({ ...stateBarList, turn: true })}
          onMouseOutCapture={() => setBarList({ ...stateBarList, turn: false })}
          onClick={() => setBarList({ ...stateBarList, click: true })}
        >
          <span
            style={{
              position: "fixed",
              top: 18,
            }}
          >
            ⇦
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
function BarList({ stateBarList }) {
  if (stateBarList.click) {
    return (
      <div className="ListBarUp">
        <a
          href="/home"
          style={
            window.location.pathname === "/home"
              ? {
                  backgroundColor: "#13668a",
                  animation: "opcStyleShow 1.3s 1 forwards",
                }
              : { animation: "opcStyleShow 1.3s 1 forwards" }
          }
        >
          <span>Home</span>
        </a>

        <a
          href="/Projects"
          style={
            window.location.pathname === "/Projects"
              ? {
                  backgroundColor: "#13668a",
                  animation: "opcStyleShow 1s 1 forwards",
                }
              : { animation: "opcStyleShow 1s 1 forwards" }
          }
        >
          <span>Projects</span>
        </a>

        <a
          href="/feedbacks"
          style={
            window.location.pathname === "/feedbacks"
              ? {
                  backgroundColor: "#13668a",
                  animation: "opcStyleShow .5s 1 forwards",
                }
              : { animation: "opcStyleShow .5s 1 forwards" }
          }
        >
          <span>Feedbacks</span>
        </a>

        <a
          href="/about"
          style={
            window.location.pathname === "/about"
              ? {
                  backgroundColor: "#13668a",
                  animation: "opcStyleShow .3s 1 forwards",
                }
              : { animation: "opcStyleShow .3s 1 forwards" }
          }
        >
          <span>About</span>
        </a>
      </div>
    );
  }
}
