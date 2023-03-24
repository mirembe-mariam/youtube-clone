import "./App.css";
import Header from "./Header/Header.js";
import Sidebar from "./Sidebar/Sidebar.js"
import Recommendedvideos from "./Recommendedvideos/Recommendedvideos";

function App() {
  return (
    <div className="app">
    <Header />
    <div className="app__body"> {/*we create this for the body of the clone and it will consisit of the remaining two components*/}
    <Sidebar />
    <Recommendedvideos />
     </div>
    </div>
  );
}

export default App;
