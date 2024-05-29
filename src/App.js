import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import FSD from "./Components/FSD";
import DataScience from "./Components/DataScience";
import CyberSecurity from "./Components/CyberSecurity";
import Career from "./Components/Career";
import AllCourses from "./Components/AllCourses";

function App() {
  return <>
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/all-courses" element={<AllCourses/>}/>
          <Route path="/fsd-courses" element={<FSD/>}/>
          <Route path="/data-science-courses" element={<DataScience/>}/>
          <Route path="/cyber-security-courses" element={<CyberSecurity/>}/>
          <Route path="/career-courses" element={<Career/>}/>
          <Route path="*" element={<Navigate to='/all-courses'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  </>
}

export default App;
