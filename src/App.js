import Page from "./Componets/Home/Page";
import Cv from "./Componets/Home/Cv";
import Scm from "./Componets/Home/SM";
import Template from "./Componets/Home/Container";

import "./Styles/App.css";
import "./Styles/StylePage.css";
import { useContext, useEffect, useState } from "react";
import { Word } from "./HeadPage/HeadContext";
function App() {
  //app
  // let { Viwes } = useContext(Word);
  // useEffect(() => {
  //   if (!sessionStorage.getItem("ViwePage")) {
  //     sessionStorage.setItem("ViwePage", true);
  //     axios.post("http://127.0.0.1:8080/api/feedback", {
  //       viwe: Viwes,
  //     });
  //   }
  // }, [Viwes]);
  let { setProdict } = useContext(Word);
  useEffect(() => setProdict(true), [setProdict]);
  let { arrImgs } = useContext(Word);
  let [loa, setLoa] = useState("sizeC");
  const { PhoneDisplay } = useContext(Word);

  useEffect(() => {
    PhoneDisplay("ConstStyle", [setLoa], ["sizeP"]);
  }, [PhoneDisplay]);
  let [loading, setloading] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("loading")) {
      sessionStorage.setItem("loading", "none");
    }

    if (sessionStorage.getItem("loading") !== "view") {
      setloading(true);
      setTimeout(() => {
        setloading(false);
      }, 1000);
      sessionStorage.setItem("loading", "view");
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className={"load " + loa}>
          <div className="loading"></div>
          <img alt="loading" src="wait.gif" />
        </div>
      ) : (
        <div>
          <Page>
            <Cv />
            <Scm />
            <Template>{arrImgs}</Template>
          </Page>
        </div>
      )}
    </>
  );
}

export default App;
