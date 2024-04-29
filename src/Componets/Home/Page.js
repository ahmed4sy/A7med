import Bar from "./Bar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Page({ children }) {
  let [popUp, SetpopUp] = useState("pop-down");
  let [Feedback, setFeedback] = useState("");

  let [classs, setClasss] = useState("");
  let [feedcss, setfeedcss] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (width <= 500) {
      setClasss(" footer footerp ");
      setfeedcss(" feedback feedbackp ");
    }
    if (width >= 500) {
      setClasss("footer");
      setfeedcss(" feedback");
    }
  }, [width]);
  return (
    <div className="Page">
      {children}
      <PopFB
        feedcss={feedcss}
        pU={popUp}
        sPU={SetpopUp}
        Feedback={Feedback}
        setFeedback={setFeedback}
      />
      <footer
        className={classs}
        onClick={() => {
          popUp === "pop-up" ? SetpopUp("pop-down") : SetpopUp("pop-up");
        }}
      >
        FeedBack
      </footer>
      <Bar />
    </div>
  );
}
function PopFB({ Feedback, feedcss, setFeedback, pU, sPU }) {
  return (
    <form
      className={pU + feedcss}
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
