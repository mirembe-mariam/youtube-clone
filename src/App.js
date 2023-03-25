import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar.js";
import Recommendedvideos from "./Recommendedvideos/Recommendedvideos";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        {/*is used to figure out which component to show eg on the home which component shld be shown
      should we show trending or subscriptions*/}
      <Header/>{/*we want the header to be shown on the '3000 port' not only wen i type '3000/search'*/}
        <Routes>
          {/*<Route path="/" element={<h1>Home page</h1>} />*/}
          <Route path="/search" element={<h1>Search Page </h1>} />
          {/*<Route path="/search" element={<div><Header /><h1>Search Page</h1></div>}/>*/}
        
          <Route path="/" element={<div className="app__body"><Sidebar /><Recommendedvideos /></div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// In React Router v6, all routes should be wrapped inside the Routes component, and you can use the element prop to render a component.