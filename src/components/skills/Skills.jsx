import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";
import { SiJava, SiMysql, SiVercel, SiVuedotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { FaAws, FaDocker, FaPython,} from "react-icons/fa";
 

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
               <ProgressBar logo={<SiVercel />} name={"Vercel"} value={100} />

                <ProgressBar logo={<SiTailwindcss />} name={"Tailwind"} value={96} />
                
               
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={89}
                />
                
                <ProgressBar logo={<FaPython />} name={"Python"} value={85} />
                {/* <ProgressBar logo={<FaReact />} name={"React Native"} value={75} /> */}
                <ProgressBar
                  logo={<FaDocker className="text-color-blue-500"/>}
                  name={"Docker"}
                  value={80}
                />
              </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5  gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10 ">
              <SkillBox
                logo={ <TbBrandNextjs className="text-green-400" />}
                black={"white"}
                white={"black"}
                skill={"NextJs"}
              />
              <SkillBox
                logo={<SiMongodb className="bg-white text-green-500" />}
                black={"black"}
                white={"white"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex flex-col gap-10 mt-10">
              <SkillBox
                logo={<SiVuedotjs  className="bg-white text-green-500"/>}
                black={"black"}
                white={"white"}
                skill={"Vue"}
              />
              <SkillBox
                className="overflow-hidden "
                logo={<SiMysql  className="bg-black text-blue-500" />}
                black={"white"}
                white={"black"}
                skill={"MySQL"}
              />
              <SkillBox
                className=" "  
                logo={
                  <SiJava   className="text-red-600" />
                }
                black={"black"}
                white={"white"}
                skill={"Java SpringBoot"}
              />
            </div>
          </div>
        </div>

        {/* icons */}
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
