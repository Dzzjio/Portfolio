import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = (props) => {
  const text = props.headerText;
  return (
    <div className="bg-black h-screen w-full flex flex-col">
      <div className="flex justify-between items-end mt-6 ml-6 sm:ml-12">
        <div className="items-end mt-[20px] ml-[36px] ">
          <img alt="logo" src={logo} className="w-[40px] sm:w-[60px]" />
        </div>
        <Link to='/menu'>
        <div className="flex flex-col h-[20px] justify-between items-end mt-[26px] sm:mt-[60px] mr-[36px] sm:mr-[120px]">
          <div className="bg-white w-[31.25px] h-[3px]"></div>
          <div className="bg-white w-[25px] h-[3px]"></div>
          <div className="bg-white w-[18.75px] h-[3px]"></div>
        </div>
        </Link>
      </div>
      <div className="text-white sm:w-300 lg:w-full mt-[204px] mx-auto text-center font-family: league-spartan">
        <h1 className=" text-6xl mb-1 sm:w-[300px] lg:w-full">{text.h1}</h1>
        <p className="text-2xl w-[160px] sm:w-[300px] lg:w-full mx-auto tracking-wider">
          {text.p}
        </p>
      </div>
    </div>
  );
};

export default Header;
