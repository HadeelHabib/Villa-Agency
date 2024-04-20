import BestDeal from "../components/bestDeal/best.deal"
import Contact from "./contact.part"
import Featured from "./featured.part"
import Hero from "./hero"
import Properties from "./properties.part"
import View from "./video.part"


const Root = () => {
  return (
    <div className="w-full">
      <Hero/>
      <Featured/>
      <View/>
      <BestDeal/>
      <Properties/>
      <Contact/>
    </div>
  )
}

export default Root
