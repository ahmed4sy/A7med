import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import "./../style.css";
import { deleteNotes, like } from "../../store";
import { Word } from "../../../../../HeadPage/HeadContext";
const Note = ({ pNote, tNote, likes, Key }) => {
  // let globalStore = useSelector((state) => state);
  let dispatch = useDispatch();

  let [onClickLike, setClickLike] = useState(null);
  let { setAPiNot } = useContext(Word);

  return (
    <div className="oneNote">
      <h3 className="titlenote">{tNote}</h3>
      <div
        className="counLike"
        onClick={() => {
          dispatch(like(Key));
          setAPiNot("like");
          setClickLike(true);
        }}
      >
        {onClickLike ? (
          <img alt="like" src="/imgs/Hertup2.png" className="like" />
        ) : (
          <img alt="like" src="/imgs/Hertnone2.png" className="like" />
        )}
        <span>{likes}</span>
      </div>

      <span
        className="remove"
        onClick={() => {
          setAPiNot("rm");
          dispatch(deleteNotes(Key));
        }}
      >
        X
      </span>
      <p>{pNote}</p>
    </div>
  );
};
export default Note;
