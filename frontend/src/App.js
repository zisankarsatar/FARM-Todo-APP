import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/list";
import Create from "./components/create";
import Layout from "./components/layout";
import Update from "./components/update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<List/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/update" element={<Update/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
