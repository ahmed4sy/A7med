import { useEffect, useState } from "react";
import "./StyPag.css";
import axios from "axios";
export default function FeedAPI(params) {
  let [feeds, setFeeds] = useState([]);
  let APIFeed = async () => {
    const fee = axios.get("https://aghshu.pythonanywhere.com/api/feedback");

    fee.data
      ? setFeeds((await fee).data.data)
      : setFeeds(["Intrnet Failed", "XXX", "XXX", "XXX", "XXX"]);
  };
  useEffect(() => {
    APIFeed();
  }, []);
  let FeedsP = feeds.map((data) => <p className="feedone">{data}</p>);
  return <>{FeedsP}</>;
}
