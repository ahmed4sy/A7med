import { useState } from "react";
export default function Template({ children }) {
  // temp

  return (
    <div className="Con color-back">
      <h3>Templates:</h3>
      {children}
      <h3
        style={{
          marginTop: 320,
        }}
      >
        New Update:
      </h3>
      <Almost />
    </div>
  );
}
function Almost(params) {
  let [onMoveDownUpdate, setMoveDownUpdate] = useState(false);
  return (
    <>
      <div className="AlmostDesing">
        {onMoveDownUpdate ? (
          <p
            style={{
              position: "fixed",
              bottom: 60,
              paddingLeft: 60,
              fontSize: 45,
            }}
          >
            Almost finished
          </p>
        ) : (
          ""
        )}
        <div
          style={
            onMoveDownUpdate
              ? {
                  height: "85%",
                }
              : {}
          }
        ></div>
      </div>

      <div
        onMouseMoveCapture={() => setMoveDownUpdate(true)}
        onMouseOutCapture={() => setMoveDownUpdate(false)}
        style={{
          position: "fixed",
          width: 450,
          height: 140,
          bottom: 50,
          marginLeft: 25,
          borderRadius: 25,
          cursor: "pointer",
        }}
      ></div>
    </>
  );
}
