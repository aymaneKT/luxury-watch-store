import moon from "../Images/Moon.webp";
import masterThin from "../Images/Master Ultra Thin.webp";
import masterThinsSecond from "../Images/Master Ultra Thin Small Seconds.webp";
import masterUltraThinPower from "../Images/Master Ultra Thin Power Reserve.webp";
import rolexGold from "../Images/Rolex Gold Steel.webp";
import rolexHulk from "../Images/Rolex Hulk.webp";
import rolexDate from "../Images/Rolex Submariner Date.webp";
import rolexVintage from "../Images/Rolex Submariner Vintage.webp";
import blueIwc from "../Images/blueIwcPilot's Watch.webp";
import brownIwc from "../Images/BrownIwc.webp";
import iwcCronoEdition from "../Images/IWCCronograph.webp";
import IWCWatchMarkXX from "../Images/IWCWatchMarkXX.webp";
// import moonMasterpiece from "../Images/Moon Masterpiece.png";
// import MasterThinGold from "../Images/Master Thin Gold.png";
// import RolexSubmarinerBlue from "../Images/Rolex Submariner Blue.png";
// import RolexVintageSeaDweller from "../Images/Rolex Sea-Dweller Vintage.png"
// import IWCChronoPilot from "../Images/IWC Chrono Pilot.png";
// import OmegaSeamaster from "../Images/Omega Seamaster.png";
import { v4 as uuidv4 } from "uuid";

type watches = {
  id: string;
  title: string;
  image: string;
  type: string;
  specs: string[];
  description: string;
  price: number;
  quantity?: number;
  forHomePage: boolean;
}[];

