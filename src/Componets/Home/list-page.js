import { Link } from "react-router-dom";

export default function ListPage({ list }) {
  return (
    <div className={list ? "lista list-on" : "lista list-off"}>
      {
        <Link to="/projects" id="li">
          <h2 className={list ? "pagelis prg-on" : "pagelis prg-off"} id="prg">
            projects
          </h2>
        </Link>
      }
      <Link to="/feedbacks" id="li">
        <h2 className={list ? "pagelis fbs-on" : "pagelis fbs-off"} id="fbs">
          feedbacks
        </h2>
      </Link>
      <Link to="/about" id="li">
        <h2 className={list ? "pagelis abt-on" : "pagelis abt-off"} id="abt">
          about
        </h2>
      </Link>
    </div>
  );
}
