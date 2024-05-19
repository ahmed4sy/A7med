import { useContext } from "react";
import "./../style.css";
import { Word } from "../../../../../HeadPage/HeadContext";
const CountNote = ({ children }) => {
  let { setNewNote } = useContext(Word);
  return (
    <div className="CountNote">
      <div className="TopCountNote">
        <p>note list</p>
        <button
          className="NewNote"
          onClick={() => {
            setNewNote(true);
          }}
        >
          new
        </button>
      </div>
      {children}
    </div>
  );
};

export default CountNote;
