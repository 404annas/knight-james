import thamesSurreyMain from "../../assets/SurreyMain.jpg";
import kingstonMain from "../../assets/KingstonMain.jpg";
import kingston1 from "../../assets/kingston1.jpg";
import kingston2 from "../../assets/kingston2.jpg";
import kingston3 from "../../assets/kingston4.jpg";
import kingston4 from "../../assets/secondaryMain.jpg";
import kingston5 from "../../assets/secondaryMain2.jpg";
import kingston6 from "../../assets/secondaryMain3.jpg";

import surrey3 from "../../assets/surrey3.jpg"
import surrey2 from "../../assets/surrey2.jpg"
import surrey1 from "../../assets/surrey1.jpg"
import surrey4 from "../../assets/surrey4.jpg"
import surrey5 from "../../assets/surrey5.jpg"
import surrey6 from "../../assets/surrey6.jpg"

export const pastProjectsData = [
    {
        id: "kingston-upon-thames",
        title: "Kingston Upon Thames",
        location: "Surrey",
        heroImg: kingstonMain,
        subTitle: "Luxury Victorian House Conversion & Extension",
        overview: "This development showcases the comprehensive transformation of a traditional three-bedroom Victorian residence, originally built in 1932, located in the prime residential area of Kingston upon Thames, Surrey, South London.",
        overviewSecondary: "The project was strategically acquired with the intention of maximising both capital growth and end-user appeal. Through a combination of intelligent space planning, a substantial rear extension, and a full internal renovation, the property was repositioned into a high-quality, contemporary family home while preserving its original period charm.",

        assetProfile: [
            { label: "Property Type", value: "Victorian terraced house" },
            { label: "Year Built", value: "1932" },
            { label: "Original Configuration", value: "Three-bedroom house" },
            { label: "Post-Development", value: "Four bedrooms, Two bathrooms, Open-plan living" },
        ],

        strategy: [
            "A six-metre rear extension to significantly enhance ground floor living space",
            "Reconfiguration of the internal layout to improve flow and natural light",
            "Upgrade from a three-bedroom to a four-bedroom family home",
            "Introduction of modern open-plan living aligned with current buyer demand",
            "Restoration of three original Victorian character features"
        ],

        designBuild: [
            "Full structural and cosmetic renovation throughout",
            "Bespoke open-plan kitchen diner designed for modern entertaining",
            "Two newly designed contemporary bathrooms",
            "High-quality materials and finishes used throughout",
            "Period features preserved and integrated into the modern design"
        ],

        financials: [
            { label: "Purchase Price", value: "£520,000" },
            { label: "Renovation & Extension", value: "£80,000" },
            { label: "Total Project Cost", value: "£600,000" },
            { label: "Final Property Value", value: "£850,000" },
            { label: "Gross Value Added", value: "£250,000", highlight: true },
        ],

        outcome: "The Kingston project represents a strong example of value-led residential development, combining strategic buying, controlled costs, and design-driven execution. The completed property achieved a significant uplift in value while delivering a premium, future-proof family home.",

        gallery: [kingston1, kingston2, kingston3, kingston4, kingston5, kingston6],
        nextProjectName: "Cheam, Surrey",
        nextProjectId: "thames-surrey"
    },
    {
        id: "thames-surrey",
        title: "Cheam, Surrey",
        location: "South London",
        heroImg: thamesSurreyMain,
        subTitle: "Luxury Bungalow Redevelopment into Prime Residential Asset",
        overview: "This landmark development in Cheam, Surrey (South London) involved the complete redevelopment of an existing three-bedroom bungalow into a substantial, ultra-luxury seven-bedroom residence designed to meet the demands of the high-net-worth end-user market.",
        overviewSecondary: "The strategy centred on maximising gross development value through scale, specification, and lifestyle-led design, transforming a low-density asset into a prime residential home positioned at the top end of the local market.",

        assetProfile: [
            { label: "Original Property", value: "Three-bedroom bungalow" },
            { label: "Post-Development", value: "Seven bedrooms, Seven en-suites" },
            { label: "Key Features", value: "Private Gym, Dedicated Cinema Room" },
            { label: "Target Market", value: "Luxury owner-occupiers & HNW buyers" },
        ],

        strategy: [
            "Full structural redevelopment and reconfiguration of the asset",
            "Significant increase in internal square footage and bedroom count",
            "Integration of premium lifestyle features such as a gym and cinema",
            "High-end finishes throughout to support a premium exit value",
            "Intensive repositioning for the £2m+ local price point"
        ],

        designBuild: [
            "Complete demolition and rebuild elements to maximise volume",
            "Seven generously sized bedrooms, each with its own en-suite",
            "Expansive open-plan kitchen and living area for entertaining",
            "Bespoke joinery and luxury materials used throughout",
            "Contemporary architectural styling focused on space and light"
        ],

        financials: [
            { label: "Purchase Price", value: "£1,100,000" },
            { label: "Development Costs", value: "£750,000" },
            { label: "Total Project Cost", value: "£1,850,000" },
            { label: "Final Property Value", value: "£2,500,000" },
            { label: "Gross Gain", value: "£650,000", highlight: true },
        ],

        outcome: "The Cheam development exemplifies our ability to identify underutilised assets, execute large-scale luxury redevelopments, and control build costs while delivering exceptional specification. It stands as a strong demonstration of our investor-led luxury development model.",

        gallery: [
            surrey3,
            surrey2,
            surrey1,
            surrey4,
            surrey5,
            surrey6,
        ],
        nextProjectName: "Kingston Upon Thames",
        nextProjectId: "kingston-upon-thames"
    },
];