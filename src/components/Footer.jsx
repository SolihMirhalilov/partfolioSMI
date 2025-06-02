

export default function Footer(){
    return(
        <footer className=" bg-slate-700">
            <div className="grid grid-cols-2 pb-20  md:grid-cols-4 max-w-[1140px] mx-auto mt-5 ">
                <div className="mt-28">
                    <h1 className="font-imbue text-white text-6xl">The Journal</h1>
                </div>

                <div className="">
                    <p className="text-white text-2xl  mt-12"> Страницы</p>
                    <ul className="mt-3">
                        <li className="text-white py-1"><a href="#">Новости мира</a></li>
                        <li className="text-white py-1"><a href="#">Экономика</a></li>
                        <li className="text-white py-1"><a href="#">Крипта валюты</a></li>
                        <li className="text-white py-1"><a href="#">Политика</a></li>
                        <li className="text-white py-1"><a href="#">Бизнес</a></li>
                        <li className="text-white py-1"><a href="#">Стартаппы</a></li>
                    </ul>
                </div>
                
                <div className="">
                    
                    <p className="text-white text-2xl  mt-12">Контакты</p>
                    <ul className="mt-3 text-white">
                        <li>Gmail: solihmirhalilov2@gmail.com</li>
                        <li>Phone: +998991779633</li>
                        <li>Adres:Uzbekistan.Tashkent</li>
                        <li>
                            <a href="https://t.me/MS_Frontend_dev"><img src=" https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="" className="w-6 h-6 inline-block ml-2" />
                                <span>SolihMirhalilov</span>
                                </a>
                        </li>
                    </ul>
                </div>
                <div className=" text-white text-xl mt-14">
                    <h1>NEWS PARTFOLIO END</h1>
                </div>
            </div>
        </footer>
    )
}