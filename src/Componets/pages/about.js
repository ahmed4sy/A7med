import Bar from "../Home/Bar";

export default function About(params) {
  return (
    <>
      <FormAbout />
      <PrgLang />

      <Bar />
    </>
  );
}
function FormAbout(params) {
  return (
    <div className="FormAbout">
      <img alt="profile" id="prof" src="20230508_190001.jpg" />
      <div>
        <p>
          👉 <code>name:Ahmed</code>
        </p>
        <p>
          👉 <code>age:17.11</code>
        </p>
        <p>
          👉 <code>from:sudan</code>
        </p>
        <p>
          <p className="inline">👉</p>
          <a href="/">
            <img alt="My Github" className="git" src="/github.png" />
          </a>
          <p className="inline">👈</p>
        </p>
      </div>
    </div>
  );
}
function PrgLang(params) {
  return (
    <div className="PrgLang">
      <label>Supported Programming languages:</label>
      <div className="ImgsCount">
        <img alt="Python" />
        <img alt="Js" />
      </div>
      <button>Rank</button>
    </div>
  );
}
