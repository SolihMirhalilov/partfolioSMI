import { useEffect, useState } from "react"
import { useGetHotNewsQuery, useGetLestesNewsQuery } from "../../servises/newsApi"
import { useNavigate } from "react-router-dom";
import nonePhoto from "./imgBook&Finance/nonePhoto.png"

export default function NewsSectionTop(){
  const [sliderNews , setSliderNews] = useState("")
  const {data , isError , isLoading } = useGetHotNewsQuery()
  const navigate = useNavigate()
  
  console.log(data)
  useEffect(() => {
    if(data?.articles?.length > 0){
      setSliderNews({
        slider1:{
          title:data?.articles[13]?.title,
          content:data?.articles[13]?.content,
          img:data?.articles[13].urlToImage
        },
        slider2:{
          title:data?.articles[14]?.title,
          content:data?.articles[14]?.content,
          img:data?.articles[14]?.urlToImage
        },
        slider3:{
          title:data?.articles[15]?.title,
          content:data?.articles[15]?.content,
          img:data?.articles[15]?.urlToImage
        },
        slider4:{
          title:data?.articles[16]?.title,
          content:data?.articles[16]?.content,
          img:data?.articles[16]?.urlToImage
        }
      })
    }
  }, [data])
    return(
        <>




      <section>
      <div className="slider-news sm:w-[100%] w-[95%] max-w-[1000px] mx-auto p-2">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="w-full border border-gray-950 border-solid ">
                <div className="box-slider flex justify-center items-center py-4 gap-7">
                  <div className="w-5/12 cursor-pointer" onClick={() => {
                    if(sliderNews?.slider1){
                      navigate("/news/13 " , {
                        state:{
                          name:sliderNews?.slider1?.title,
                          content:sliderNews?.slider1.content,
                          img:sliderNews?.slider1?.img
                        }
                      })
                    }
                  } }>
                    
                      <img
                        className="bg-black w-full sm:h-60 h-36"
                        src={sliderNews?.slider1?.img || nonePhoto}
                        alt=""
                      />
                      <h4 className="mt-3 text-lg line-clamp-1" >{sliderNews?.slider1?.title}</h4>
                      <p className="text-sm line-clamp-2">
                        {sliderNews?.slider1?.content}
                      </p>
                    
                  </div>
                  <div className="w-5/12" onClick={() => {
                    if(sliderNews?.slider2){
                      navigate("/news/13 " , {
                        state:{
                          name:sliderNews?.slider2?.title,
                          content:sliderNews?.slider2.content,
                          img:sliderNews?.slider2?.img
                        }
                      })
                    }
                  } }>
               
                      <img
                        className="bg-black w-full sm:h-60 h-36"
                        src={sliderNews?.slider2?.img || nonePhoto}
                        alt=""
                      />
                      <h4 className="mt-3 text-lg line-clamp-1">{sliderNews?.slider2?.title}</h4>
                      <p className="text-sm line-clamp-2">
                        {sliderNews?.slider2?.content}
                      </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="w-full border border-gray-950 border-solid ">
                <div className="box-slider flex justify-center items-center py-4 gap-7">
                  <div className="w-5/12" onClick={() => {
                    if(sliderNews?.slider2){
                      navigate("/news/15 " , {
                        state:{
                          name:sliderNews?.slider3?.title,
                          content:sliderNews?.slider3.content,
                          img:sliderNews?.slider3?.img
                        }
                      })
                    }
                  } }>
                
                      <img
                        className="bg-black w-full sm:h-60 h-36"
                        src={sliderNews?.slider3?.img}
                        alt=""
                      />
                      <h4 className="mt-3 text-lg line-clamp-1">{sliderNews?.slider3?.title}</h4>
                      <p className="text-sm line-clamp-2">
                      {sliderNews?.slider3?.content}
                      </p>
                
                  </div>
                  <div className="w-5/12" onClick={() => {
                    if(sliderNews?.slider2){
                      navigate("/news/16 " , {
                        state:{
                          name:sliderNews?.slider4?.title,
                          content:sliderNews?.slider4.content,
                          img:sliderNews?.slider4?.img
                        }
                      })
                    }
                  } }>
                 
                      <img
                        className="bg-black w-full sm:h-60 h-36"
                        src={sliderNews?.slider4?.img || nonePhoto}
                        alt=""
                      />
                      <h4 className="mt-3 text-lg line-clamp-1">{sliderNews?.slider4?.title}</h4>
                      <p className="text-sm line-clamp-2">
                        {sliderNews?.slider4?.content}
                      </p>
                 
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-full border border-gray-950 border-solid ">
                <div className="box-slider flex justify-center items-center py-4 gap-7">
                  <div className="w-5/12">
                    <a href="#">
                      <img
                        className="bg-black object-fill w-full sm:h-60 h-36"
                        src={null}
                        alt=""
                      />
                      <h4 className="mt-3">Lorem, ipsum dolor.</h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </a>
                  </div>
                  <div className="w-5/12">
                    <a href="#">
                      <img
                        className="bg-black object-cover w-full sm:h-60 h-36"
                        src={null}
                        alt=""
                      />
                      <h4 className="mt-3">Lorem, ipsum dolor.</h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="w-full border border-gray-950 border-solid ">

              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1140px] w-[100%] mx-auto my-16 px-2 border-[0.5px] p-3 border-black">
        <h1 className="mx-auto text-xl m-4 ">Bussinis:</h1>
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


      </section>
        </>
    )
}