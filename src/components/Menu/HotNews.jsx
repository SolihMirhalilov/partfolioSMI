import nonePhoto from "../Menu/imgBook&Finance/nonePhoto.png";
import { useEffect, useState } from "react";
import {
  useGetHotNewsQuery,
  useGetLestesNewsQuery,
} from "../../servises/newsApi";
import { useNavigate } from "react-router-dom";

export default function HotNews() {
  const navigate = useNavigate();
  //тут apiNews
  const [HotNews, setHotNews] = useState("");
  const [newPost, setNewPost] = useState("");
  const { data, isLoading, isError } = useGetHotNewsQuery();
  const [newsMap, setNewsMap] = useState("");
  const [sliderNews , setSliderNews] = useState("")
  console.log(data);
  useEffect(() => {
    if (data?.articles?.length > 0) {
      setHotNews({
        name: data.articles[0].title,
        description: data.articles[0].content,
        img: data.articles[0].urlToImage,
      });

      if (data?.articles?.length > 0) {
        setNewPost({
          news: {
            name: data.articles[1].title,
            description: data.articles[1].description,
            content: data.articles[1].content,
            img: data.articles[1].urlToImage,
          },
          news1: {
            name: data.articles[2].title,
            description: data.articles[2].description,
            content: data.articles[2].content,
            img: data.articles[2].urlToImage,
          },
          news2: {
            name: data.articles[3].title,
            description: data.articles[3].description,
            content: data.articles[3].content,
            img: data.articles[3].urlToImage,
          },
          news3: {
            name: data.articles[4].title,
            description: data.articles[4].description,
            content: data.articles[4].content,
            img: data.articles[4].urlToImage,
          },
        });

        if (data?.articles?.length > 0) {
          setNewsMap({
            news: {
              name: data.articles[5].title,
              description: data.articles[5].description,
              content: data.articles[5].content,
              img: data.articles[5].urlToImage,
            },
            news1: {
              name: data.articles[6].title,
              description: data.articles[6].description,
              content: data.articles[6].content,
              img: data.articles[6].urlToImage,
            },
            news2: {
              name: data.articles[7].title,
              description: data.articles[7].description,
              content: data.articles[7].content,
              img: data.articles[7].urlToImage,
            },
            news3: {
              name: data.articles[8].title,
              description: data.articles[8].description,
              content: data.articles[8].content,
              img: data.articles[8].urlToImage,
            },
          });

            if(sliderNews?.articles?.length > 0){
              setSliderNews({
            news: {
            name: data.articles[9].title,
            description: data.articles[9].description,
            content: data.articles[9].content,
            img: data.articles[9].urlToImage,
          },
          news1: {
            name: data.articles[10].title,
            description: data.articles[10].description,
            content: data.articles[10].content,
            img: data.articles[10].urlToImage,
          },
          news2: {
            name: data.articles[11].title,
            description: data.articles[11].description,
            content: data.articles[11].content,
            img: data.articles[11].urlToImage,
          },
          news3: {
            name: data.articles[12].title,
            description: data.articles[12].description,
            content: data.articles[12].content,
            img: data.articles[12].urlToImage,
          },
              })
            }
          
        }
      }
    }
  }, [data]);

  console.log(newPost.news2?.name);
  console.log(data);



  return (
    <>
      <header className="">
        <div className="md:flex items-center justify-between   pt-10 max-w-[1140px] m-auto h-full w-full mb-10">
          <div
            className="md:w-[60%] w-full md:p-0 p-3  m-auto md:m-0 h-[80%] cursor-pointer"
            onClick={() => {
              HotNews &&
                navigate("/news/1", {
                  state: {
                    name: HotNews?.name,
                    description: HotNews?.description,
                    img: HotNews?.img,
                  },
                });
            }}
          >
            <div className="w-full h-80 ">
              {HotNews ? (
                <img
                  className="w-[80%]"
                  src={HotNews?.img || nonePhoto}
                  alt={null}
                />
              ) : (
                <img className="" src={nonePhoto} alt={null} />
              )}
            </div>

            <h2 className="mt-8 line-clamp-1 text-xl">
              {HotNews.name || "loading..."}
            </h2>
            <p className="mt-1 line-clamp-2 pb-10">
              {HotNews.description || "loading..."}
            </p>
          </div>
          <div className=" bg-black md:w-72 w-full md:p-0 p-3 pt-20 m-auto rounded-md  h-full ">
            <div
              className="my-3 cursor-pointer"
              onClick={() => {
                newPost &&
                  navigate("/news/2", {
                    state: {
                      name: newPost?.news?.name,
                      description: newPost?.news?.description,
                      content: newPost?.news?.content,
                      img: newPost?.news?.img,
                    },
                  });
              }}
            >
              <h3 className="line-clamp-1 text-white text-xl font-semibold">
                {newPost?.news?.name || "Loading..."}
                <span className="text-red-700 float-end text-sm"></span>
              </h3>
              <p className="line-clamp-2 text-md text-white mb-3">
                {newPost?.news?.description || "Loading..."}
              </p>

              <div className="w-full m-auto bg-white h-[3px] rounded-xl ">
                {" "}
              </div>
            </div>

            <div
              className="my-3 cursor-pointer"
              onClick={() => {
                newPost &&
                  navigate("/news/3", {
                    state: {
                      name: newPost?.news1?.name,
                      discription: newPost?.news1?.description,
                      content: newPost?.news1?.content,
                      img: newPost?.news1?.img,
                    },
                  });
              }}
            >
              <h3 className="line-clamp-1 text-white text-xl font-semibold">
                {newPost?.news1?.name || "Loading..."}
                <span className="text-red-700 float-end text-sm"></span>
              </h3>
              <p className="line-clamp-2 text-md text-white mb-3">
                {newPost?.news1?.name || "Loading..."}
              </p>

              <div className="w-full m-auto bg-white h-[3px] rounded-xl ">
                {" "}
              </div>
            </div>

            <div
              className="my-3 cursor-pointer"
              onClick={() => {
                newPost &&
                  navigate("/news/4", {
                    state: {
                      name: newPost?.news2?.name,
                      discription: newPost?.news2?.description,
                      content: newPost?.news2?.content,
                      img: newPost?.news2?.img,
                    },
                  });
              }}
            >
              <h3 className="line-clamp-1 text-white text-xl font-semibold">
                {newPost?.news2?.name || "loading"}
                <span className="text-red-700 float-end text-sm"></span>
              </h3>
              <p className="line-clamp-2 text-md text-white mb-3">
                {newPost?.news2?.name || "Loading..."}
              </p>

              <div className="w-full m-auto bg-white h-[3px] rounded-xl ">
                {" "}
              </div>
            </div>

            <div
              className="my-3 cursor-pointer"
              onClick={() => {
                newPost &&
                  navigate("/news/5", {
                    state: {
                      name: newPost?.news3?.name,
                      description: newPost?.news3?.description,
                      content: newPost?.news3?.content,
                      img: newPost?.news3?.img,
                    },
                  });
              }}
            >
              <h3 className="line-clamp-1 text-white text-xl font-semibold">
                {newPost?.news3?.name || "Loading..."}
                <span className="text-red-700 float-end text-sm"></span>
              </h3>
              <p className="line-clamp-2 text-md text-white mb-3">
                {newPost?.news3?.name || "Loading..."}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className=" lg:ml- ml-1 mt-32 mb-20 sm:ml-  ">
        <div className="w-full max-w-[1140px] m-auto">
          <div className="md:grid-cols-4 p: grid-cols-2 grid gap-4 m-0  ">

            <div className="cursor-pointer"
            onClick={() => {
              newsMap && 
              navigate("/news/6", {
                state:{
                  name:newsMap?.news?.name,
                  description:newsMap?.news?.description,
                  content:newsMap?.news?.content,
                  img:newsMap?.news?.img,
                }
              })
            }}
            
            >
              {newsMap?.news?.img ? (
                <img src={newsMap?.news?.img}
                className="w-96 h-36 object-cover"
                alt="" />
              ) : (
                <img src={nonePhoto} alt="" />
              )}

              <h4 className="line-clamp-1 text-lg">{newsMap?.news?.name}</h4>
              <p className="line-clamp-2">{newsMap?.news?.description}</p>
            </div>

            <div className="cursor-pointer"
            onClick={() => {
              newsMap && 
              navigate("/news/6", {
                state:{
                  name:newsMap?.news1?.name,
                  description:newsMap?.news1?.description,
                  content:newsMap?.news1?.content,
                  img:newsMap?.news1?.img,
                }
              })
            }}
            
            >
              {newsMap?.news?.img ? (
                <img
                className="w-96 h-36 object-cover" src={newsMap?.news1?.img} alt="" />
              ) : (
                <img src={nonePhoto} alt="" />
              )}

              <h4 className="line-clamp-1 text-lg">{newsMap?.news1?.name}</h4>
              <p className="line-clamp-2">{newsMap?.news1?.description}</p>
            </div>


            <div className="cursor-pointer"
            onClick={() => {
              newsMap && 
              navigate("/news/6", {
                state:{
                  name:newsMap?.news2?.name,
                  description:newsMap?.news2?.description,
                  content:newsMap?.news2?.content,
                  img:newsMap?.news2?.img,
                }
              })
            }}
            
            >
              {newsMap?.news?.img ? (
                <img src={newsMap?.news2?.img}
                className="w-96 h-36 object-cover"
                alt="" />
              ) : (
                <img src={nonePhoto} alt="" />
              )}

              <h4 className="line-clamp-1 text-lg">{newsMap?.news2?.name}</h4>
              <p className="line-clamp-2">{newsMap?.news2?.description}</p>
            </div>

            <div className="cursor-pointer"
            onClick={() => {
              newsMap && 
              navigate("/news/7", {
                state:{
                  name:newsMap?.news3?.name,
                  description:newsMap?.news3?.description,
                  content:newsMap?.news3?.content,
                  img:newsMap?.news3?.img,
                }
              })
            }}
            
            >
              {newsMap?.news?.img ? (
                <img
                className="w-96 h-36 object-cover" src={newsMap?.news3?.img} alt="" />
              ) : (
                <img src={nonePhoto} alt="" />
              )}

              <h4 className="line-clamp-1 text-lg">{newsMap?.news3?.name}</h4>
              <p className="line-clamp-2">{newsMap?.news3?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
