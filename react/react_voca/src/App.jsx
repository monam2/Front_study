import './App.css';
import Hello from "./Component/Hello";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="app">
      <Hello age={30}></Hello>
      {/* <Hello age={20}></Hello>
      <Hello age={10}></Hello> */}
      <Welcome text={"어서오세요."}>
      </Welcome>

    </div>    
  )
}

export default App
