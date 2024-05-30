import Page from "./Componets/Home/Page";
import Cv from "./Componets/Home/Cv";
import Scm from "./Componets/Home/SM";
import Template from "./Componets/Home/Container";

import "./Styles/App.css";
import "./Styles/StylePage.css";
import { useContext, useEffect } from "react";
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

  return (
    <div>
      <Page>
        <Cv />
        <Scm />
        <Template>{arrImgs}</Template>
      </Page>
    </div>
  );
}

export default App;
