import { logo } from "../assets";
import { QrCode } from "lucide-react";
import { IoIosHeart } from "react-icons/io";
import HeartBackground from "./HeartBackground";

export function GiftCard({ img, title, text, code, styles }) {
  return (
    <div className="flex flex-col">
      <div className="h-[500px] w-[400px] bg-gray-400 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-8 z-20">
        <div className="bg-transparent  z-20">
          <div className="flex gap-3 items-center">
            <img src={logo} alt="giftCard" className="w-[40px] h-auto" />
            <span className="font-poppins font-semibold xs:text-[28px] text-[20px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
              Gift Card Shop
            </span>
          </div>

          <div className="flex justify-center relative overflow-hidden">
            {styles && <HeartBackground />}
            {styles && <HeartBackground />}
            <img src={img} className="h-[168px] z-10" alt="" />
            {styles && <HeartBackground />}
            {styles && <HeartBackground />}
          </div>
        </div>

        <div className="bg-slate-500 rounded-md flex justify-between items-start p-6 mt-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer z-20">
          <div className="flex flex-1 flex-col max-w-[300px]">
            <h2 className="font-bold text-purple-700">{code}</h2>
            <h2 className="font-bold">{title}</h2>
            <p className="text-xl mt-2">{text}</p>
          </div>
          <QrCode size={48} />
        </div>
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white_gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
  );
}
