import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '@pages/index/index'
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />} ></Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
