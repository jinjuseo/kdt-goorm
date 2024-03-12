import "./styles/global.scss";
import "./App.scss";
import { Nav, Banner, Row, Footer } from "./components";
import requests from "./api/requests";
const height = { height: "300vh" };
function App() {
  return (
    <div className="App" style={height}>
      <Nav />
      <Banner />
      <Row
        title="NETFILX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Footer />
    </div>
  );
}

export default App;
