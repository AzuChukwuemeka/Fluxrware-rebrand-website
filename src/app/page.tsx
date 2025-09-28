import WhatWeOffer from "@/components/landingPage/WhatWeOffer";
import ProjectTier from "@/components/landingPage/ProjectTier";
import OurWork from "@/components/landingPage/OurWork";
import WhoWeAre from "@/components/landingPage/WhoWeAre";
import MoreInfo from "@/components/landingPage/MoreInfo";
import WorkFlow from "@/components/landingPage/WorkFlow";
import HeroSection from "@/components/landingPage/HeroSection";
import BuildTogether from "@/components/landingPage/BuildTogether";
import Footer from "@/components/landingPage/Footer";
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkFlow />
      <WhatWeOffer />
      <ProjectTier />
      {/* <OurWork /> */}
      <WhoWeAre />
      <MoreInfo />
      <BuildTogether />
      <Footer />
    </>
  );
}