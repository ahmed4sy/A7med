import React, { useContext, useEffect, useRef, useState } from "react";
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
  let { APINot, setAPiNot } = useContext(Word);
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
  const handleNotes = (arr) => {
    return arr.map((note) => {
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
  };
  useEffect(() => {
    if (APINot.type === "ADD") {
      let Notescopy = [...Notes];

      Notescopy.push({
        id: Notescopy.length + 1,
        show: true,
        title: APINot.data.title,
        Note: APINot.data.article,
        like: 0,
      });

      setNotes(Notescopy);
      setAPiNot({ type: "none", data: "none" });
    } else if (APINot.type === "like") {
      let Notescopy = [...Notes];
      Notescopy[APINot.data - 1].like += 1;
      setNotes(Notescopy);
      setAPiNot({ type: "none", data: "none" });
      setAPiNot({ type: "none", data: "none" });
    } else if (APINot.type === "rm") {
      let Notescopy = [...Notes];
      Notescopy[APINot.data - 1].show = false;
      setNotes(Notescopy);
      setAPiNot({ type: "none", data: "none" });
    }
  }, [APINot, Notes]);
  let NoteArr = handleNotes(Notes);

  // useEffect(() => {
  //   noteArrRef.current = handleNotes(Notes);
  // }, [Notes]);
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
