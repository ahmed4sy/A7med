import React, { useEffect, useState } from "react";
import "./../style.css";
import Notes from "../data.json";
const Note = ({ pNote, tNote, likes, Key }) => {
  const ObjLikes = refValue(() => {
    let i = {};
    for (let index = 1; index < Notes.length + 1; index++) {
      i[index] = false;
    }
    return i;
  });

  let [onClickLike, setClickLike] = useState(null);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))[Key] === true) {
      setClickLike(true);
    } else if (JSON.parse(localStorage.getItem("user"))[Key] === false) {
      setClickLike(false);
    }
  }, []);
  useEffect(() => {
    if (onClickLike === true) {
      ObjLikes[Key] = true;
      localStorage.setItem("user", JSON.stringify(ObjLikes));
    } else if (onClickLike === false) {
      ObjLikes[Key] = false;
      localStorage.setItem("user", JSON.stringify(ObjLikes));
    }
  }, [onClickLike]);
  return (
    <div className="oneNote">
      <h3 className="titlenote">{tNote}</h3>
      <div
        className="counLike"
        onClick={() => (onClickLike ? setClickLike(false) : setClickLike(true))}
      >
        {onClickLike ? (
          <img alt="like" src="/imgs/Hertup2.png" className="like" />
        ) : (
          <img alt="like" src="/imgs/Hertnone2.png" className="like" />
        )}
        <span>{likes}</span>
      </div>

      <span className="remove">X</span>
      <p>{pNote}</p>
    </div>
  );
};
function refValue(callback) {
  return callback();
}
export default Note;
