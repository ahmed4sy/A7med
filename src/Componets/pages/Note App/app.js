import React, { useEffect, useState } from "react";
import "./static/style.css";
import { Provider } from "react-redux";
import CountNote from "./static/componets/CountNote";
import Note from "./static/componets/Note";
import FormNote from "./static/componets/FormNote";
import { Link } from "react-router-dom";
import Store from "./store";
import axios from "axios";
const AppNote = () => {
  let [Notes, setNotes] = useState([]);
  let APINotes = async () => {
    const fee = axios.get("http://127.0.0.1:8080/api/notes");
    setNotes((await fee).data);
  };
  useEffect(() => {
    APINotes();
  }, [Notes]);
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
    <Provider store={Store}>
      <div className="AppNote">
        <label className="LabelNotes">Notes</label>
        <FormNote />
        <CountNote>{NoteArr}</CountNote>
        <Link to={"/home"}>
          <button className="ButNoteExit">exit</button>
        </Link>
      </div>
    </Provider>
  );
};

export default AppNote;
