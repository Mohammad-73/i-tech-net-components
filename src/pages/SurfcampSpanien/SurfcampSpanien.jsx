import React from "react";
//Hero
import Hero from "../../components/Hero/Hero";
//HintSection
import HintSection from "../../components/HintSection/HintSection";
import { BiLike, BiStar, BiHeart } from "react-icons/bi";
//Description
import Description from "../../components/Description/Description";
import Kantabrien from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Kantabrien-Spanien.jpg";
import Baskenland from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Baskenland-Spanien.jpg";
import Andalusien from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Andalusien-Spanien.jpg";
import Fuerteventura from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Fuerteventura.jpg";
import Teneriffa from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Teneriffa.jpg";
import Gran from "../../assets/spanien/Regionen-Tab-Element/Surfcamps-Gran-Canaria.jpg";
import cardImage from "../../assets/images/cardImage.jpg";
// ImageGalleryFivePic
import ImageGalleryFivePic from "../../components/ImageGalleryFivePic/ImageGalleryFivePic";
import image1 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Alleinreisende.jpg";
import image2 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Gruppen-Freunde.jpg";
import image3 from "../../assets/spanien/Zielgruppe/Familien-Surfurlaub-Spanien.jpg";
import image4 from "../../assets/spanien/Zielgruppe/Surfcamps-Spanien-Paare.jpg";
import image5 from "../../assets/spanien/Zielgruppe/Junior-Surfcamps-Spanien.jpg";
// ListAndImage
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import ListAndImage1 from "../../assets/spanien/Vorteile-Divider/Surfcamps-Spanien-Besonderheiten.jpg";
import ListAndImage2 from "../../assets/spanien/Unterkungt-RL/Surfcamps-Spanien_Surfhaeuser-Lodges.jpg";
import ListAndImage3 from "../../assets/spanien/Unterkungt-RL/Surfcamps-Spanien_Campingplatz.jpg";
import ListAndImage4 from "../../assets/spanien/Unterkungt-RL/Surfurlaub-Spanien_private-apartments.jpg";
//SingleCardSection
import SingleCardSection from "../../components/SingleCardSection/SingleCardSection";
// ColorDivider
import ColorDivider from "../../components/ColorDivider/ColorDivider";
//SingleColImg
import SingleColImg from "../../components/SingleColImg/SingleColImg";
import Col31 from "../../assets/spanien/Vorkenntnisse/Surfcamps-Spanien-Anfaenger.jpg";
import Col32 from "../../assets/spanien/Vorkenntnisse/Surfcamps-Spanien-Intermediates.jpg";
import Col33 from "../../assets/spanien/Vorkenntnisse/Surfari-Surf-Guiding-Spanien.jpg";
//ImageGallery3
import ImageGallery3 from "../../components/ImageGallery3/ImageGallery3";
import imgGallery1 from "../../assets/spanien/Kategorien-6er/Surfcamps-Spanien-Natur.jpg";
import imgGallery2 from "../../assets/spanien/Kategorien-6er/Nachhaltiges-Surfcamp-Spanien.jpg";
import imgGallery3 from "../../assets/spanien/Kategorien-6er/Low-Budget_Surfcamps-Spanien.jpg";
import imgGallery4 from "../../assets/spanien/Kategorien-6er/Surfcamps-Spanien_flexible-Stornierung.jpg";
import imgGallery5 from "../../assets/spanien/Kategorien-6er/Surf-Skate-Camp-Spanien.jpg";
import imgGallery6 from "../../assets/spanien/Kategorien-6er/Surf-Yoga-Camps-Spanien.jpg";
//DividerImg
import DividerImg from "../../components/DividerImg/DividerImg";
import Besonderheiten from "../../assets/spanien/Kunden-Divider/surfcamp-spanin-bewertung.png";
//RateCardSection
import RateCardSection from "../../components/RateCardSection/RateCardSection";
import RateImg from "../../assets/images/g1.jpg";
//ContactUsSection
import ContactUsSection from "../../components/ContactUsSection/ContactUsSection";
import Contact from "../../assets/images/contact.jpg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
//TagSection
import TagSection from "../../components/TagSection/TagSection";

