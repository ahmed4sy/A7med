import Bar from "../Home/Bar";
import "./StyPag.css";
export default function Feedbacks(params) {
  return (
    <>
      <div className="feeds">
        <p className="contFeedpara">
          <pre>comment</pre>
          <h1>Ahmed yousif</h1>
          <p className="pp">شكرا الى كل من اعجبه موقعي</p>
        </p>
        <iframe
          frameBorder={"0"}
          className="cous"
          src="/data/api/feedbacks"
          title="feed"
        ></iframe>
      </div>
      <Bar />
    </>
  );
}
