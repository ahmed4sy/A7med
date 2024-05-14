export default function Template({ children }) {
  // temp
  return (
    <div className="Con color-back">
      <h3>Templates:</h3>
      {children}
      <h3
        style={{
          marginTop: 350,
        }}
      >
        New Update:
      </h3>
    </div>
  );
}
