import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export const registerGsapPlugins = () => {
    if(typeof window !== undefined){
        gsap.registerPlugin(ScrollTrigger)
    }
}