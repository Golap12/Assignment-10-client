import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from './../footer/Footer';


const Root = () => {
    return (
        <div>

            <Nav></Nav>
            <div className=" min-h-screen container mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;