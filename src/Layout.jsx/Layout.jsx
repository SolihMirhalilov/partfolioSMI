import Navbar from "../components/Navbar/NavTop"
import Valute from "../components/Valute/Valute.jsx"
import Menu from "../components/Menu/Menu.jsx"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer.jsx"





export default function Layout(){
    return(
        <>
                <Navbar /> 
                <Outlet />
                <Valute />
                <Menu />
                <Footer />
                
        </>

    )
}