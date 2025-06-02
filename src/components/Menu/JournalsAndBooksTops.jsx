import book1 from "./imgBook&Finance/book1.jpg";
import book1984 from "./imgBook&Finance/book1984.jpg";
import book2 from "./imgBook&Finance/book2.jpg";
import book3 from "./imgBook&Finance/book3.jpg";
import book4 from "./imgBook&Finance/book4.jpg";
import bitcoin from "./imgBook&Finance/bitcoin.png";
import GDPchineusa from "./imgBook&Finance/GDPchine.svg";
import news1 from "./imgBook&Finance/TheEcon.png";
import news2 from "./imgBook&Finance/Time.jpg";
import news3 from "./imgBook&Finance/TAtlantic.png";
import news4 from "./imgBook&Finance/Spect.png";
import news5 from "./imgBook&Finance/News.png";
import tex1 from "./imgBook&Finance/tex1.jpg";
import tex2 from "./imgBook&Finance/tex2.jpg";
import tex3 from "./imgBook&Finance/tex3.jpg";
import tex4 from "./imgBook&Finance/tex4.jpg";

export default function JournalAndBooks(){
    return(
        <>

                  <div className="bookNews w-[100%] max-w-[1140px] mx-auto mt-16 overflow-hidden ">
                    <h1 className="">Top 5 books 2025:</h1>
                    <div className=" booksTop my-5 grid grid-cols-1  lg:grid-cols-5 md:grid-cols-4 gap-3">
                      <div className="">
                    {book1 && <img className="w-48 h-64 rounded-md" src={book1} alt="" />}
                        <h2 className="my-4">Лев Толстой — «Война и мир»</h2>
                      </div>
            
                      <div className="">
                    {book1984 && <img className="w-48 h-64 rounded-md" src={book1984} alt="" />}
                        <h2 className="my-4">Джордж Оруэлл — «1984»</h2>
                      </div>
            
                      <div className="">
                        { book2 &&<img className="w-48 h-64 rounded-sm" src={book2} alt="" />}
                        <h2 className="my-4">Джеймс Джойс — «Улисс»</h2>
                      </div>
            
                      <div className="">
                      { book3 && <img className="w-48 h-64 rounded-md" src={book3} alt="" />}
                        <h2 className="my-4">Владимир Набоков — «Лолита»</h2>
                      </div>
            
                      <div className="">
                        <img className="w-48 h-64 rounded-sm" src={book4} alt="" />
                        <h2 className="my-4">Уильям Фолкнер — «Шум и ярость»</h2>
                      </div>
                    </div>
                  </div>
            
                  <div className="TopNews w-[100%] max-w-[1140px] mx-auto mt-16 ">
                    <h1 className="">Top 5 Journals 2025:</h1>
                    <div className=" booksTop my-5 grid grid-cols-1  lg:grid-cols-5 md:grid-cols-4 gap-3">
                      <div className="">
                        <img
                          className="w-48 object-contain h-64 rounded-md"
                          src={news1}
                          alt=""
                        />
                        <h2 className="my-4">The Economist</h2>
                      </div>
            
                      <div className="">
                        <img
                          className="w-48 object-contain h-64 rounded-md"
                          src={news2}
                          alt=""
                        />
                        <h2 className="my-4">Time</h2>
                      </div>
            
                      <div className="">
                        <img
                          className="w-48 object-contain h-64 rounded-sm"
                          src={news3}
                          alt=""
                        />
                        <h2 className="my-4">The Atlantic</h2>
                      </div>
            
                      <div className="">
                        <img
                          className="w-48 object-contain h-64 rounded-md"
                          src={news4}
                          alt=""
                        />
                        <h2 className="my-4 ">The Spectator</h2>
                      </div>
            
                      <div className="">
                        <img
                          className="w-48 object-contain h-64 rounded-sm"
                          src={news5}
                          alt=""
                        />
                        <h2 className="my-4 ">Newsweek</h2>
                      </div>
                    </div>
                  </div>

        </>
    )
}