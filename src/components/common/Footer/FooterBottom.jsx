import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#131921] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-gray-200 duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
           کپی رایت Amazon 2024 |
          <a href="#" target="_blank" rel="noreferrer">
            <span className="mr-1 font-medium group-hover:text-white">
              ریکت وب اپلیکیشن
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
