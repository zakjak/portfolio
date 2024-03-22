import Image from "next/image";
import { FaCss3, FaHtml5, FaPython, FaReact } from 'react-icons/fa'
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { DiPhotoshop } from "react-icons/di";
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiPandas} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";


const Introduction = () => {
  return (
    <section id="about" className="md:grid overflow-hidden items-center flex-col md:grid-cols-2 bg-black md:h-[30rem] text-white">
        <div className="h-full w-full  flex items-center justify-center">
          <div className="relative top-10">
            <div className="absolute w-full h-[70%] bottom-0 rounded-t-full bg-gradient-to-t from-zinc-900 to-black" />
              <Image alt="Yakubu Zakaria profile picture" className="top z-50 relative w-full h-full" src='/1.png' width={340} height={3000} />
            <div className="absolute top-0 h-full bg-gradient-to-r to-transparent w-[13rem]"></div>
          </div>
            <FaHtml5 className="icons top-[10%] left-[10%] absolute" />
            <FaCss3 className="left-[5%] icons" />
            <TbBrandJavascript className="left-[20%] top-[30%] icons" />
            <FaReact className="top-[10&] left-[54%] icons" />
            <FaPython className="icons top-[20%] left-[40%]" />
            <IoLogoFigma className="top-[25%] left-[90%] icons" />
            <DiPhotoshop className="icons top-[10%] left-[85%]" />
            <SiNextdotjs className="icons left-[40%]" />
            <SiMongodb className="icons left-[45%] top-[60%]" />
            <IoLogoFirebase className="icons top-[55%] left-[60%]" />
            <SiTailwindcss className="icons top-[60%] left-[80%]" />
            <SiPandas className="icons top-[20%] left-[60%]" />
            
        </div>
        <div className="py-28 ">
          <h1 className="text-3xl intro text-center"><span className="to-zinc-200 bg-clip-text text-transparent bg-gradient-to-r from-zinc-100">My name is </span><span className="font-bold text-4xl">Yakubu Zakaria</span></h1>
          <p className="mt-4 text-justify w-[70%] mx-auto">
            I am thrilled to welcome you to my portfolio, 
            where the worlds of petroleum engineering and 
            full stack development intersect. I invite you 
            to join me on a journey that transcends traditional 
            boundaries, blending the precision of reservoir 
            engineering with the dynamic realm of software development.
          </p>
        </div>
      </section>
  )
}

export default Introduction