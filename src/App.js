import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./componenets/Admin";
import Students from "./componenets/Students";
import Teacher from "./componenets/Teacher";
import Generic from "./componenets/Generic";
import Error from "./componenets/Teacher";
import Test from "./componenets/Test";
import { Link } from "react-router-dom";
function App() {
  return ( <>
   <h1>WAZZCARDS</h1> 
   <BrowserRouter>
   <Routes>

      <Route path="/"         element={<Admin />} />
      <Route path="/Students" element={<Students />} />
      <Route path="/Teacher"  element={<Teacher />} />
      <Route path="/Generic"  element={<Generic />} />
      <Route path="/Error"    element={<Error />} />
      <Route path="/Test"     element={<Test />} />

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App;
