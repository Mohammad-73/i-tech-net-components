import React from "react";
// Hero
import Hero from "../../components/Hero/Hero";
//HorizontalHintSection
import HorizontalHintSection from "../../components/HorizontalHintSection/HorizontalHintSection";
import { MdWaves } from "react-icons/md";
import { FaHeart, FaSun, FaLeaf } from "react-icons/fa";
//ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImg from "../../assets/SurfcampsFuerteventura/Tab-Element-Regionen/Surfcamp-Vieux-Boucau-Frankreich.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
const SurfcampFuerteventura = () => {
  return (
    <div>
      {" "}
      <Hero
        image="bg-surfcamps-frankreich"
        title="Surfcamps in Frankreich"
        description="Erlebe Sonne, Wellen und gute Laune"
      />
      <HorizontalHintSection
        bgColor=""
        items={[
          {
            icon: <MdWaves size={56} />,
            title: "Perfekte Wellen",
            description:
              "Von sanften Beachbreaks bis hin zu steilen Riffwellen - Fuerteventura bietet die passenden Wellen für alle Surflevel!",
          },
          {
            icon: <FaSun size={56} />,
            title: "Sommerliches Wetter",
            description:
              "Die Insel des ewigen Frühlings - mit durchschnittlich 23 Grad erwarten dich das ganze Jahr über Sonne und Sommergefühle!",
          },
          {
            icon: <FaLeaf size={56} />,
            title: "Einzigartige Landschaft",
            description:
              "Eine Landschaft wie auf dem Mond und über 100 kilometer weißer Sandstrand mit türkisem Wasser - eine faszinierende Kombination!",
          },
          {
            icon: <FaHeart size={56} />,
            title: "Entspannte Atmosphäre",
            description:
              "Erstmal entspannen und das Leben genießen - dieses Lebensmotto der Kanaren überträgt sich sofort auf dich und deinen Urlaub!",
          },
        ]}
      />
      <ListAndImage
        mainTitle="Die beliebtesten Orte für einen Surfurlaub auf Fuerteventura"
        mainDescription="Einsame Strände, die du nur über Schotterpisten erreichst - das erwartet dich entlang der Westküste Fuerteventuras. Als Basis für dein Surfcamp bietet sich hier der kleine und noch ursprüngliche Ort El Cotillo an. Die Alternative zu El Cotillo ist Corralejo im Norden Fuerteventuras. Corralejo ist der beliebteste Ort für einen Surfurlaub. Hier ist deutlich mehr los und die Nordküste ist bekannt für ihre weltklasse Surfspots."
        image={ListAndImg}
        title="Corralejo"
        description="Eine Altstadt mit verwinkelten Gassen, traumhafte weiße Sandstrände und ein Naturpark mit einer einzigartigen Dünenlandschaft - Corralejo bietet dir die perfekte Mischung aus Ruhe und Action: Hier hast du immer die Wahl, ob du am Strand entspannen oder in einer der vielen Tapas-Bars das kanarische Leben genießen willst. Die Auswahl an Surfspots rund um Corralejo ist riesig. Der Großteil der Surfspots eignet sich dabei insbesondere für fortgeschrittene Surfer:innen. Doch auch für die ersten Versuche auf dem Surfbrett findest du dank der Ortskenntnis der Surflehrer:innen immer eine passende Welle."
      />
      <SingleCardSection
        title="Top-Surfcamps in Corralejo"
        items={[1, 2]}
        cols="lg:grid-cols-3"
      />
    </div>
  );
};

export default SurfcampFuerteventura;
