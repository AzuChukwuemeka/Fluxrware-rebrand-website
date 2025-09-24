import { moreInfoQuestionHeaders } from "@/types/types";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import ConstructionIcon from '@mui/icons-material/Construction';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


export const moreInfoQuestions: Array<moreInfoQuestionHeaders> = [
    {
        mainHeading: "General Questions",
        icon: <EmojiObjectsIcon style={{ color: "#f5c518" }} />,
        info: [
            {
                title: "What services does Fluxware offer?",
                answer: "Fluxware offers a range of services including web development, mobile app development, UI/UX design tailored to your business goals and user needs."
            },
            {
                title: "Who do you typically work with?",
                answer: "We work with startups, small businesses, and enterpreneurs looking to build or improve their digital presence."
            },
            {
                title: "Do you only build websites?",
                answer: "No, we also build Web applications and offer UI/UX design services."
            }
        ]
    },
    {
        mainHeading: "Design & Development",
        icon: <ConstructionIcon style={{ color: "gray" }} />,
        info: [
            {
                title: "Will my website be optimized for mobile?",
                answer: "Absolutely, Every site we build is responsive and fully optimized to look and work perfectly on all screen sizes."
            },
            {
                title: "I need something unique, can you make it?",
                answer: "Definitely, every solution we deliver is custom-made to fit your vision, whether it's design, features or functionalities."
            },
            {
                title: "Do you offer e-commerce solutions?",
                answer: "Yes, we build powerful and secure e-commerce platforms tailored to your business and customers."
            },
            {
                title: "What if i already have a design?",
                answer: "Great! We can work with your existing design and bring it to life with clean, functional development."
            }
        ]
    },
    {
        mainHeading: "Pricing, Discounts & Refunds",
        icon: <PriceChangeIcon style={{ color: "green" }} />,
        info: [
            {
                title: "How much will it cost?",
                answer: "Our pricing varies depending on your project's size and complexity. We offer custom quotes after a free initial consultation."
            },
            {
                title: "Will updates also be free?",
                answer: "Not by default, but we offer flexible maintenance plans based on your needs. That way, you only pay for what truly benefits your business."
            },
            {
                title: "Do you offer discounts for students?",
                answer: "Currently, we don't have a dedicated discount program for students or non-profits, but we're happy to discuss budget friendly options during our consultation."
            },
            {
                title: "Any Refunds?",
                answer: "Refunds depend on the service and stage of the project. If you have concerns, feel free to reach out—we’re always transparent and fair."
            }
        ]
    },
    {
        mainHeading: "Timelines & Support",
        icon: <CalendarTodayIcon style={{ color: "blue" }} />,
        info: [
            {
                title: "How long will my project take?",
                answer: "Timelines vary, but most websites are completed in 2–4 weeks. Web apps may take longer depending on complexity."
            },
            {
                title: "What happens after launch?",
                answer: "We offer post-launch support, maintenance packages, and can help you scale or make updates as your business grows."
            },
            {
                title: "Can i request changes during development?",
                answer: "Yes, we keep communication open during the project so you can give feedback and request tweaks along the way."
            }
        ]
    }
]