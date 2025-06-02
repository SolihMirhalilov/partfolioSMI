export default function SportNews(){
    return(
        <>
                  <div className="LogoPartfolio h-72 bg-gradient-to-t pl-8 from-gray-800 to-slate-400 ">
                    <h1 className="text-7xl sm:text-8xl font-imbue pt-20">The Journal</h1>
                    <p className="text-3xl">Partfolio News</p>
                  </div>
            
                  <div className="sport max-w-[1140px] w-[100%] mx-auto my-16 px-2 ">
                    <h1 className="mx-auto text-xl m-4 ">Sports News:</h1>
            
                    <div
                      id="carouselExampleFade"
                      class="carousel slide carousel-fade"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div className="bg-slate-300 w-full h-[650px]">
                            <a href="#">
                              <img
                                className="bg-slate-600 w-full h-[500px]"
                                src=""
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
                        <div class="carousel-item">
                          <div className="bg-slate-300 w-full h-[650px]">
                            <a href="#">
                              <img
                                className="bg-slate-600 w-full h-[500px]"
                                src=""
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
                        <div class="carousel-item">
                          <div className="bg-slate-300 w-full h-[650px]">
                            <a href="#">
                              <img
                                className="bg-slate-600 w-full h-[500px]"
                                src=""
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
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev"
                      >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next"
                      >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>

                  
      <div className="flex  justify-between w-[100%] max-w-[1140px] mx-auto">
        <div className="w-5/12 md:h-96 h-44 bg-black"></div>
        <div className="w-5/12 md:h-96 h-44 bg-black"></div>
      </div>
        </>
    )
}