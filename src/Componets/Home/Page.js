import Bar from "./Bar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Word } from "../../HeadPage/HeadContext";
export default function Page({ children }) {
  let [popUp, SetpopUp] = useState("pop-down");
  let [Feedback, setFeedback] = useState("");
  // tee
  let [Footer, setFooter] = useState("");
  let [feedcss, setfeedcss] = useState("");
  const { PhoneDisplay } = useContext(Word);
  useEffect(() => {
    setFooter(" footer ");
    setfeedcss(" feedback ");
    PhoneDisplay(
      "ConstStyle",
      [setFooter, setfeedcss],
      [" footer footerp ", " feedback feedbackp "]
    );
  }, [PhoneDisplay]);

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
        className={Footer}
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
          axios.post("https://aghshu.pythonanywhere.com/api/feedback", {
            feed: Feedback,
          });
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
