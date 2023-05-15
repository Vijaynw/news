// import logo from './logo.svg';
// import './App.css';
import "./App.scss";
import React ,{Component} from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { Routes,Route } from "react-router-dom";
import Error from "./component/Error";
export default class App extends Component {
    
render() {
 
return(

    <div>
    <Navbar/>
        <Routes>
<Route path="/" element={<News/>} ></Route>
<Route path="/about" element={"about"}></Route>
<Route path="*" element={<Error/>}></Route>
    {/* <News pageSize={4}/> */}
        </Routes>
    
    </div>
)

}


}

