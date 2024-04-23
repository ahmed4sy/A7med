import { useState } from "react";
import axios from "axios";
export default function Page({ children }) {
  let [Onlis, setOnlis] = useState(false);
  let [popUp, SetpopUp] = useState("pop-down");
  let [cls, setCls] = useState("lis-off");
  let [Feedback, setFeedback] = useState("");

  return (
    <div className="Page">
      <div className="Head">
        <h1 className="Title-Page">A7med</h1>
        <Img lis={Onlis} setLis={setOnlis} cls={cls} setCls={setCls} />
      </div>
      {children}
      <PopFB
        pU={popUp}
        sPU={SetpopUp}
        Feedback={Feedback}
        setFeedback={setFeedback}
      />
      <footer
        onClick={() => {
          popUp === "pop-up" ? SetpopUp("pop-down") : SetpopUp("pop-up");
        }}
      >
        FeedBack
      </footer>
    </div>
  );
}
function PopFB({ Feedback, setFeedback, pU, sPU }) {
  return (
    <form
      className={pU + " feedback"}
      onSubmit={(e) => {
        e.preventDefault();
        try {
          axios
            .post("https://aghshu.pythonanywhere.com/api/feedback", {
              feed: Feedback,
            })
            .then((res) => console.log(res));
        } catch (err) {
          console.log("Error");
        }

        sPU("pop-down");
        setFeedback("");
      }}
    >
      <input
        type="text"
        className="text"
        placeholder="Write here.."
        value={Feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <input type="submit" value="send" id="sub" />
    </form>
  );
}

function Img({ lis, setLis, cls, setCls }) {
  return !lis ? (
    <img
      alt="list"
      className={"list " + cls}
      src="/25956-200.png"
      onClick={() => {
        setCls("lis-on");
        setLis(true);
      }}
    />
  ) : (
    <img
      alt="list"
      className="list"
      src="/390423-200.png"
      onClick={() => {
        setCls("lis-off");
        setLis(false);
      }}
    />
  );
}
