export interface Wine {
  id: string;
  name: string;
  category: "Rouge" | "Blanc" | "Rosé" | "Champagne";
  price: number;
  description: string;
  origin: string;
  year: number;
  image: string;
}

import wineRed from "@/assets/wine-red.jpg";
import wineWhite from "@/assets/wine-white.jpg";
import wineRose from "@/assets/wine-rose.jpg";
import wineChampagne from "@/assets/wine-champagne.jpg";

export const wines: Wine[] = [
  {
    id: "1",
    name: "Château Margaux",
    category: "Rouge",
    price: 45000,
    description: "Un grand cru classé aux arômes de cassis et de violette, avec une finale longue et élégante.",
    origin: "Bordeaux, France",
    year: 2018,
    image: wineRed,
  },
  {
    id: "2",
    name: "Domaine de la Romanée",
    category: "Rouge",
    price: 65000,
    description: "Vin d'exception aux notes de cerise noire et d'épices, structure tannique remarquable.",
    origin: "Bourgogne, France",
    year: 2019,
    image: wineRed,
  },
  {
    id: "3",
    name: "Chablis Premier Cru",
    category: "Blanc",
    price: 25000,
    description: "Vin blanc minéral et frais aux notes d'agrumes et de pierre à fusil.",
    origin: "Bourgogne, France",
    year: 2021,
    image: wineWhite,
  },
  {
    id: "4",
    name: "Sancerre Loire",
    category: "Blanc",
    price: 18000,
    description: "Sauvignon blanc vif et aromatique, parfait compagnon des fruits de mer.",
    origin: "Loire, France",
    year: 2022,
    image: wineWhite,
  },
  {
    id: "5",
    name: "Côtes de Provence",
    category: "Rosé",
    price: 15000,
    description: "Rosé délicat aux notes de pêche et de fraise, idéal pour les soirées d'été.",
    origin: "Provence, France",
    year: 2023,
    image: wineRose,
  },
  {
    id: "6",
    name: "Bandol Rosé",
    category: "Rosé",
    price: 22000,
    description: "Rosé de caractère aux arômes de fruits rouges et d'épices méditerranéennes.",
    origin: "Provence, France",
    year: 2022,
    image: wineRose,
  },
  {
    id: "7",
    name: "Dom Pérignon",
    category: "Champagne",
    price: 120000,
    description: "Champagne d'exception aux bulles fines, notes de brioche et d'agrumes confits.",
    origin: "Champagne, France",
    year: 2013,
    image: wineChampagne,
  },
  {
    id: "8",
    name: "Veuve Clicquot Brut",
    category: "Champagne",
    price: 35000,
    description: "Champagne emblématique, vif et généreux aux notes de fruits jaunes.",
    origin: "Champagne, France",
    year: 2020,
    image: wineChampagne,
  },
  {
    id: "9",
    name: "Saint-Émilion Grand Cru",
    category: "Rouge",
    price: 38000,
    description: "Vin puissant et velouté aux arômes de mûre et de truffe, élevé en fût de chêne.",
    origin: "Bordeaux, France",
    year: 2017,
    image: wineRed,
  },
  {
    id: "10",
    name: "Pouilly-Fumé",
    category: "Blanc",
    price: 20000,
    description: "Vin blanc sec et élégant avec des notes fumées caractéristiques et une belle minéralité.",
    origin: "Loire, France",
    year: 2022,
    image: wineWhite,
  },
  {
    id: "11",
    name: "Tavel Rosé",
    category: "Rosé",
    price: 16000,
    description: "Le roi des rosés, corsé et fruité avec des notes de framboise et de garrigue.",
    origin: "Rhône, France",
    year: 2023,
    image: wineRose,
  },
  {
    id: "12",
    name: "Moët & Chandon Impérial",
    category: "Champagne",
    price: 28000,
    description: "Champagne iconique aux arômes de pomme verte et de pain grillé, bulles délicates.",
    origin: "Champagne, France",
    year: 2021,
    image: wineChampagne,
  },
];
