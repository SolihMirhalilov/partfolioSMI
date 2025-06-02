
import { useEffect } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import Navbar from "../Navbar/NavTop";
import Valute from "../Valute/Valute";
import Footer from "../Footer";
import nonePhoto from "../Menu/imgBook&Finance/nonePhoto.png"


export default function HotNewsDetails(){
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state

    useEffect(() => {
        if(!location.state){
            navigate("/")
        }
    }, [state , navigate]);

    if(!state) return null

    const {name = "Malumot yoq" , description = "Malumot yoq"  , img  , content} = state;

        return(
        <>
            <Navbar />
            <Valute /> 
            <div className="border-2 mt-10">
                
                <div className="max-w-[1140px] m-auto p-5 ">

                <img
                className="w-[85%] m-auto"
                src={img || nonePhoto} alt="" />
                <h1 
                className="mt-10 text-2xl">{name}</h1>
                <p className="mt-3">{content}</p>
                <p>{description}</p>

                </div>

            </div>
            <Footer />
            </>
        )
}