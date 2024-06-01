import { useContext, useState } from "react";
import "./../style.css";
import { useDispatch } from "react-redux";
import { Word } from "./../../../../../HeadPage/HeadContext.js";
import { add } from "../../store.js";
const FormNote = () => {
  let { onNewNote, setNewNote } = useContext(Word);

  let { titleNot, setTitle } = useState("");
  let { textNot, setText } = useState("");
  let dispatch = useDispatch();
  if (onNewNote) {
    return (
      <div className="blackpop">
        <div className="FormpopNote">
          <div className="oneNote">
            <h3 className="titlenote">
              <input
                type="text"
                className="NoteTitle"
                placeholder="Title.."
                onChange={(e) => setTitle(e.target.value)}
                value={titleNot}
              />
            </h3>
            <p>
              <textarea
                className="NoteCount"
                placeholder="Text Note Here.."
                onChange={(e) => setText(e.target.value)}
                value={textNot}
              ></textarea>
            </p>
          </div>
          <button
            className="NewNote"
            style={{ margin: 5, marginLeft: 40 }}
            onClick={() => {
              setNewNote(false);
              dispatch(add());
            }}
          >
            save
          </button>
          <button
            className="NewNote"
            style={{ marginLeft: 25 }}
            onClick={() => setNewNote(false)}
          >
            back
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default FormNote;
