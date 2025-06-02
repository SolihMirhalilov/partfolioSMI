import React, { useEffect, useState } from "react";
import upadok from "../../assets/upadok.png"
import pluse from "../../assets/pluse.png"
import "./valute.css"

export default function CurrencyRates() {
  //Dollar
  const [usd, setUsd] = useState(null);
  const [usdIdx, setUsdIdx] = useState(null);
  //Euro
  const[euro,setEuro] = useState(null);
  const [euroIdx,setEuroIdx] = useState(null)
  //rub
  const[rub,setrub] = useState(null);
  const[rubIdx,setrubIdx] = useState(null);

  //BTC 
  const[btc , setBtc] = useState(null);
  //EFR
  const[efr,setEfr] = useState(null);
  //App
  const[app,setapp] = useState(null)

  //API 
  useEffect(() => {
    const getUsd = async () => {
      try {
        // API DOLLAR
        const res = await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/");
        const data = await res.json();
        
        const usd = setUsd(data[0].Rate);
        const usdIdx = setUsdIdx(data[0].Diff);
        //API EURO
        const euro = setEuro(data[1].Rate)
        const euroIdx = setEuroIdx(data[1].Diff)
        //API RUB
        const rub = setrub(data[2].Rate)
        const rubIdx = setrubIdx(data[2].Diff)
        

        //CRIPT
        const resCrip = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
        const dataCrip = await resCrip.json();
        //BTC
        setBtc(dataCrip.bitcoin.usd)
        //EFR
        setEfr(dataCrip.ethereum.usd)

        //Akci
        const resAcc = await fetch("https://api.twelvedata.com/time_series?symbol=AAPL&interval=1min&apikey=0997b3dfac6b4d24b5a738a3416d2dc1");
        const dataAcc = await resAcc.json();
        
        const latesApply = dataAcc.values[0].close
        setapp(latesApply)
        
      

//

      } catch {
        console.error("setUsd");
      }
    };
    getUsd();
  }, []);


  console.log(app)



  //Baland-Past ni Satatistikasini olish DOLLAR
  const ColorUsd = usdIdx && usdIdx.toString().includes("-");
  //Euro
  const ColorEuro = euroIdx && euroIdx.toString().includes("-")
  //Rub
  const ColorRub = rubIdx && rubIdx.toString().includes("-")

  return (
    <>
      <div className=" DisplayalutePC w-[90%] px-5 h-[75px] bg-slate-950 rounded-xl mx-auto mt-16 justify-between  items-center">



        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            RUB/USZ
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={ColorRub ? upadok : pluse} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{rub}{!rub && "loading"}<span className={ColorRub ? "text-red-700" : "text-green-500"}>{rubIdx}{!euroIdx && "loading..."}</span></p>
        </div>




        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            EFR/USD
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{efr}{!efr && "loading..."}<span className={null}>{null}</span></p>
        </div>

        <div className="" >
          <h4 className="text-white text-lg flex justify-between items-center ">
            USD/USZ{" "}
            <span className="">
              <img className="w-4 h-3 ml-1 mt-[px]" src={ ColorUsd ? upadok : pluse} alt="" />
            </span>
          </h4>
          <p className="text-white text-[14px]">
            {" "}
            {usd ? `${usd}` : "loading..."}{" "}
            <span
              className={` ${
                ColorUsd ? "text-red-700" : "text-green-500"
              }  text-[12px] `}
            >
              {usdIdx ? `${usdIdx}` : "loading..."}
            </span>
          </p>
        </div> 
        

        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            APPLY/USD
            
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{app}{!app && "loading..."}<span className={null}>{null}</span></p>
        </div>


        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            BTC/USD
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{btc}{!btc && "loading..."}<span className={null}>{null}</span></p>
        </div>

        <div className="">
          <h4 className="text-white text-lg flex justify-between items-center">
          EURO/USZ
              <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={ColorEuro ? upadok : pluse} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{euro}{!euro && "loading..."}
            <span className={`${ColorEuro ? "text-red-700" : "text-green-500"}`}>{euroIdx}{!euroIdx && "loading..."}</span></p>
        </div>

        
      </div>









    <div className="DisplayValutePhone overflow-hidden w-[80%] mx-auto sm:mt-5 mt-2 rounded-xl ">
              <div className=" flex bg-black">
                <div className=" slider-track flex gap-10 justify-between items-center ">



                <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            RUB/USZ
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={ColorRub ? upadok : pluse} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{rub}{!rub && "loading"}<span className={ColorRub ? "text-red-700" : "text-green-500"}>{rubIdx}{!euroIdx && "loading..."}</span></p>
        </div>




        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            EFR/USD
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{efr}{!efr && "loading..."}<span className={null}>{null}</span></p>
        </div>

        <div className="" >
          <h4 className="text-white text-lg flex justify-between items-center ">
            USD/USZ{" "}
            <span className="">
              <img className="w-4 h-3 ml-1 mt-[5px]" src={ ColorUsd ? upadok : pluse} alt="" />
            </span>
          </h4>
          <p className="text-white text-[14px] flex justify-center items-center">
            {" "}
            {usd ? `${usd}` : "loading..."}{" "}
            <span
              className={` ${
                ColorUsd ? "text-red-700" : "text-green-500"
              }  text-[12px] `}
            >
              {usdIdx ? `${usdIdx}` : "loading..."}
            </span>
          </p>
        </div> 
        

        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            APPLY/USD
            
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{app}{!app && "loading..."}<span className={null}>{null}</span></p>
        </div>


        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            BTC/USD
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{btc}{!btc && "loading..."}<span className={null}>{null}</span></p>
        </div>

        <div className="">
          <h4 className="text-white text-lg flex justify-between items-center">
          EURO/USZ
              <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={ColorEuro ? upadok : pluse} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{euro}{!euro && "loading..."}
            <span className={`${ColorEuro ? "text-red-700" : "text-green-500"}`}>{euroIdx}{!euroIdx && "loading..."}</span></p>
        </div>


      {/* POVTOR */}


      
      <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            RUB/USZ
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={ColorRub ? upadok : pluse} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{rub}{!rub && "loading"}<span className={ColorRub ? "text-red-700" : "text-green-500"}>{rubIdx}{!euroIdx && "loading..."}</span></p>
        </div>




        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            EFR/USD
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{efr}{!efr && "loading..."}<span className={null}>{null}</span></p>
        </div>

        <div className="" >
          <h4 className="text-white text-lg flex justify-between items-center ">
            USD/USZ{" "}
            <span className="">
              <img className="w-4 h-3 ml-1 mt-[px]" src={ ColorUsd ? upadok : pluse} alt="" />
            </span>
          </h4>
          <p className="text-white text-[14px]">
            {" "}
            {usd ? `${usd}` : "loading..."}{" "}
            <span
              className={` ${
                ColorUsd ? "text-red-700" : "text-green-500"
              }  text-[12px] `}
            >
              {usdIdx ? `${usdIdx}` : "loading..."}
            </span>
          </p>
        </div> 
        

        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            APPLY/USD
            
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{app}{!app && "loading..."}<span className={null}>{null}</span></p>
        </div>


        <div>
          <h4 className="text-white text-lg flex justify-between items-center">
            BTC/USD
            <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={null} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{btc}{!btc && "loading..."}<span className={null}>{null}</span></p>
        </div>

        <div className="">
          <h4 className="text-white text-lg flex justify-between items-center">
          EURO/USZ
              <span className="w-[18px] h-3 ml-1 mt-[px]"><img src={ColorEuro ? upadok : pluse} alt="" /></span>
          </h4>
          <p className="text-white text-[14px]">{euro}{!euro && "loading..."}
            <span className={`${ColorEuro ? "text-red-700" : "text-green-500"}`}>{euroIdx}{!euroIdx && "loading..."}</span></p>
        </div>






        </div>
        </div>
    </div>






    </>
  );
}
