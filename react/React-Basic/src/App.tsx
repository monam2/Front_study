import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '@pages/index/index'
import { RecoilRoot } from "recoil";
import BookmarkPage from '@pages/bookmark/index'

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />} ></Route>
        <Route path="/:id" element={<MainPage />} ></Route>
        <Route path="/bookmark" element={<BookmarkPage />} ></Route>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
