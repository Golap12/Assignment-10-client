import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Footer from './../footer/Footer';
import img1 from "../../assets/images/1.jpg";


const Root = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${img1})` }}>
            <Nav></Nav>
            <div className="backdrop-blur-3xl">
                <div className=" min-h-screen max-w-screen-2xl mx-auto">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;