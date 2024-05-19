import { useContext } from "react";
import "./../style.css";
import { Word } from "./../../../../../HeadPage/HeadContext.js";
const FormNote = () => {
  let { onNewNote, setNewNote } = useContext(Word);
  if (onNewNote) {
    return (
      <div className="blackpop">
        <div className="FormpopNote">
          <div className="oneNote">
            <h3 className="titlenote">
              <input type="text" className="NoteTitle" placeholder="Title.." />
            </h3>
            <p>
              <textarea
                className="NoteCount"
                placeholder="Text Note Here.."
              ></textarea>
            </p>
          </div>
          <button className="NewNote" style={{ margin: 5, marginLeft: 40 }}>
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
