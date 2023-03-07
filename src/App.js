import "./App.css";
import FlexComponentOne from "./components/FlexComponentOne";
import FlexComponentTwo from "./components/FlexComponentTwo";
import FlexComponentThree from "./components/FlexComponentThree";

function App() {
  return (
    <>
      <div style={{ padding: 40 }}>
        <FlexComponentOne />
      </div>
      <div style={{ padding: 40 }}>
        <FlexComponentTwo />
      </div>
      <div style={{ padding: 40 }}>
        <FlexComponentThree />
      </div>
    </>
  );
}

export default App;
