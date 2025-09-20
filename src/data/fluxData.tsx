import { fluxWareStaff, linkStructure, projectTier, successStory } from "@/types/types";
import HomeIcon from '@mui/icons-material/Home';
import DesignServiceIcon from "@mui/icons-material/DesignServices";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';

export const restOfTheTeam : Array<fluxWareStaff> = [
      {
        img: "./about-us.jpg",
        name: "Azu Chukwuemeka",
        jobRole: "Backend Developer, Software Architect."
      },
      {
        img: "about-us-3.jpg",
        name: "Oluwasegun Babalola",
        jobRole: "ui/ux Designer"
      },
      {
        img: "./about-us-4.jpg",
        name: "Aisha Bello",
        jobRole: "Asst Project Manager, UI/UX Designer"
      },
      {
        img: "./about-us-5.jpg",
        name: "Temityoyo Temisanren",
        jobRole: "Project Manager, Frontend Developer"
      },
      {
        img: "./about-us-6.png",
        name: "Habeeb Dere",
        jobRole: "Product Manager"
      },
      {
        img: "./about-us-7.png",
        name: "Adedapo Ogunwolu",
        jobRole: "Cyber Security Specialist"


      },
      {
        img: "./about-us-8.png",
        name: "Suleiman Ahmed",
        jobRole: "Branding Expert, UI/UX Designer"

      },{
        img: "./about-us-9.jpg",
        name: "Yusuf Mahad",
        jobRole: "Graphics Designer"
      }
]

export const successStoriesRowOne : Array<successStory> = [
  {
    avatar: "./served1.jpg",
    name: "Isaiah Moore",
    review: "Reliable, creative, and always one step ahead. Highly recommended."
  },
  {
    avatar: "./served1.jpg",
    name: "Samir Patel",
    review: "They truly understood our vision and brought to life beautifully."
  },
  {
    avatar: "./served1.jpg",
    name: "Zoe Harper",
    review: "Clear process, great design instincts, and solid technical execution."
  }
]

export const successStoriesRowTwo : Array<successStory> = [
  {
    avatar: "./served1.jpg",
    name: "Natalie Ruiz",
    review: "Exceptional service and a clean, intuitive final product."
  },
  {
    avatar: "./served1.jpg",
    name: "Elena Mendez",
    review: "The process was seamless from start to finsh. Highly recommend!"
  },
  {
    avatar: "./served1.jpg",
    name: "Leo Johnson",
    review: "Designs were not just pretty - they acutally converted."
  },
  {
    avatar: "./served1.jpg",
    name: "Rachel Kim",
    review: "It felt like we had an in-house team. Incredible partnership!."
  }
]

export const successStoriesRowThree : Array<successStory> = [
  {
    avatar: "./served1.jpg",
    name: "Amira Benson",
    review: "Every feedback we gave was listened to and implemented perfectly."
  },
  {
    avatar: "./served1.jpg",
    name: "Jonas Meyer",
    review: "We've worked with other teams before, but this was next-level."
  },
  {
    avatar: "./served1.jpg",
    name: "David Okoro",
    review: "Quick turnaround without compromising on quality. Very impressed!."
  }
]

export const navigationLinks : Array<linkStructure> = [
  {
    text: "Home",
    url: "/home",
    icon: <HomeIcon sx = {{marginRight: 1}}/>
  },
  {
    text: "Services",
    url: "/services" ,
    icon: <DesignServiceIcon sx = {{marginRight: 1}} />
  },
  {
    text: "Prices",
    url: "/prices",
    icon: <PriceCheckIcon sx = {{marginRight: 1}}/>
  },
  {
    text: "About",
    url: "/about" ,
    icon: <InfoIcon sx = {{marginRight: 1}}/>
  },
  {
    text: "FAQs",
    url: "/faq",
    icon: <QuizIcon sx = {{marginRight: 1}}/>
  }
]

export const projectTierInformation : Array<projectTier> = [
  {
    packageType: "Standard",
    packageDescription: "Best for scaled brand digital presence.",
    price: 999,
    packageList: [
      {
        service: "Full scale Custom website",
        accepted: true
      },
      {
        service: "UI/UX system tailored for user flow & engagement",
        accepted: true
      },
      {
        service: "Custom Brand Identify Design",
        accepted: true
      },
      {
        service: "E-commerce integration for product transactions",
        accepted: false
      },
      {
        service: "Product Catalog Support",
        accepted: true
      },
      {
        service: "1-year domain registration & hosting",
        accepted: true
      },
      {
        service: "Full CMS Implementation",
        accepted: false
      },
      {
        service: "SEO Implementation",
        accepted: true
      },
      {
        service: "Google Analytics & Conversion Tracking setup",
        accepted: false
      },
      {
        service: "Monthly Performance Reporting",
        accepted: false
      },
      {
        service: "Yearly past-launch support & maintenance",
        accepted: true
      }
    ],
  },
  {
    packageType: "Premium",
    packageDescription: "Built for professional growth.",
    price: 699,
    packageList: [
      {
        service: "Full scale Custom website",
        accepted: true
      },
      {
        service: "UI/UX system tailored for user flow & engagement",
        accepted: true
      },
      {
        service: "Custom Brand Identify Design",
        accepted: true
      },
      {
        service: "E-commerce integration for product transactions",
        accepted: true
      },
      {
        service: "Product Catalog Support",
        accepted: true   
      },
      {
        service: "1-year domain registration & hosting",
        accepted: true
      },
      {
        service: "Full CMS Implementation",
        accepted: false
      },
      {
        service: "SEO Implementation",
        accepted: true
      },
      {
        service: "Google Analytics & Conversion Tracking setup",
        accepted: false
      },
      {
        service: "Monthly Performance Reporting",
        accepted: false
      },
      {
        service: "Yearly past-launch support & maintenance",
        accepted: true
      },
    ],
  },
  {
    packageType: "Enterprise",
    packageDescription: "Best for scaled brand digital presence.",
    price: 999,
    packageList: [
      {
        service: "Full scale Custom website",
        accepted: true
      },
      {
        service: "UI/UX system tailored for user flow & engagement",
        accepted: true
      },
      {
        service: "Custom Brand Identify Design",
        accepted: true
      },
      {
        service: "E-commerce integration for product transactions",
        accepted: true
      },
      {
        service: "Product Catalog Support",
        accepted: true   
      },
      {
        service: "1-year domain registration & hosting",
        accepted: true
      },
      {
        service: "Full CMS Implementation",
        accepted: true
      },
      {
        service: "SEO Implementation",
        accepted: true
      },
      {
        service: "Google Analytics & Conversion Tracking setup",
        accepted: true
      },
      {
        service: "Monthly Performance Reporting",
        accepted: true
      },
      {
        service: "Yearly past-launch support & maintenance",
        accepted: true
      },
    ],
  }
];