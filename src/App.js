import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Form from "./components/form";


import Form2 from "./components/form2";
import Form3 from "./components/form3";
import Form4 from "./components/form4";
import Form5 from "./components/form5";
import Form6 from "./components/form6";
import Form7 from "./components/form7";
import Form8 from "./components/form8";
import Form9 from "./components/form9";
import Form10 from "./components/form10";
import Form11 from "./components/form11";
import Form12 from "./components/form12";
import Form13 from "./components/form13";
import Form14 from "./components/form14";
import Form15 from "./components/form15";
import Form16 from "./components/form16";
import Form17 from "./components/form17";
import Form18 from "./components/form18";

import Form19 from "./components/form19";
import Form20 from "./components/form20";
import Form21 from "./components/form21";
import Form22 from "./components/form22";
import Form23 from "./components/form23";
import Form24 from "./components/form24";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/form" element={<Form />} />
    //      {/* // <div className="App"> */}

    //     {/* <Form2/> */}
    //     {/* <Form3/> */}
    //     {/* <Form4/>
    //   <Form5/>
    //   <Form6/>
    //   <Form7/>
    //   <Form8/>
    //   <Form9/>
    //   <Form10/>
    //   <Form11/>
    //   <Form12/>
    //   <Form15/>
    //   <Form16/>
    //   <Form17/>
    //   <Form18/>
    //   <Form19/>
    //   <Form20/>
    //   <Form21/>
    //   <Form22/>
    //   <Form23/>
    //   <Form24/> */}

    //     {/* // </div> */}
    //   </Routes>
    // </BrowserRouter>

    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/form2" element={<Form2 />} />
      <Route path="/form3" element={<Form3 />} />
      <Route path="/form4" element={<Form4 />} />
      <Route path="/form5" element={<Form5 />} />
      <Route path="/form6" element={<Form6 />} />
      <Route path="/form7" element={<Form7 />} />
      <Route path="/form8" element={<Form8 />} />
      <Route path="/form9" element={<Form9 />} />
      <Route path="/form10" element={<Form10 />} />
      <Route path="/form11" element={<Form11 />} />
      <Route path="/form12" element={<Form12 />} />
      <Route path="/form13" element={<Form13 />} />
      <Route path="/form14" element={<Form14 />} />
      <Route path="/form15" element={<Form15 />} />
      <Route path="/form16" element={<Form16 />} />
      <Route path="/form17" element={<Form17 />} />
      <Route path="/form18" element={<Form18 />} />
      <Route path="/form19" element={<Form19 />} />
      <Route path="/form20" element={<Form20 />} />
      <Route path="/form21" element={<Form21 />} />
      <Route path="/form22" element={<Form22 />} />
      <Route path="/form23" element={<Form23 />} />
      <Route path="/form24" element={<Form24 />} />
      
    </Routes>
  );
}

export default App;
