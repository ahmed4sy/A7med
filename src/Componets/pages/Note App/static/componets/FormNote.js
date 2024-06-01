import { useContext, useReducer, useState } from "react";
import "./../style.css";
import { useDispatch } from "react-redux";
import { Word } from "./../../../../../HeadPage/HeadContext.js";
import { add } from "../../store.js";
const FormNote = () => {
  let { onNewNote, setNewNote } = useContext(Word);
  let [titleStyle, setTitleStyle] = useState({});
  let { setAPiNot } = useContext(Word);
  let inintState = {
    title: "",
    article: "",
  };
  const handleDataNote = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.contain };
      case "article":
        return { ...state, article: action.contain };
      case "rest":
        return inintState;
      default:
        return state;
    }
  };

  let [counterNote, dispatchNote] = useReducer(handleDataNote, inintState);
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
                style={titleStyle}
                placeholder="Title.."
                onChange={(e) => {
                  dispatchNote({ type: "title", contain: e.target.value });
                }}
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
              if (
                counterNote.title.length > 5 ||
                counterNote.article.length <= 2
              ) {
                setTitleStyle({
                  border: "red solid 2px",
                });
              } else {
                setTitleStyle({
                  border: "green solid 2px",
                });
                setNewNote(false);
                dispatch(add(counterNote));
                dispatchNote({ type: "rest" });
                setAPiNot("ADD");
              }
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
