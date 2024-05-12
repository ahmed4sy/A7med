import { useEffect, useState } from "react";
import "./StyPag.css";
import axios from "axios";
export default function FeedAPI(params) {
  let [feeds, setFeeds] = useState([]);

  let APIFeed = async () => {
    try {
      const fee = axios.get("https://aghshu.pythonanywhere.com/api/feedback");
      setFeeds((await fee).data.data);
    } catch (err) {
      setFeeds(["internet Failed", "XXX", "XXX", "XXX", "XXX"]);
    }
  };

  useEffect(() => {
    APIFeed();
  }, []);
  let FeedsP = feeds.map((data) => <p className="feedone">{data}</p>);
  return <>{FeedsP}</>;
}
