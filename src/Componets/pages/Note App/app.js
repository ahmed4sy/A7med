import React from "react";
import "./static/style.css";
import CountNote from "./static/componets/CountNote";
import Note from "./static/componets/Note";
import FormNote from "./static/componets/FormNote";
import { Link } from "react-router-dom";
import Notes from "./static/data.json";
const AppNote = () => {
  const NoteArr = Notes.map((note) => {
    if (note.show) {
      return (
        <Note
          tNote={note.title}
          pNote={note.Note}
          likes={note.like}
          Key={note.id}
        />
      );
    }
    return "";
  });
  return (
    <div className="AppNote">
      <label className="LabelNotes">Notes</label>
      <FormNote />
      <CountNote>{NoteArr}</CountNote>
      <Link to={"/home"}>
        <button className="ButNoteExit">exit</button>
      </Link>
    </div>
  );
};

export default AppNote;
