import React from "react";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Resume from "../../assets/Resume.pdf"
import { BsArrowUpRightCircleFill } from "react-icons/bs";


const Hero = () => {
  const handleEmailButtonClick = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // If it's a mobile device, open the default mail client
      window.location.href = "mailto:durgeshmalviya65@gmail.com";
    } else {
      // If it's not a mobile device, open Gmail in the default browsere
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=contact@durgeshmalviya65@gmail.com",
        "_blank"
      );
    }
  };

  return (
    <div id="home" className={` `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold sm:text-[2rem] font-[]"
            >
              Hey, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-gray-500 bg-clip-text text-transparent font-bold font-mono ">
                Durgesh <br />Malviya
              </span>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={["Web Developer", 2000, "Java Spring-Boot Developer", 2000, "App Developer", 2000, "Freelancer", 2000]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >

            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href="https://www.linkedin.com/in/durgesh-malviya/"
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={Resume}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1 relative">
                Resume <FiDownload />
                <span class="absolute top-[-11px] right-[-31px] flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span> 
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex gap-5"
            >
              <li>
                <a href="#">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/durgesh-malviya/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  {" "}
                  <BsArrowUpRightCircleFill className=" h-[1.7rem] w-[1.7rem] text-[1rem] hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[80%] w-fit flex items-center sm:items-end">
            <div className="h-[80%] md:h-[95%] inset-x-0 bottom-0  shadow-[inset_0_-40px_210px_rgba(0,2,310,0.5)] rounded-[50%] select-none pointer-events-none">
              <img
                loading="lazy"
                // data-aos="fade-up"
                className="image h-[450px] w-[450px] md:h-[300px] md:w-[300px]  overflow-hidden object-cover  md:m-auto sm:m-0 select-none pointer-events-none"
                src="https://i.postimg.cc/tRmh6skf/image.jpg"
                // src={mine https://i.ibb.co/gb8bqgcz/IMG20240826225420.jpg}
                alt="mine"
              />
            </div>
            <div className=" absolute bottom-20 md:bottom-3 right-2 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="fixed bottom-10 right-10 sm:right-5 sm:bottom-5 bg-yellow-500 w-16 h-16 sm:w-12 sm:h-12 flex items-center justify-center rounded-full z-20 animate-bounce">
        <button
          data-aos="fade-up"
          data-aos-duration="1200"
          onClick={handleEmailButtonClick}
          className="box font-medium text-white  flex items-start justify-center gap-1"
        >
          <MdEmail className=" rotate-[15deg] text-white text-3xl sm:text-2xl hover:scale-110 cursor-pointer" />
       
        </button>
      </div>*/}
    </div>
  );
};

export default Hero;
