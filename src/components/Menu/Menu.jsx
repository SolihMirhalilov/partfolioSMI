import "./Menu.css";
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
import NewsTop from "./Newstop.jsx"





import HotNews from "./HotNews.jsx";
export default function Menu() {





  return (
    <>

    <HotNews />

    <NewsTop />

    



      <div className="LogoPartfolio h-72 bg-gradient-to-t pl-8 from-gray-800 to-slate-400 ">
        <h1 className="text-7xl sm:text-8xl font-imbue pt-20">The Journal</h1>
        <p className="text-3xl">Partfolio News</p>
      </div>

      <div className="sport max-w-[1140px] w-[100%] mx-auto my-16 px-2 ">
        <h1 className="mx-auto text-xl m-4 ">Sports News:</h1>

        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="bg-slate-300 w-full h-[650px]">
                <a href="#">
                  <img
                    className="bg-slate-600 w-full h-[500px]"
                    src={null}
                    alt=""
                  />
                  <h1 className="sm:text-4xl text-xl mt-4 ml-4">
                    Lorem ipsum dolor sit.
                  </h1>
                  <p className="sm:text-lg text-sm mt-2 ml-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, sint veritatis fugiat facere accusantium eaque.
                  </p>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="bg-slate-300 w-full h-[650px]">
                <a href="#">
                  <img
                    className="bg-slate-600 w-full h-[500px]"
                    src={null}
                    alt=""
                  />
                  <h1 className="sm:text-4xl text-xl mt-4 ml-4">
                    Lorem ipsum dolor sit.
                  </h1>
                  <p className="sm:text-lg text-sm mt-2 ml-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, sint veritatis fugiat facere accusantium eaque.
                  </p>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <div className="bg-slate-300 w-full h-[650px]">
                <a href="#">
                  <img
                    className="bg-slate-600 w-full h-[500px]"
                    src={null}
                    alt=""
                  />
                  <h1 className="sm:text-4xl text-xl mt-4 ml-4">
                    Lorem ipsum dolor sit.
                  </h1>
                  <p className="sm:text-lg text-sm mt-2 ml-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Commodi, sint veritatis fugiat facere accusantium eaque.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="flex  justify-between w-[100%] max-w-[1140px] mx-auto">
        <div className="w-5/12 md:h-96 h-44 bg-black"></div>
        <div className="w-5/12 md:h-96 h-44 bg-black"></div>
      </div>

      <div className="w-[100%] max-w-[1140px] mx-auto my-16">
        <hr className="m-1" />
        <hr className="m-1" />
      </div>

      <div className="  startapps max-w-[1140px] w-[100%] mx-auto my-16 px-2  p-3 border-black">
        <h1 className="mx-auto text-xl m-4 ">StartApps:</h1>
        <div className="Bussinis grid md:grid-cols-4 grid-cols-2  lg:gap-10 gap-4 ">
          <div className=" w-full h-52">
            <a href="">
              <img className="w-full h-40 bg-black" src={null} alt="" />
              <h1>Lorem, ipsum dolor.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div>

          <div className=" w-full h-52">
            <a href="">
              <img className="w-full h-40 bg-black" src={null} alt="" />
              <h1>Lorem, ipsum dolor.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div>

          <div className=" w-full h-52">
            <a href="">
              <img className="w-full h-40 bg-black" src={null} alt="" />
              <h1>Lorem, ipsum dolor.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div>

          <div className=" w-full h-52">
            <a href="">
              <img className="w-full h-40 bg-black" src={null} alt="" />
              <h1>Lorem, ipsum dolor.</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </a>
          </div>
        </div>
      </div>

      <div className="finance mx-auto w-[100%] max-w-[1140px] mt-5">
        <h1 className="">Finance</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 sm:gap-10 gap-y-6 grid-rows-3 mt-12">
          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex border-2 border-solid rounded-3xl ">
            <div className="">
              <img
                className="rounded-[98px] sm:w-20 w-16 sm:h-20 h-16 m-2 sm:mt-0 mt-3 pb-1"
                src={bitcoin}
                alt=""
              />
            </div>
            <div className="mt-2">
              <h1 className="mt-3 text-lg">USD/BTC</h1>
              <img src={null} alt="" />
              <div>
                <p>
                  {"89.000"} <span className="text-sm">{"-12.32"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="my-10">Staistika&Politica:</h1>

          <div className="">
            <img src={GDPchineusa} alt="" />
            <p className="float-end">Источник:Wikipedia</p>
          </div>

          <div className="">
            <div className="">
              <div>
                <a className="hover:border-b-1 hover:border" href="">
                  <h2>Lorem ipsum dolor sit.</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae pariatur reprehenderit architecto.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>

      <div className="bookNews w-[100%] max-w-[1140px] mx-auto mt-16 overflow-hidden ">
        <h1 className="">Top 5 books 2025:</h1>
        <div className=" booksTop my-5 grid grid-cols-1  lg:grid-cols-5 md:grid-cols-4 gap-3">
          <div className="">
            <img className="w-48 h-64 rounded-md" src={book1} alt="" />
            <h2 className="my-4">Лев Толстой — «Война и мир»</h2>
          </div>

          <div className="">
            <img className="w-48 h-64 rounded-md" src={book1984} alt="" />
            <h2 className="my-4">Джордж Оруэлл — «1984»</h2>
          </div>

          <div className="">
            <img className="w-48 h-64 rounded-sm" src={book2} alt="" />
            <h2 className="my-4">Джеймс Джойс — «Улисс»</h2>
          </div>

          <div className="">
            <img className="w-48 h-64 rounded-md" src={book3} alt="" />
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

      <div className="TExnologiy w-[100%] max-w-[1140px] mx-auto mt-16">
        <h1 className="text-xl "> Tехнологии 2025:</h1>

        <div className=" Texnologiy grid grid-cols-2  mt-16">
          <div>
            <img
              className=" ml-2 img-tex object-contain w-96 "
              src={tex1}
              alt=""
            />
          </div>
          <div>
            
              <h1 className="text-tex pb-5">
                Искусственный интеллект (ИИ) в 2025 году
              </h1><p className=" text-tex ">
              1. Умные помощники стали еще умнее ИИ-ассистенты, как ChatGPT,
              Siri, Google Assistant и др., теперь способны: Вести диалог почти
              как человек Выполнять сложные команды: бронировать билеты,
              анализировать документы, кодить Обучаться от пользователя и
              адаптироваться под стиль общения 2. ИИ в медицине Диагностика
              болезней стала быстрее и точнее ИИ помогает врачам анализировать
              МРТ, УЗИ, рентген Ведутся разработки ИИ, который может предсказать
              болезни до их появления (например, на основе ДНК и поведения) 3.
              Генерация контента ИИ умеет: Писать статьи, книги, стихи Создавать
              изображения, музыку, видео Делать реалистичную анимацию по
              текстовому описанию
            </p>

            <div className="flex ml-5 lg:ml-0 md:ml-16">
              <a
                className="bg-gray-400 mt-4 hover:bg-gray-500 text-white border-[1px] rounded-2xl px-4 py-1 border-gray-600 mr-5"
                href="https://en.wikipedia.org/wiki/Artificial_intelligence"
              >
                AI
              </a>
              <a
                className="bg-gray-400 mt-4 hover:bg-gray-500 text-white border-[1px] rounded-2xl px-4 py-1 border-gray-600 mr-5"
                href="https://openai.com/"
              >
                ChatGPT
              </a>

            </div>
          </div>
        </div>

        <div className=" Texnologiy grid grid-cols-2  mt-16">
          <div>
            
              <h1 className="text-tex md:text-right pb-5">
                биотехнологии и генная инженерия к 2025
              </h1><p className=" sm:pr-20 text-tex md:text-right ">
              Что нового в 2025 году? ✅ 1. Редактирование генов стало точнее
              Технологии типа CRISPR улучшились: теперь можно редактировать
              отдельные гены без побочных эффектов. Врачи могут исправлять
              наследственные болезни 
              уже на стадии эмбриона или у взрослых. 🌱 2. Генная еда (ГМО) — не
              только кукуруза Разработаны генно-модифицированные растения,
              которые: Устойчивы к засухе Например, в Африке начали выращивать
              рис с добавленным витамином A.
              🧪 3. Лечение рака с помощью генной терапии Идёт активное
              применение CAR-T терапии: гены клеток человека перепрограммируются
            </p>

            <div className="flex ml-5 float-end sm:mr-28 ">
              <a
                className="bg-gray-400 mt-4 hover:bg-gray-500 text-white border-[1px] rounded-2xl px-4 py-1 border-gray-600 mr-5"
                href="https://ru.wikipedia.org/wiki/CRISPR"
              >
                CRISPR info
              </a>
              <a
                className="bg-gray-400 mt-4 hover:bg-gray-500 text-white border-[1px] rounded-2xl px-4 py-1 border-gray-600 mr-5"
                href="https://crisprtx.com/"
              >
                CRISPR
              </a>
            </div>
          </div>

          <div>
            <img
              className=" ml-2 img-tex object-contain w-96 "
              src={tex2}
              alt=""
            />
          </div>
        </div>

        <div className=" Texnologiy grid grid-cols-2  mt-16">
          <div>
            <img
              className=" ml-2 img-tex object-contain w-96 "
              src={tex1}
              alt=""
            />
          </div>
          <div>
            
              <h1 className="text-tex pb-5">Квантовые вычисления 2025</h1>
              <p className=" text-tex ">1. Переход от физических к логическим кубитам В 2025 году
              коммерческое развитие квантовых вычислений ускоряется благодаря
              переходу от физических к логическим кубитам, что обеспечивает
              большую надежность и возможности для промышленного применения. ​
              SEIDOR | Technology Consulting | SEIDOR 2. Прорыв в квантовой
              криптографии С развитием квантовых вычислений возникает угроза
              существующим методам шифрования. В ответ на это активно
              развиваются новые методы защиты данных, такие как постквантовая
              криптография. ​ Коммерсантъ +1 РЖД +1 3. Интеграция с
              искусственным интеллектом Квантовые вычисления способствуют
              ускорению обучения моделей машинного обучения, что приводит к
              прорывам в области обработки естественного языка, распознавания
              изображений и автономных систем. ​ DEV Community
            </p>

            <div className="flex ml-5 lg:ml-0 md:ml-16">
              <a
                className="bg-gray-400 mt-4 hover:bg-gray-500 text-white border-[1px] rounded-2xl px-4 py-1 border-gray-600 mr-5"
                href="https://habr.com/ru/articles/785424/"
              >
                Квантовые вычисления
              </a>
              <a
                className="bg-gray-400 mt-4 hover:bg-gray-500 text-white border-[1px] rounded-2xl px-4 py-1 border-gray-600 mr-5"
                href="https://3dnews.ru/1096936/ibm-predstavila-133kubitniy-kvantoviy-protsessor-heron-i-perviy-modulniy-kvantoviy-kompyuter"
              >
                IBM
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