export const Watches: watches = [
  {
    id: uuidv4(),
    image: moon,
    title: "Moon Ultra-Thin",
    type: "Dress Watch",
    specs: [
      "18K White Gold Case.",
      "W/ Silver Opaline Dial.",
      "& Alligator Leather Strap.",
      "39mm x Ultra-Thin Profile.",
      "Limited Edition of 400 Pieces.",
    ],
    description:
      "A dress watch is the epitome of elegance—slim, sophisticated, and designed to complement formal attire.",
    price: 15000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: masterThin,
    title: "Master Thin Blue",
    type: "Dress Watch",
    specs: [
      "Stainless Steel Case.",
      "W/ Sunburst Blue Dial.",
      "& Leather Strap.",
      "40mm x Ultra-Thin Design.",
      "Limited Edition of 500 Pieces.",
    ],
    description:
      "A dress watch is the epitome of elegance—slim, sophisticated, and designed to complement formal attire.",
    price: 12000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: masterThinsSecond,
    title: "Master Thin Seconds",
    type: "Dress Watch",
    specs: [
      "Rose Gold Case.",
      "W/ White Dial.",
      "& Brown Leather Strap.",
      "42mm x Ultra-Thin Profile.",
      "Limited Edition of 300 Pieces.",
    ],
    description:
      "A dress watch is the epitome of elegance—slim, sophisticated, and designed to complement formal attire.",
    price: 18000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: masterUltraThinPower,
    title: "Ultra-Thin Power",
    type: "Dress Watch",
    specs: [
      "Platinum Case.",
      "W/ Minimalist Grey Dial.",
      "& Handmade Leather Strap.",
      "41mm x Ultra-Thin Power Reserve.",
      "Limited Edition of 200 Pieces.",
    ],
    description:
      "A dress watch is the epitome of elegance—slim, sophisticated, and designed to complement formal attire.",
    price: 25000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: rolexGold,
    title: "Rolex Submariner Gold",
    type: "Diver’s Watch",
    specs: [
      "18K Yellow Gold Case.",
      "W/ Black Dial & Ceramic Bezel.",
      "& Oyster Bracelet.",
      "41mm x 300m Water Resistance.",
      "Limited Edition of 250 Pieces.",
    ],
    description:
      "Built for underwater adventures, a diver’s watch is rugged, water-resistant, and highly legible.",
    price: 36000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: rolexHulk,
    title: "Rolex Submariner Hulk",
    type: "Diver’s Watch",
    specs: [
      "Stainless Steel Case.",
      "W/ Green Dial & Bezel.",
      "& Oyster Bracelet.",
      "40mm x 300m Water Resistance.",
      "Limited Edition of 350 Pieces.",
    ],
    description:
      "Built for underwater adventures, a diver’s watch is rugged, water-resistant, and highly legible.",
    price: 14000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: rolexDate,
    title: "Rolex Datejust",
    type: "Diver’s Watch",
    specs: [
      "Two-Tone Gold & Steel Case.",
      "W/ Champagne Dial.",
      "& Jubilee Bracelet.",
      "41mm x 100m Water Resistance.",
      "Limited Edition of 500 Pieces.",
    ],
    description:
      "Built for underwater adventures, a diver’s watch is rugged, water-resistant, and highly legible.",
    price: 12000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: rolexVintage,
    title: "Rolex Vintage Submariner",
    type: "Diver’s Watch",
    specs: [
      "Vintage Stainless Steel Case.",
      "W/ Faded Black Dial & Patina Markers.",
      "& Leather NATO Strap.",
      "39mm x 200m Water Resistance.",
      "Limited Edition of 100 Pieces.",
    ],
    description:
      "Built for underwater adventures, a diver’s watch is rugged, water-resistant, and highly legible.",
    price: 22000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: blueIwc,
    title: "IWC Pilot Blue",
    type: "Pilot Watch",
    specs: [
      "Ceramic Case.",
      "W/ Deep Blue Dial.",
      "& Nylon Strap.",
      "44mm x 60m Water Resistance.",
      "Limited Edition of 200 Pieces.",
    ],
    description:
      "Inspired by aviation, a pilot’s watch features a large, legible dial and practical complications like a GMT or chronograph.",
    price: 8000,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: brownIwc,
    title: "IWC Pilot Bronze",
    type: "Pilot Watch",
    specs: [
      "Bronze Case.",
      "W/ Vintage Brown Dial.",
      "& Leather Strap.",
      "45mm x 100m Water Resistance.",
      "Limited Edition of 150 Pieces.",
    ],
    description:
      "Inspired by aviation, a pilot’s watch features a large, legible dial and practical complications like a GMT or chronograph.",
    price: 7500,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: iwcCronoEdition,
    title: "IWC Chrono Edition",
    type: "Pilot Watch",
    specs: [
      "Titanium Case.",
      "W/ Black Chronograph Dial.",
      "& Perforated Leather Strap.",
      "43mm x 60m Water Resistance.",
      "Limited Edition of 250 Pieces.",
    ],
    description:
      "Inspired by aviation, a pilot’s watch features a large, legible dial and practical complications like a GMT or chronograph.",
    price: 9500,
    forHomePage: true,
  },
  {
    id: uuidv4(),
    image: IWCWatchMarkXX,
    title: "IWC Mark XX",
    type: "Pilot Watch",
    specs: [
      "Stainless Steel Case.",
      "W/ Classic White Dial.",
      "& Textile Strap.",
      "41mm x 100m Water Resistance.",
      "Limited Edition of 300 Pieces.",
    ],
    description:
      "Inspired by aviation, a pilot’s watch features a large, legible dial and practical complications like a GMT or chronograph.",
    price: 7200,
    forHomePage: true,
  },
  // {
  //   id: uuidv4(),
  //   image: moonMasterpiece,
  //   title: "moon Masterpiece",
  //   type: "Dress Watch",
  //   specs: [
  //     "18K Yellow Gold Case.",
  //     "W/ Black Opaline Dial.",
  //     "& Alligator Leather Strap.",
  //     "42mm x Ultra-Thin Profile.",
  //     "Limited Edition of 300 Pieces.",
  //   ],
  //   description:
  //     "A masterful dress watch that brings timeless elegance and craftsmanship.",
  //   price: 18000,
  //   forHomePage: false,
  // },
  // {
  //   id: uuidv4(),
  //   image: MasterThinGold,
  //   title: "Master Thin Gold",
  //   type: "Dress Watch",
  //   specs: [
  //     "18K Gold Case.",
  //     "W/ Champagne Dial.",
  //     "& Crocodile Leather Strap.",
  //     "40mm x Ultra-Thin Design.",
  //     "Limited Edition of 250 Pieces.",
  //   ],
  //   description: "A golden example of thin and sophisticated elegance.",
  //   price: 21000,
  //   forHomePage: false,
  // },
  // {
  //   id: uuidv4(),
  //   image: RolexSubmarinerBlue,
  //   title: "Rolex Submariner Blue",
  //   type: "Diver’s Watch",
  //   specs: [
  //     "Stainless Steel Case.",
  //     "W/ Blue Dial & Ceramic Bezel.",
  //     "& Oyster Bracelet.",
  //     "41mm x 300m Water Resistance.",
  //     "Limited Edition of 500 Pieces.",
  //   ],
  //   description: "An iconic diver’s watch, combining style and durability.",
  //   price: 15000,
  //   forHomePage: false,
  // },
  // {
  //   id: uuidv4(),
  //   image:RolexVintageSeaDweller,
  //   title: "Rolex Sea-Dweller Vintage",
  //   type: "Diver’s Watch",
  //   specs: [
  //     "Vintage Stainless Steel Case.",
  //     "W/ Black Dial & Patina Markers.",
  //     "& Steel Bracelet.",
  //     "40mm x 1220m Water Resistance.",
  //     "Limited Edition of 150 Pieces.",
  //   ],
  //   description:
  //     "A vintage diver’s watch that captures the spirit of adventure.",
  //   price: 25000,
  //   forHomePage: false,
  // },
  // {
  //   id: uuidv4(),
  //   image: IWCChronoPilot,
  //   title: "IWC Chrono Pilot",
  //   type: "Pilot Watch",
  //   specs: [
  //     "Stainless Steel Case.",
  //     "W/ Green Dial & Chronograph Function.",
  //     "& Leather Strap.",
  //     "44mm x 100m Water Resistance.",
  //     "Limited Edition of 400 Pieces.",
  //   ],
  //   description:
  //     "A functional and durable pilot’s watch for aviation enthusiasts.",
  //   price: 9500,
  //   forHomePage: false,
  // },
  // {
  //   id: uuidv4(),
  //   image:OmegaSeamaster,
  //   title: "Omega Seamaster",
  //   type: "Diver’s Watch",
  //   specs: [
  //     "Stainless Steel Case.",
  //     "W/ Blue Dial & Rotating Bezel.",
  //     "& Steel Bracelet.",
  //     "42mm x 300m Water Resistance.",
  //     "Limited Edition of 350 Pieces.",
  //   ],
  //   description:
  //     "A legendary diver’s watch known for its ruggedness and style.",
  //   price: 18000,
  //   forHomePage: false,
  // },
];
