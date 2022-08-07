import React from 'react';
import { Routes, Route} from 'react-router-dom';
import NavigationBar from './component/routes/navigation/navigation';
import Shop from './component/routes/shop/shop';
import Home from './component/routes/home/home';
import SignIn from './component/routes/sign-in/sign-in';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index element= {<Home/>}/>
        <Route path ='shop' element= {<Shop/>}/>
        <Route path = 'signin' element={<SignIn/>}/>
      </Route>
    </Routes>
  
  );
}

export default App;
