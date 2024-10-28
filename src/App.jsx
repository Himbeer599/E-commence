import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';  
import Registerpage from './Components/Register/Registerpage';
import Homepage from './Components/Home/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/registerpage" element={<Registerpage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import Hallo from "./Components/Hallo/Hallo.jsx";
// import './Components/Hallo/Hallo.css'; // 引入CSS文件
// import mondImage from './Components/Hallo/Mond.jpg'

// function App() {
//   const [showImage, setShowImage] = useState(false); // 定义状态来控制图片的显示

//   const handleClick = () => {
//     setShowImage(true); // 点击文字后显示图片
//   };

//   return (
//     <div className="container">
//       {/* 判断显示文字还是图片 */}
//       {showImage ? (
//         <img src={mondImage} alt="photo" className="photo" />
//       ) : (
//         <div className="title" onClick={handleClick}>
//             <Hallo/>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

