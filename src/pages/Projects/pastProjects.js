import thamesSurreyMain from "../../assets/SurreyMain.jpg"
import kingstonMain from "../../assets/KingstonMain.jpg"

import kingston1 from "../../assets/kingston1.jpg"
import kingston2 from "../../assets/kingston2.jpg"
import kingston3 from "../../assets/kingston3.jpg"
// import kingston4 from "../../assets/kingston4.jpg"

export const pastProjectsData = [
    {
        id: "thames-surrey",
        title: "Thames Surrey",
        location: "W2",
        heroImg: thamesSurreyMain,
        subTitle: "Lancaster Gate Penthouse",
        specs: [
            { label: "Architect", value: "Jack Dusek" },
            { label: "Bedrooms", value: "3" },
            { label: "Bathrooms", value: "3" },
            { label: "Size", value: "1650 sq ft" },
            { label: "Sale Price", value: "£2,450,000" },
        ],
        description: [
            "When purchased this property had been unofficially split into two units: a three bedroom duplex and a studio flat. We secured planning permission and listed building consent to reconfigure the space as one large duplex penthouse.",
            "We also undertook a particularly involved process to purchase the fourth and fifth floor communal hallways, enlarging the flat by around 150 sq ft.",
            "On the lower floor we created three bedrooms and three marble-clad bathrooms, with a principal suite of some 400 sq ft in size.",
            "The flat was sold with a share in the freehold and a long lease."
        ],
        gallery: [
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200"
        ],
        nextProjectName: "Kingston Upon Thames",
        nextProjectId: "kingston-upon-thames"
    },
    {
        id: "kingston-upon-thames",
        title: "Kingston Upon Thames",
        location: "KT1",
        heroImg: kingstonMain,
        subTitle: "Riverside Development",
        specs: [
            { label: "Architect", value: "Design Studio A" },
            { label: "Bedrooms", value: "4" },
            { label: "Bathrooms", value: "4" },
            { label: "Size", value: "2100 sq ft" },
            { label: "Sale Price", value: "£3,150,000" },
        ],
        description: [
            "A rare opportunity to develop a riverside plot in the heart of Kingston. This project involved deep excavation for a luxury basement cinema and spa.",
            "The architecture focuses on floor-to-ceiling glass to maximize the views of the River Thames.",
            "High-specification finishes throughout, including bespoke Italian joinery and a smart home integration system."
        ],
        gallery: [
            kingston1,
            kingston2,
            kingston3,
        ],
        nextProjectName: "Thames Surrey",
        nextProjectId: "thames-surrey"
    }
];