import { createContext, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
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
type watches = {
  id: string;
  title: string;
  image: string;
  type: string;
  specs: string[];
  description: string;
  price: number;
  quantity?: number;
}[];

const Watches: watches = [
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
  },
];

export const HomePageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <HomePageContext.Provider value={Watches}>
    {children}
  </HomePageContext.Provider>
);

const HomePageContext = createContext<watches>([]);

export const useHomePageContext = () => useContext(HomePageContext);
