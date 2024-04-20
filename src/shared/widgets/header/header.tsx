import Link from "next/link"
import NavItems from "./navItems"


const Header = () => {

  return (
    <>
   <div className="w-full border-b border-b-[#eee]">
    <div className="w-[85%] m-auto hidden md:flex justify-between items-center py-3 ">
      <div className=" flex justify-between">
        <p className="border-r border-r-[#eee] mr-2  font-poppins text-[#7a7a7a] pr-4"><span className="fa fa-envelope text-[#f35525] px-2 text-[20px]"/>{"  "}info@company.com </p>
        <p className="font-[14px] text-[#7a7a7a] font-poppins"><span className="fa fa-map text-[#f35525] px-2 text-[20px]"/>{"  "}Sunny Isles Beach, FL 33160 </p>
      </div>
      <div className=" flex items-center">
        <Link href="/facebook.com"  className="fab fa-facebook p-2 rounded-full hover:bg-[#f35525] text-[#fff]  mx-2 bg-[#cdcdcd] cursor-pointer"/>
        <Link href="/twitter.com" className="fab fa-twitter p-2 rounded-full mx-2 hover:bg-[#f35525] text-white bg-[#cdcdcd] cursor-pointer"/>
        <Link href="/linkedin.com" className="fab fa-linkedin p-2 rounded-full mx-2 hover:bg-[#f35525] text-white bg-[#cdcdcd] cursor-pointer"/>
        <Link href="/instagram.com" className="fab fa-instagram p-2 rounded-full mx-2 hover:bg-[#f35525]  font-[500px] text-white  bg-[#cdcdcd] cursor-pointer"/>
      </div>
    </div>
   </div>
    <NavItems/>
   </>
  )
}

export default Header
