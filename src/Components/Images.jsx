import React from "react";

function Images() {
  return (
    <div className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden">
      <div className="w-[40%] sm:w-[20%] sm:h-[80%] h-1/2 relative">
        <div className="absolute w-20 h-[7rem] sm:w-40 sm:h-[13rem] -right-1/3 top-6">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute w-[8rem] sm:w-[13.5rem] aspect-video -left-1/2 sm:-left-2/3 top-1/3 overflow-hidden ">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div className="absolute w-[6rem] sm:w-[12rem] aspect-video -left-[50%] -bottom-10">
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div className="absolute w-[7rem] sm:w-[12rem] h-[8rem] -right-[60%] sm:-right-[50%] -bottom-[37%] sm:-bottom-[12%]">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
}

export default Images;
