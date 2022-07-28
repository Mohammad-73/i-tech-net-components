import React from "react";
import RateCard from "../RateCard/RateCard";
import G1 from "../../assets/images/g1.jpg";

const RateCardSection = () => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div>
          <h1 className="text-[#2B2D42] text-[1.56rem] py-3">
            Das sagen Reisende über ihren Surfurlaub in Europa
          </h1>
        </div>
        <div class=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
          <RateCard
            name="Febi"
            description="Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)"
            image={G1}
            calendar="22.08.2021"
            footNote="Modernes Surfhaus direkt am Strand von Las Palmas bewertet von"
          />
          <RateCard
            name="Yves"
            description="Einer der besten Urlaube die ich erleben durfte"
            image={G1}
            calendar=" 08.12.2021"
            footNote="Surfcamp in Corralejo: Chillen, Surfen & neue Leute bewertet von Yves,"
          />
          <RateCard
            name="Pia"
            description="Wenn ihr nach Portugal reist und Surfen lernen wollt, seid ihr im Estela Surf Hostel bestens aufgehoben. Die Hosts Marco und Rachel sind super herzlich und gastfreundlich. Betonen möchte ich auch die Sauberkeit der Unterkunft. Wir haben noch nie so ein sauberes Hostel gesehen. Wir freuen uns schon auf den nächsten Besuch!:)"
            image={G1}
            calendar=" 28.09.2021"
            footNote="Familiäres Surfhaus im unberührten Norden Portugals bewertet von "
          />
          <RateCard
            name="Paula"
            description="Ich werd diese Woche nie vergessen und kann das Surfcamp nur weiterempfehlen! Ihr werdet eine unvergesslich geile Zeit haben. Alle Leute sind super chillig drauf, die Partys sind nice, das Surfen ist der Hammer und das Essen super lecker. Was will man mehr?"
            image={G1}
            calendar="09.09.2021"
            footNote="Surfcamp in Westfrankreich: Surfen weit weg vom Trubel bewertet von "
          />
          <RateCard
            name="Ella"
            description="Ich habe ein super Sommer Urlaub mit Volcano surfcamp gemacht! Unser Surftrainer Umberto ist einfach die besten! Die Unterkunft ist auch mega schön, man kann so einfach andere coole Leuten aus der Welt kennenlernen und jeden Tag etwas zusammen unternehmen. I‘ll come back there again for sure :D"
            image={G1}
            calendar="27.08.2021"
            footNote="Gemeinschaftliches Surfhaus im Süden Teneriffas bewertet von Ella"
          />
          <RateCard
            name="Melina"
            description="Einfach klasse! Daniel von moverii hat mir super bei der kurzfristigen Reiseplanung weitergeholfen. Das Hostel lag direkt am Strand, das Team dort war super nett und hilfsbereit und die surfstunden haben auch Spaß gemacht. Sehr verdiente 5 Sterne!"
            image={G1}
            calendar="19.08.2021"
            footNote="Surfhaus mit Dachterrasse direkt am Surfspot in Ericeira bewertet von"
          />
        </div>
      </div>
    </div>
  );
};

export default RateCardSection;
