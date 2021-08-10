import Banner from "../components/Banner";
import OurGoal from "../components/OurGoal";
import Services from "../components/Services/Services";
import Subscription from "../components/Subscription";
import Testomonial from "../components/Testomonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Services />
      <OurGoal />
      <Subscription />
      <Testomonial />

    </div>
  )
}
