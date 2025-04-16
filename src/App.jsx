import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const bars = [0, 5, 15, 35, 55, 70, 90, 100];

  return (
    <>
      <div>
        {bars.map((value) => {
          return <ProgressBar key={value} progress={value} />;
        })}
      </div>
    </>
  );
}
export default App;
