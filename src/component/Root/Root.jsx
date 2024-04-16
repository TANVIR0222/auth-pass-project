import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
// import HeroRegister from "../HeroRegister/HeroRegister";
// import Reagister from "../Reagister/Reagister";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            
            {/* <Reagister></Reagister>
            <HeroRegister></HeroRegister> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;