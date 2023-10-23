import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage} from "../../pages";
const App = () => {
  return (
    <Router>
    <div className="app">
        <AppHeader/>
        <main>
            <Routes>
                 <Route  path="/comics" element={<ComicsPage/>}/>
                 <Route  path="/" element={   <MainPage/>}/>
           </Routes>
        </main>
    </div>
</Router>
  );
};

export default App;
