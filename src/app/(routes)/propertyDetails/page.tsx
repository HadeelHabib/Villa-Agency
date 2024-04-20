import App from "@/shared/components/accordion/accourdion";
import BestDeal from "@/shared/components/bestDeal/best.deal";
import Features from "@/shared/components/features/features";
import Intro from "@/shared/components/properties.intro/properties.intro";
import { IMAGES } from "@/utils/images";
import Image from "next/image";
import Link from "next/link";

const Page = () => {

  return (
   <div className="">
      <Intro title="HOME / PROPERTIES" subtitle="PROPERTIES"/>
      <div className="w-[85%] m-auto md:flex items-center justify-between my-4">
        
        <Image  src={IMAGES.singleProperty} alt="" className=" overflow-hidden float-none"/>
        <div className="md:w-[30%] w-[90%] mx-auto md:ml-10 md:my-0 my-4">
          <Features/>
        </div>
        </div>
        <div className="md:w-[85%] w-[80%] mx-auto">
          <div className="md:w-[70%]">
            <span className="rounded-[5px] font-[500] py-[5px] px-[12px] text-[#1e1e1e] bg-[#fbd9cf] mt-[40px]">Appartment</span>
            <h2 className="text-[25px] font-[700] pb-[40px] border-b border-b-[#eee] mt-[25px] mb-[40px]">24 New Street Miami, OR 24560</h2>
            <p className="pt-4 w-[100%] opacity-[.8]">
          Get<strong> the best villa</strong> agency HTML CSS Bootstrap Template for your company
          website. TemplateMo provides you the{" "}
          <Link href="#" style={{ textDecoration: "none" }}>
            best free CSS templates
          </Link>{" "}
          in the world. Please tell your friends about it. Thank you. Cloud
          bread kogi bitters pitchfork shoreditch tumblr yr succulents
          single-origin coffee schlitz enamel pin you probably haven&apos;t
          heard of them ugh hella.
          <br />
          <br />
          When you look for free CSS templates, you can simply type TemplateMo
          in any search engine website. In addition, you can type TemplateMo
          Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
          +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
          PBR&B DSA poutine neutra cardigan hoodie pop-up.
        </p>
        <div className="mt-4">
          <App/>
        </div>
          </div>
        </div>
        <BestDeal/>
      
   </div>

     )
};

export default Page
