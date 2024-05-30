import { useContext, useReducer } from "react";
import "./../style.css";
import { useDispatch } from "react-redux";
import { Word } from "./../../../../../HeadPage/HeadContext.js";
import { add } from "../../store.js";
const FormNote = () => {
  let { onNewNote, setNewNote } = useContext(Word);
  const handleDataNote = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, [action.type]: action.contain };
      case "article":
        return { ...state, [action.type]: action.contain };
      default:
        return state;
    }
  };

  let { counterNote, dispatchNote } = useReducer(handleDataNote, {
    title: "",
    article: "",
  });
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
                onChange={(e) =>
                  dispatchNote({ type: "title", contain: e.target.value })
                }
                value={counterNote.title}
              />
            </h3>
            <p>
              <textarea
                className="NoteCount"
                placeholder="Text Note Here.."
                onChange={(e) =>
                  dispatchNote({ type: "article", contain: e.target.value })
                }
                value={counterNote.article}
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
