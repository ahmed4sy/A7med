import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListPage({ list }) {
  // what
  let [lis, setLis] = useState({
    projects: "projects",
    feedbacks: "feedbacks",
    about: "about",
  });

  useEffect(() => {
    let liss = { ...lis };
    const ph = window.location.pathname;
    ph !== "/home"
      ? (lis[ph.split("/")[1]] = "Home")
      : (lis[ph.split("/")[1]] = ph.split("/")[1]);
    setLis(liss);
  }, []);

  return (
    <div className={list ? "lista list-on" : "lista list-off"}>
      {
        <Link to={"/" + lis["projects"]} id="li">
          <h2 className={list ? "pagelis prg-on" : "pagelis prg-off"} id="prg">
            {lis["projects"]}
          </h2>
        </Link>
      }
      <Link to={"/" + lis["feedbacks"]} id="li">
        <h2 className={list ? "pagelis fbs-on" : "pagelis fbs-off"} id="fbs">
          {lis["feedbacks"]}
        </h2>
      </Link>
      <Link to={"/" + lis["about"]} id="li">
        <h2 className={list ? "pagelis abt-on" : "pagelis abt-off"} id="abt">
          {lis["about"]}
        </h2>
      </Link>
    </div>
  );
}
