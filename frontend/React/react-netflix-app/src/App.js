import "./styles/global.scss";
import "./App.scss";
import { Nav, Banner, Row, Footer } from "./components";
import requests from "./api/requests";
import { Route, Routes, Outlet } from "react-router-dom";
import { MainPage, DetailPage, SearchPage } from "./pages";

const Layout = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path=":movieId" element={<DetailPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
