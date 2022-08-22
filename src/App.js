import React from 'react';
import { Routes, Route} from 'react-router-dom';
import NavigationBar from './component/routes/navigation/navigation';
import Shop from './component/routes/shop/shop';
import Home from './component/routes/home/home';
import Authentication from './component/routes/authentication/authentication';
import CheckOut from './component/routes/checkout/checkout';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index element= {<Home/>}/>
        <Route path ='shop/*' element= {<Shop/>}/>
        <Route path = 'auth' element={<Authentication/>}/>
        <Route path ='checkout' element={<CheckOut/>}/>
      </Route>
    </Routes>
  
  );
}
export default App;
