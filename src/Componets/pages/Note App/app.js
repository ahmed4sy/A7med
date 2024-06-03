import React, { useContext, useEffect, useState } from "react";
import "./static/style.css";
import { Provider } from "react-redux";
import CountNote from "./static/componets/CountNote";
import Note from "./static/componets/Note";
import FormNote from "./static/componets/FormNote";
import { Link } from "react-router-dom";
import Store from "./store";
import axios from "axios";
import { Word } from "../../../HeadPage/HeadContext";
const AppNote = () => {
  let [Notes, setNotes] = useState([]);
  let { APINot } = useContext(Word);
  let APINotes = async () => {
    try {
      const fee = axios.get("https://aghshu.pythonanywhere.com/api/notes");
      setNotes((await fee).data);
    } catch {
      setNotes([
        {
          id: 0,
          show: true,
          title: "Error:",
          Note: "Internet Failed",
          like: 0,
        },
      ]);
    }
  };
  useEffect(() => {
    APINotes();
  }, []);
  useEffect(() => {
    if (APINot.type === "ADD") {
      Notes.push(APINot.data);
    } else if (APINot.type === "like") {
      Notes[APINot.data - 1].like += 1;
    } else if (APINot.type === "rm") {
      Notes[APINot.data - 1].show = false;
    }
  }, [APINot, Notes]);

  const NoteArr = Notes.map((note) => {
    if (note.show) {
      return (
        <Note
          tNote={note.title}
          pNote={note.Note}
          likes={note.like}
          key={note.id}
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