const SurfcampSpanien = () => {
  return (
    <div>
      <Hero
        image="bg-hero-spanien"
        title="Surfcamps in Spanien"
        description="Erlebe‌ ‌Sonne,‌ ‌Wellen‌ ‌&‌ ‌spanische‌ ‌Lebensfreude"
      />
      <HintSection
        items={[
          {
            icon: <BiLike size={38} />,
            title: "100% Rückerstattung",
            description:
              "Transparent und stressfrei! Erhalte mit unseren flexiblen Stornierungsbedingungen den vollen Betrag zurückerstattet.",
            readMore: "Zu den Details",
          },
          {
            icon: <BiStar size={38} />,
            title: "Qualitätsgeprüfte Reisen",
            description:
              "Alle Reisen sind von Sportexperten ausgewählt und von unabhängigen Kunden mit mindestens 4,5 von 5 Sternen bewertet!",
            readMore: "Zu den Details",
          },
          {
            icon: <BiHeart size={38} />,
            title: "Persönliche Beratung",
            description:
              "Wir lieben, was wir tun und sind immer an deiner Seite! Kontaktiere uns einfach per Email, Telefon oder WhatsApp.",
            readMore: "Zu den Details",
          },
        ]}
      />
      <Description
        titel="Die schönsten Surforte in Spanien"
        tabItems={[
          "Kantabrien",
          "Baskenland",
          "Andalusien",
          "Fuerteventura",
          "Teneriffa",
          "Gran Canaria",
        ]}
        tabCols="lg:grid-cols-6"
        tabContents={[
          {
            detailsImage: Kantabrien,
            detailsTitle: "Kantabrien",
            detailsDesc:
              "Die Region Kantabrien im Norden Spaniens erwartet dich mit einer einzigartigen Landschaft voll von grünen Hügeln mit glücklichen Milchkühen und Bergen im Hintergrund. Gepaart mit einer Vielzahl an schönen Buchten und Wellen für jedes Surflevel ist Kantabrien die perfekte Wahl für einen Surfurlaub in der Natur! Anders als andere Regionen in Spanien ist Kantabrien vom Massentourismus verschont geblieben. Die Auswahl für deinen Surfurlaub entlang der Atlantikküste ist dabei groß: Sei es der kilometerlange Sandstrand von Loredo bis Somo, das kleine Fischerdorf Suances oder der Naturpark Oyambre mit seinen tollen Buchten und Steilklippen.",
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Kantabrien",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp im Nationalpark in Kantabrien",
                location: "Ruilobuca, Spanien",
                calender: "28.05. - 17.09.2022",
                rateDesc: "",
                price: "349 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title:
                  "Surfhaus in Nordspanien: Surfen, Party & perfekte Vibes",
                location: "Somo, Spanien",
                calender: "04.04. - 14.11.2022",
                rateDesc: "",
                price: "189 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfcamp im Naturpark Oyambre",
                location: "Oyambre, Spanien",
                calender: "10.06. - 25.09.2022",
                rateDesc: "",
                price: "334 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Moderne Surf Lodge am Traumstrand von Loredo",
                location: "Loredo, Spanien",
                calender: "04.04. - 14.11.2022",
                rateDesc: "",
                price: "189 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Baskenland,
            detailsTitle: "Baskenland",
            detailsDesc:
              "Pulsierende Städte und beruhigende Natur - das Baskenland wartet mit einer unglaublichen Vielfalt und so einigen Überraschungen auf dich! Wälder, Berge und steile Küsten - selbst im Hochsommer erwarten dich im Baskenland sattgrüne Landschaften anstelle von ausgetrockneten Feldern. Entlang der Küste entdeckst du immer wieder versteckte Buchten und einsame Surfspots. Hinzu kommt mit Mundaka die berühmteste linke Welle Europas. Wenn du zudem auf der Suche nach Kultur und einem belebten Nachtleben bist, hast du mit Bilbao und San Sebastian gleich zwei Städte, die definitiv einen Besuch wert sind. Hier kannst du dich treiben lassen und wünschst dir schnell, dass die Zeit stehen bleibt.",
            detailsReadMore: "",
            cardTitle: "Top-Surfcamp im Baskenland",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surf & Skate Hostel mit baskischem Flair",
                location: "Urduliz, Spanien",
                calender: "09.06. - 29.10.2022",
                rateDesc: "",
                price: "234 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Andalusien,
            detailsTitle: "Andalusien",
            detailsDesc:
              "Ein niemals endender Sommer und eine Atmosphäre, die dich sofort in seinen Bann zieht: In Andalusien geht alles entspannter zu und die Lebensfreude der Menschen ist förmlich spürbar. Die Uhren ticken hier langsamer und du bist nach deinem Surfurlaub garantiert gelassener. Die besten Orte zum Wellenreiten in Andalusien sind Conil de la Frontera und El Palmar. Hier erwarten dich neben dieser einzigartigen Atmosphäre lange Sandstrände mit perfekten Wellen für beginnende und fortgeschrittene Surfer:innen. Abgerundet wird das Bild von den vielen weißen Häuschen, die typisch für Andalusien sind.",
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps in Andalusien",
            cardItems: [
              {
                cardImage: cardImage,
                title:
                  "Surf-Finca mit Pool, Sauna & großem Garten in Andalusien",
                location: "Conil De La Frontera, Spanien",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "380 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Longboard-Surfen und Yoga-Retreat am Strand",
                location: "El Plamar, Spaniens",
                calender: "18.12. - 25.12.2021",
                rateDesc: "",
                price: "1200 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfcamp in der wärmsten Region Europas",
                location: "El Palmar, Spanien",
                calender: "13.09.2021 - 29.05.2022",
                rateDesc: "",
                price: "798 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus mit Apartments im Süden Spaniens",
                location: "Conil De La Frontera, Spanien",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "250 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Fuerteventura,
            detailsTitle: "Fuerteventura",
            detailsDesc:
              "Fuerteventura ist die zweitgrößte Insel der Kanaren und gilt aufgrund der weißen Strände und Vielzahl an Surfspots als das Hawaii Europas. Vom totalen Beginner bis hin zum Profi findet hier jeder die perfekte Welle! Das Leben auf Fuerteventura geht deutlich gelassener zu als sonst wo auf der Welt. Sofort mit deiner Landung kommt dir die warme Luft entgegen und du tauchst ein in eine faszinierende Wüstenlandschaft, die dich sofort einen Gang zurückschalten lässt. Ab jetzt zählt nur noch Surfen, Entspannen und gute Laune - die perfekten Voraussetzungen für einen unvergesslichen Surfurlaub!",
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps auf Fuerteventura",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp mit Pool am Strand von Fuerteventura",
                location: "Corralejo, Fuerteventura",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "269 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title:
                  "Surfen in der Sonne: Gemütliche Surfvilla in El Cotillo",
                location: "El Cotillo, Fuerteventura",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "440 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfcamp in Corralejo: Chillen, Surfen & neue Leute",
                location: "Corralejo, Fuerteventura",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "349 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title:
                  "Familiäre Surfvilla in El Cotillo: Surfen & Yoga im Paradies",
                location: "El Cotillo, Fuerteventura",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "560 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Teneriffa,
            detailsTitle: "Teneriffa",
            detailsDesc:
              "Teneriffa ist die größte der Kanarischen Inseln vor der Westküste Afrikas und wird von dem Vulkan Teide dominiert. Der größte Berg Spaniens prägt dabei nicht nur das Landschaftsbild der Insel, sondern bietet auch Windschutz für die verschiedenen Surfspots. Dadurch bietet sich Teneriffa insbesondere für Beginner und Intermediates an, da die Wellen hier meist cleaner und kleiner sind als auf den anderen Inseln. Anders als auf Fuerteventura erwartet dich auf Teneriffa grüne und vielfältige Natur. Auch die zahlreichen Strände könnten unterschiedlicher nicht sein: Von goldenen Sandstränden bis hin zu felsigen Buchten mit schwarzem Sand ist für jeden das passende mit dabei. Je nachdem, was du dir für dein Surfcamp wünschst: Von Ruhe und Natur bis hin zu Action und Party ist auf Teneriffa alles möglich!",
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps auf Teneriffa",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfcamp mit entspannter Atmosphäre",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "370 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus im ursprünglichen Küstenort El Poris ",
                location: "El Poris, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "280 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus auf Teneriffa: Natur, Leidenschaft & Spaß",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "379 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Modernes Surf & Yoga Haus mit Dachterrasse",
                location: "Adeje, Teneriffa",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "415 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
          {
            detailsImage: Gran,
            detailsTitle: "Gran Canaria",
            detailsDesc:
              "Willst du die Atmosphäre einer pulsierenden Stadt genießen und gleichzeitig mit deinem Surfbrett unter dem Arm zum Surfspot laufen? Dann ist Las Palmas auf Gran Canaria genau die richtige Wahl für deinen Surfurlaub in Spanien! Las Palmas ist mit über 350.000 Einwohnern die größte Stadt der Kanarischen Inseln und erwartet dich mit dem typisch spanischen Lebensgefühl: Überall sitzen die Menschen draußen, lachen zusammen, trinken Wein, essen Tapas und genießen ihr Leben. In Verbindung mit den langen Sandstränden und konstanten Wellen die perfekten Voraussetzungen für einen Surfurlaub in der Stadt!",
            detailsReadMore: "",
            cardTitle: "Top-Surfcamps auf Gran Canaria",
            cardItems: [
              {
                cardImage: cardImage,
                title: "Surfurlaub in direkter Strandlage in Las Palmas",
                location: "Las Palmas, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "500 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfen & Yoga: Erlebe die Magie von Las Palmas",
                location: "Las Palmas, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "382 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Buntes Surfhostel mit Charme auf Gran Canaria",
                location: "San Felipe, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "335 €",
                priceTitle: "für 8 Tage",
                info: "info",
                ab: "Ab",
              },
              {
                cardImage: cardImage,
                title: "Surfhaus mit Dachterrasse am Strand von Las Palmas",
                location: "Las Palmas, Gran Canaria",
                calender: "Ganzjährig geöffnet",
                rateDesc: "",
                price: "381 €",
                priceTitle: "für 7 Tage",
                info: "info",
                ab: "Ab",
              },
            ],
            cardCols: "lg:grid-cols-4",
          },
        ]}
      />
      <ImageGalleryFivePic
        title="Finde das Surfcamp, das zu dir passt!"
        description="Die Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die pDie Grundvoraussetzung für einen unvergesslichen Surfurlaub ist die passende Atmosphäre! Mit der richtigen Stimmung um dich herum fühlst du dich sofort wohl, triffst ganz natürlich auf Gleichgesinnte und kannst deinen Urlaub in vollen Zügen genießen."
        image1={{ img: image1, title: "Surfcamps für Alleinreisende" }}
        image2={{ img: image2, title: "Surfcamps für Freund:innen" }}
        image3={{ img: image3, title: "Surfurlaub für Familien" }}
        image4={{ img: image4, title: "Surf-Reisen für Paare" }}
        image5={{ img: image5, title: "Junior Surfcamps für unter 18 Jährige" }}
      />
      <ListAndImage
        image={ListAndImage1}
        title="Ein Surfcamp in Spanien passt zu dir, wenn du…"
        items={[
          "...vielfältige und wunderschöne Strände und Landschaften entdecken willst",
          "...den nie endenden Sommer in Andalusien und den Kanaren genießen willst",
          "...garantiert alles um dich herum vergessen und auf andere Gedanken kommen willst",
          "...spanische Gelassenheit und ein einzigartiges Lebensgefühl erleben willst",
        ]}
      />
      <ListAndImage
        mainTitle="Entdecke die Traumunterkunft für deinen Surfurlaub"
        mainDescription="Entdecke die Traumunterkunft für deinen Surfurlaub"
        image={ListAndImage2}
        title="Surfhäuser & Lodges"
        description="Unsere handverlesenen Surfhäuser & Lodges in Spanien sind individuell gestaltet und mit viel Liebe zum Detail eingerichtet. Mit einer begrenzten Anzahl an Zimmern bleibt die Atmosphäre immer persönlich und du triffst schnell auf Gleichgesinnte. Die großen Outdoor Bereiche laden zum Entspannen in der Sonne und gemeinsamen Stunden am Abend ein. Die perfekte Mischung aus Komfort und Spaß unter Gleichgesinnten!"
        readMore="Entdecke Surfhäuser & Lodges in Spanien"
      />
      <ListAndImage
        imgAlign="right"
        image={ListAndImage3}
        title="Surfcamps auf Campingplätzen"
        description="Insbesondere der Norden Spaniens mit seiner vielfältigen Natur und den traumhaften Landschaften bietet sich für einen Campingurlaub an: Du tauchst sofort mit deiner Ankunft in eine eigene Welt ab, beobachtest abends beim Lagerfeuer die Sterne und läufst morgens barfuß mit deinem Surfbrett zum Strand. Kurz gesagt: Ein Low Budget Surfurlaub inmitten der Natur, den du nie wieder vergessen wirst!"
        readMore="Zu allen Surfcamps auf Campingplätzen"
      />
      <ListAndImage
        image={ListAndImage4}
        title="Surfurlaub in privaten Apartments"
        description="Sehnst du dich nach Quality-Time mit deinen Liebsten? Bei einem Surfurlaub in privaten Apartments erwartet euch gemeinsamer Spaß in den Wellen und ganz viel Zeit, die ihr individuell nach euren Wünschen gestalten könnt: Seien es Ausflüge in die Region, entspannte Stunden am Strand oder ein Restaurantbesuch am Abend - euer Alltag ist schnell vergessen und die Welt steht euch offen!"
        readMore="Zu allen Surfurlauben in privaten Apartments"
      />
      <SingleCardSection
        title="Die beliebtesten Surfcamps in Spanien"
        description="Von Nordspanien über Andalusien bis hin zu den Kanarischen Inseln - entdecke die am besten bewerteten Surfcamps in Spanien."
        items={[
          {
            cardImage: cardImage,
            title: "Surfurlaub in direkter Strandlage in Las Palmas",
            location: "Las Palmas, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "500 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp in der wärmsten Region Europas",
            location: "El Palmar, Spanien",
            calender: "13.09.2021 - 29.05.2022",
            rateDesc: "",
            price: "798 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp in Corralejo: Chillen, Surfen & neue Leute",
            location: "Corralejo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "349 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfhaus auf Teneriffa: Natur, Leidenschaft & Spaß",
            location: "Adeje, Teneriffa",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "379 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surf-Hostel in Andalusien: Sonne und entspannte Vibes",
            location: "Conil De La Frontera, Spanien",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "220 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Dein Surferlebnis zwischen Klippen und Vulkanen",
            location: "Caleta de Famara, Lanzarote",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "170 €",
            priceTitle: "für 4 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfen in der Sonne: Gemütliche Surfvilla in El Cotillo",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "440 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfhaus in Kantabrien: Ruhe, Natur & Wellen",
            location: "Loredo, Spanien",
            calender: "03.04. - 15.11.2022",
            rateDesc: "",
            price: "150 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Buntes Surfhostel mit Charme auf Gran Canaria",
            location: "San Felipe, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "335 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp mit entspannter Atmosphäre",
            location: "Adeje, Teneriffa",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "370 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfcamp im Nationalpark in Kantabrien",
            location: "Ruilobuca, Spanien",
            calender: "28.05. - 17.09.2022",
            rateDesc: "",
            price: "349 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Longboard-Surfen und Yoga-Retreat am Strand",
            location: "El Plamar, Spanien",
            calender: "18.12. - 25.12.2021",
            rateDesc: "",
            price: "1200 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surf-Abenteuer im idyllischen Norden Lanzarotes",
            location: "Caleta de Famara, Lanzarote",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "354 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title:
              "Familiäre Surfvilla in El Cotillo: Surfen & Yoga im Paradies",
            location: "El Cotillo, Fuerteventura",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "560 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfhaus in Nordspanien: Surfen, Party & perfekte Vibes",
            location: "Somo, Spanien",
            calender: "04.04. - 14.11.2022",
            rateDesc: "",
            price: "189 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfhaus mit Dachterrasse am Strand von Las Palmas",
            location: "Las Palmas, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "381 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surf & Skate Hostel mit baskischem Flair",
            location: "Urduliz, Spanien",
            calender: "09.06. - 29.10.2022",
            rateDesc: "",
            price: "234 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Moderne Surf Lodge am Traumstrand von Loredo",
            location: "Loredo, Spanien",
            calender: "04.04. - 14.11.2022",
            rateDesc: "",
            price: "189 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surf & Yoga Urlaub am einsamen Strand",
            location: "El Poris, Teneriffa",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "390 €",
            priceTitle: "für 8 Tage",
            info: "info",
            ab: "Ab",
          },
          {
            cardImage: cardImage,
            title: "Surfen & Yoga: Erlebe die Magie von Las Palmas",
            location: "Las Palmas, Gran Canaria",
            calender: "Ganzjährig geöffnet",
            rateDesc: "",
            price: "382 €",
            priceTitle: "für 7 Tage",
            info: "info",
            ab: "Ab",
          },
        ]}
        cols="lg:grid-cols-4"
      />
      <ColorDivider
        title="Urlaub buchen ohne Risiko"
        description="Wir bieten dir flexible Stornierungsbedingungen mit 100% Rückerstattung!"
        buttonTitle="Mehr erfahren"
      />
      <SingleColImg
        title="Passende Surfcamps für dein Surflevel"
        description="Jeder kann Surfen lernen! Finde mit unserer Auswahl ganz einfach das passende Surfcamp für dein Surflevel."
        items={[
          {
            img: Col31,
            title: "Surfcamps für Anfänger:innen",
            description:
              "Surfe die ersten Wellen deines Lebens und erlebe ein unbeschreibliches Gefühl!",
          },
          {
            img: Col32,
            title: "Surfcamps für Fortgeschrittene",
            description:
              "Hast du deine ersten Surfkurse bereits hinter dir? Dann erreiche jetzt das nächste Level!",
          },
          {
            img: Col33,
            title: "Surfaris für Profis",
            description:
              "Lass dich von lokalen Guides zu den besten Spots bringen und finde deine perfekte Welle!",
          },
        ]}
        cols="md:grid-cols-3"
      />
      <ImageGallery3
        title="Ausgewählte Kategorien für deinen Surfurlaub"
        items={[
          {
            img: imgGallery1,
            shadow: "80",
            title: "Surfcamps in der Natur",
          },
          {
            img: imgGallery2,
            shadow: "80",
            title: "Ökologisches Surfcamp",
          },
          {
            img: imgGallery3,
            shadow: "80",
            title: "Low Budget Surfcamps",
          },
          {
            img: imgGallery4,
            shadow: "80",
            title: "Reisen mit 100% Rückerstattung",
          },
          {
            img: imgGallery5,
            shadow: "80",
            title: "Surf & Skate Camp",
          },
          {
            img: imgGallery6,
            shadow: "80",
            title: "Surf & Yoga Camps",
          },
        ]}
      />
      <DividerImg
        align="left"
        title="Gemeinsam für den Klimaschutz"
        description="Für jede Buchung im Dezember spenden wir 20 € an Ocean Patrol in Portugal!"
        image={Besonderheiten}
        dark={true}
        buttonTitle="Mehr erfahren"
      />
      <RateCardSection
        title="Das sagen Reisende über ihren Surfurlaub in Spanien"
        items={[
          {
            rateName: "Chloe",
            rateDesc: "Kleine Gruppe, gutes Essen, schöne Aussicht!",
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote:
              "Surfcamp in Nordspanien: Surfen im Naturpark Oyambre bewertet von",
          },
          {
            rateName: "Yves",
            rateDesc: "Einer der besten Urlaube die ich erleben durfte",
            rateImage: RateImg,
            rateCalendar: "08.12.2021",
            rateFootNote:
              "Surfcamp in Corralejo: Chillen, Surfen & neue Leute bewertet von",
          },
          {
            rateName: "Fabi",
            rateDesc:
              "Sehr sauber, tolle Atmosphäre, super Lage direkt am Strand, mega Blick aufs Meer von der Dachterasse und nette Gäste :)",
            rateImage: RateImg,
            rateCalendar: "22.08.2021",
            rateFootNote:
              "Modernes Surfhaus direkt am Strand von Las Palmas bewertet von",
          },
          {
            rateName: "Christina",
            rateDesc:
              "War ein tolles Erlebnis, und ich durfte sehr viele tolle Menschen kennenlernen!!",
            rateImage: RateImg,
            rateCalendar: "06.12.2021",
            rateFootNote:
              "Surfcamp in Corralejo: Chillen, Surfen & neue Leute bewertet von",
          },
          {
            rateName: "Ella",
            rateDesc:
              "Ich habe ein super Sommer Urlaub mit Volcano surfcamp gemacht! Unser Surftrainer Umberto ist einfach die besten! Die Unterkunft ist auch mega schön, man kann so einfach andere coole Leuten aus der Welt kennenlernen und jeden Tag etwas zusammen unternehmen. I‘ll come back there again for sure :D",
            rateImage: RateImg,
            rateCalendar: "27.08.2021",
            rateFootNote:
              "Gemeinschaftliches Surfhaus im Süden Teneriffas bewertet von",
          },
          {
            rateName: "Alexander",
            rateDesc:
              "Perfect waves for Beginner / Intermediates and a nice Hostel as well as a nice Service from moverii. Just pay attention: there are two (or three) latas hostels and we did not stay in the main one so we always had to walk there (15min). However, it has still been very good but I would recommend to stay in the main Hostel.",
            rateImage: RateImg,
            rateCalendar: "17.08.2021",
            rateFootNote:
              "Surfhaus in Kantabrien: Ruhe, Natur & perfekte Wellen bewertet von",
          },
        ]}
        rateCols="xl:grid-cols-3"
      />
      <ContactUsSection
        title="Hast du Fragen oder Wünsche?"
        descritpion="Wir lieben was wir tun und sind stets an deiner Seite! Schreib uns einfach eine Nachricht und wir melden uns in wenigen Stunden persönlich bei dir:"
        formInputs={[
          { type: "text", placeholder: "Your name*" },
          { type: "text", placeholder: "Email Address*" },
        ]}
        formTextarea="Deine Nachricht*"
        formButton="Nachricht abschicken"
        cardImageSrc={Contact}
        cardTitle="Wir sind rund um die Uhr für dich da!"
        cardDesc="Kontaktiere uns ganz einfach per Telefon, E-Mail oder WhatsApp:"
        cardItems={[
          {
            title: "Phone",
            address: "+49 (0)228 7638 2040",
            icon: <MdOutlineLocalPhone />,
          },
          {
            title: "Email",
            address: "team@moverii.de",
            icon: <HiOutlineMail />,
          },
          {
            title: "Whatsapp",
            address: "+49 (0)163 3122 260",
            icon: <BsWhatsapp />,
          },
        ]}
      />
      <TagSection
        title="Mehr Inspiration für dein Surfurlaub"
        cols="xl:grid-cols-3"
        items={[
          {
            title: "Top-Reiseziele",
            items: [
              "Surfcamps in Portugal",
              "Surfcamps auf Fuerteventura",
              "Surfcamps in Frankreich",
              "Surfcamps auf Teneriffa",
            ],
          },
          {
            title: "Beliebte Kategorien",
            items: [
              "Surfcamps für Alleinreisende",
              "Surfcamps in der Natur",
              "Surfcamps für Freund:innen",
              "Surf & Yoga Reisen",
            ],
          },
          {
            title: "Unser Reisemagazin",
            items: [
              "Surfen auf den Kanaren",
              "Gemeinsam für den Meeresschutz",
              "Reisebericht: Surf & Yoga Camp in Portugal",
              "Reisebericht: Mein erstes Surfcamp",
            ],
          },
        ]}
      />
    </div>
  );
};

export default SurfcampSpanien;
