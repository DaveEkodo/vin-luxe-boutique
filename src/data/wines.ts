export interface Wine {
  id: string;
  name: string;
  category: "Rouge" | "Blanc" | "Rosé" | "Champagne";
  price: number;
  description: string;
  origin: string;
  year: number;
  image: string;
  story: string;
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
    story: "Le Château Margaux est l'un des plus prestigieux domaines viticoles du monde, classé Premier Grand Cru en 1855. Situé dans l'appellation Margaux, au cœur du Médoc, ce domaine produit des vins d'une finesse et d'une élégance incomparables depuis le XIIe siècle. Le terroir exceptionnel, composé de graves garonnaises, confère au vin sa signature unique : des tanins soyeux, des arômes complexes de fruits noirs, de violette et d'épices, et une longueur en bouche remarquable. Chaque millésime est le fruit d'un travail méticuleux à la vigne et en cave, perpétuant une tradition d'excellence qui a traversé les siècles. Le 2018 est considéré comme l'un des plus grands millésimes de la décennie, alliant puissance et grâce avec une perfection rare.",
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
    story: "Le Domaine de la Romanée incarne l'essence même de la Bourgogne. Sur les coteaux de Vosne-Romanée, les vignes centenaires puisent dans un sol calcaire unique pour donner naissance à des vins d'une profondeur et d'une complexité sans égales. Ce Pinot Noir est vinifié avec une attention méticuleuse, suivant des méthodes traditionnelles transmises de génération en génération. Les arômes envoûtants de cerise noire, de truffe et d'épices orientales se déploient lentement, révélant couche après couche une richesse aromatique extraordinaire. La structure tannique, à la fois ferme et veloutée, promet un potentiel de garde exceptionnel. Ce vin est une véritable œuvre d'art viticole.",
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
    story: "Le Chablis Premier Cru est l'expression la plus pure du Chardonnay. Produit dans le nord de la Bourgogne, ce vin tire sa minéralité distinctive du sol kimméridgien, composé de fossiles d'huîtres vieux de 150 millions d'années. Les vignes, exposées plein sud sur les coteaux escarpés, bénéficient d'un microclimat unique qui permet au raisin d'atteindre une maturité optimale tout en conservant une acidité vive et rafraîchissante. En bouche, c'est une explosion de fraîcheur : agrumes, silex, fleurs blanches et une salinité marine qui évoque les origines marines de ce terroir ancestral. Un vin d'une pureté cristalline.",
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
    story: "Le Sancerre est le joyau de la Loire, un vin blanc qui capture l'essence même du Sauvignon Blanc dans sa forme la plus noble. Les vignobles, perchés sur les collines dominant la Loire, offrent un panorama spectaculaire et un terroir d'exception. Les sols de silex, calcaire et terre blanche confèrent au vin une complexité aromatique remarquable. Chaque gorgée révèle des notes vives d'agrumes, de buis, de groseille à maquereau et une minéralité crayeuse qui persiste en bouche. Ce 2022 est particulièrement réussi, avec un équilibre parfait entre vivacité et rondeur, fruit d'un millésime ensoleillé et d'un savoir-faire ancestral.",
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
    story: "Les Côtes de Provence incarnent l'art de vivre méditerranéen dans un verre. Ce rosé est né sous le soleil de Provence, entre mer et montagne, dans un terroir baigné de lumière et balayé par le mistral. L'assemblage subtil de Grenache, Cinsault et Syrah crée une robe d'un rose pâle lumineux, presque transparent. Le nez délicat dévoile des parfums de pêche blanche, de fraise des bois et de fleurs d'oranger. En bouche, la fraîcheur est saisissante, avec une finale saline qui rappelle la brise marine. Ce rosé est une invitation au voyage, un instant de pure délice provençal.",
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
    story: "Le Bandol Rosé est le roi des rosés, un vin de caractère qui transcende les conventions du genre. Issu principalement du cépage Mourvèdre, cultivé sur les terrasses calcaires face à la Méditerranée, ce rosé possède une profondeur et une complexité rares. Sa robe saumonée aux reflets cuivrés annonce un vin d'exception. Le nez est un bouquet de fruits rouges mûrs, d'épices douces et d'herbes de Provence. En bouche, la richesse du Mourvèdre s'exprime pleinement : c'est un vin structuré, vineux, avec des tanins fins et une longueur impressionnante. Un rosé gastronomique qui se bonifie avec le temps.",
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
    story: "Dom Pérignon est la quintessence du champagne, un vin qui porte le nom du moine bénédictin qui révolutionna l'art de l'assemblage au XVIIe siècle. Chaque millésime est une création unique, jamais produit dans les années jugées indignes de porter ce nom légendaire. Le 2013, né d'un millésime tardif et contrasté, surprend par sa fraîcheur vibrante et sa minéralité cristalline. Les bulles d'une finesse extrême portent des arômes de brioche dorée, d'agrumes confits, d'amande grillée et de craie. La bouche est à la fois puissante et aérienne, avec une tension qui semble défier la gravité. Un champagne qui transcende le temps.",
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
    story: "La Maison Veuve Clicquot, fondée en 1772, doit sa renommée mondiale à Madame Clicquot, la « Grande Dame de la Champagne », qui inventa le remuage et transforma l'art du champagne. Ce Brut Carte Jaune est l'héritier direct de cette vision audacieuse. L'assemblage de Pinot Noir, Chardonnay et Meunier, enrichi de vins de réserve vieillis en cave, crée un champagne d'une générosité et d'une constance remarquables. Les notes de fruits jaunes, de biscuit et de vanille s'entrelacent avec une effervescence vive et persistante. C'est le champagne de la célébration, celui qui sublime chaque instant.",
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
    story: "Saint-Émilion, classé au patrimoine mondial de l'UNESCO, est l'un des plus anciens terroirs viticoles du monde. Ce Grand Cru est le fruit d'un vignoble d'exception, planté sur un plateau calcaire et des pentes argileuses qui confèrent au Merlot une richesse et une volupté incomparables. L'élevage en fûts de chêne français, pendant 18 mois, apporte des notes de vanille, de cacao et de pain grillé qui se marient harmonieusement avec les arômes naturels de mûre, de truffe et de violette. La texture est veloutée, les tanins fondus, et la finale d'une longueur exceptionnelle. Un vin qui incarne la grandeur de Bordeaux.",
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
    story: "Le Pouilly-Fumé tire son nom évocateur de la brume matinale qui enveloppe les vignobles au bord de la Loire, et du caractère fumé que les sols de silex confèrent au Sauvignon Blanc. Ce terroir unique, sur la rive droite de la Loire, produit des vins d'une élégance et d'une finesse rares. Le nez est un voyage sensoriel : notes de pierre à fusil, d'agrumes, de buis et de fleurs blanches. En bouche, la minéralité est saisissante, presque électrique, portée par une acidité vive qui donne au vin une fraîcheur et une longueur remarquables. Un vin intellectuel et sensuel à la fois.",
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
    story: "Tavel est la seule appellation du Rhône exclusivement consacrée au rosé, et elle produit des vins qui ont fait la renommée des rosés français à travers le monde. Ce vin, issu d'un assemblage de Grenache, Cinsault et Clairette, possède une robe d'un rose soutenu aux reflets grenat. Le nez est intense et complexe : framboise, garrigue, thym et romarin. En bouche, c'est un rosé de gastronomie, avec une structure et une richesse qui rappellent davantage un rouge léger. La finale, longue et épicée, est une invitation à découvrir la cuisine méditerranéenne dans toute sa splendeur.",
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
    story: "Moët & Chandon, fondée en 1743, est la plus emblématique des maisons de champagne. L'Impérial, créé en hommage à l'amitié légendaire entre Claude Moët et Napoléon Bonaparte, est le champagne le plus célèbre au monde. Cet assemblage magistral de Pinot Noir, Chardonnay et Pinot Meunier, issu de plus de 100 crus différents, offre une palette aromatique d'une richesse exceptionnelle. Les notes de pomme verte, de pain grillé, de fleurs blanches et d'agrumes se succèdent avec élégance. L'effervescence est fine et persistante, la bouche fraîche et généreuse. Un champagne universel qui illumine chaque occasion.",
  },
];