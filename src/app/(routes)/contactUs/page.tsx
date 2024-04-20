import Card from "@/shared/components/cards/contact.card";
import Input from "@/shared/components/form/form";
import Map from "@/shared/components/map/map";
import Intro from "@/shared/components/properties.intro/properties.intro";
import { IMAGES } from "@/utils/images";

const Page = () => {
  return (
    <div className="">
      <Intro title="HOME / Contact" subtitle="CONTACT US" />
      <div className="my-12 w-[85%] md:flex mx-auto justify-between items-center">
        <div className="">
          <h5 className="title">CONTACT US</h5>
          <h2 className="subtitle">
            Get In Touch <br />
            With Our Agents
          </h2>
          <p className="text-[14px] leading-[28px] text-[#4a4a4a]">
            When you really need to download free CSS templates, please remember
            our website
            <br /> TemplateMo. Also, tell your friends about our website. Thank
            you for visiting. There is a
            <br />
            variety of Bootstrap HTML CSS templates on our website. If you need
            more information,
            <br /> please contact us
          </p>
          <div className="w-full">
            <Card
              img={IMAGES.phone}
              isContact={true}
              title="010-020-0340"
              subtitle="Phone Number"
            />
            <Card
              img={IMAGES.email}
              title="info@villa.co"
              isContact={true}
              subtitle="Business Email"
            />
          </div>
        </div>
        <div className="md:w-[50%] w-[95%] m-auto">
          <Input />
        </div>
      </div>
      <div className="w-[75%] mx-auto my-[5%]">
        <Map />
      </div>
    </div>
  );
};

export default Page;
