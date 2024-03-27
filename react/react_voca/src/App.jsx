import "./App.css";
import Header from "./Component/Header";
import DayList from "./Component/DayList";
import Day from "./Component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./Component/EmptyPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
