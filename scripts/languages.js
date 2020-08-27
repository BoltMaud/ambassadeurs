
// langues
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.dropdown-trigger');
var instances = M.Dropdown.init(elems, {"constrainWidth":true, "alignment":"left"});
});

i18next.init({
    lng: 'EN',
    resources: {
      EN: {
        translation: {
          title : "My Ile-de-France Map",
          AccueilofNav: "Home",
          TutorielofNav: "Tutorial",
          MymapofNav :"MY MAP",
          MyplacesofNav : "MY PLACES",
          DiscoverOfNav:"Discover other maps",
          shortDescription:"Create your own personalised map of Ile-de-France, take the time to rediscover your region",
          buttonExample : "See example",
          subtitle1 : "Summary",
          text1 : "is an online tool that allows you to record your points of interest in the region and the information associated with them. Once the map is created, a system of filters allows you to easily view your addresses.",
          subtitle2 : "How does it work?",
          text2 : "Find a detailed step-by-step tutorial, accessible to young and old alike, to create your personalised map of Ile de France.",
          subtitle3 : "Your maps!",
          text3 : "Send us your map files with your first name by email to see your map appear on the site. Thus, let us enrich together the good addresses of the Ile de France region!",
            page2Title : "5 steps to make my map",
            page2comment : "We publish the maps you send us",
            page2titre1 : "What you need to know before making your map",
            page2titre2 : "Create an empty map",
            page2titre3 : "Add places",
            page2titre4 : "Visualize and Filter",
            page2titre5 : "Save and reload",
           page2text1a : "To position points on a map, we use geographical coordinates which are",
           page2text1b : " and",
           Majlatitude : "Latitude",
           latitude : "latitude",
           page2text1d :"gives us whether a point is to the WEST or EAST of the globe in relation to the Greenwich meridian. This landmark, located in England, defines the longitude 0°. Points to the EAST have a longitude between 0° and 180° while to the WEST, the longitude is negative up to -180°.",
           page2text1e : "tells us whether a point is NORTH or SOUTH of the equator. The equator defines the latitude 0°. The latitude is between 0° and 180° for the NORTH and goes down to -180° for the SOUTH.",
           page2textexample : "Example:",
           longitude : "longitude",
           Majlongitude : "Longitude",
           page2text2 : "Lisbon is located WEST of the Greenwich Meridian. Its longitude is then less than 0°. Indeed, the longitude of Lisbon is -9.13°. Lisbon is well NORTH of the equator. Its latitude is then greater than 0°. Indeed, the longitude of Lisbon is 38.70°.",
        page2text3a : "When you click on ",
        page2text3b : "a set of dots is displayed. This is the ",
        page2text3c : "Laboratoires d'île de France",
        page2text3d : "This map is an example.",
          page2text3e : "To start your map, go to the tab ",
          page2text3f : "click on the trash can",
          page2text3g : "to delete existing points and start your map!",
          page2text4a : "Three elements are essential to add points to your map: a",
          page2text4b : "unique name",
          page2text4c : "However, you have the possibility to add additional information using the button",
          page2text4d : "How to find the coordinates of the places?",
          page2text4e : "Many sites give the geographical coordinates from  the address. You can use for example :",
          page2text5a : "Once you have created a certain number of addresses, you can view your map by clicking directly on tab",
          page2text5b : "You can filter the results according to the columns you have filled!",
            page2text6a : "Please note that we do not store any data that you enter. To keep your data, you must ",
            page2text6b : "click on",
            page2text6c: "A file is created.",
            page2text6d : "To load previous works, click on",
            page2text6e : "and select your file",
            page2text6f : "save your map",
            page2text6g : "Well done! You enrich our region by creating maps of good addresses!",
            page2text6h : "If you would like your map to be available on this website, please send it to "

        }
       },
       FR: {
          translation: {
           title : "Ma Carte d'Ile-de-France",
           AccueilofNav: "Accueil",
           TutorielofNav: "Tutoriel",
           MymapofNav : "MA CARTE",
           MyplacesofNav : "MES LIEUX",
           DiscoverOfNav:"Découvrir des cartes",
           shortDescription:"Créer sa carte personnalisée d'île-de-France, prendre le temps de redécouvrir sa région",
           buttonExample: "Voir l'exemple",
           subtitle1 : "Présentation",
           text1 : " est un outil en ligne vous permettant d'enregistrer vos points d'intérêt dans la région et les informations associées à ces points. Une fois la carte créée, un système de filtres vous permet de visualiser aisément vos adresses.",
           subtitle2: "Comment ça marche ?",
           text2 : "Trouvez un tutoriel détaillé étape par étape, accessible aux plus jeunes comme aux anciens, pour créer votre carte personnalisée d'île de France.",
           subtitle3:"Vos cartes !",
           text3 : "Envoyez-nous vos fichiers de carte avec votre prénom par email afin de voir votre carte apparaître sur le site. Ainsi, enrichissons ensemble les bonnes adresses de la région d'île de France !",
           page2Title: "Faire ma carte en 5 étapes",
           page2comment :"Nous publions les cartes que vous nous envoyez.",
           page2titre1 : "Ce qu'il faut savoir avant de faire sa carte",
           page2titre2 : "Créer une carte vierge",
           page2titre3 : "Ajouter des points",
           page2titre4 : "Visualiser et filtrer",
           page2titre5 : "Enregistrer et recharger",
           page2text1a : "Pour positionner des points sur une carte, on utilise des coordonnées géographique qui sont la",
           page2text1b : "et la",
           page2text1c : "La",
           page2text1d : "nous indique si un point est à l'OUEST ou à l'EST du globe par rapport au méridien de Greenwich. Ce repère, situé en Angleterre, définit la longitude 0°. Les points à l'EST ont une longitude entre 0° et 180° tandis qu'à l'OUEST, la longitude est négative jusqu'à -180°.",
           page2text1e : "nous indique si un point est au NORD ou au SUD par rapport à l'équateur. L'équateur définit la latitude 0°. La latitude est entre 0° et 180° pour le NORD et descends jusqu'à -180° pour le SUD.",
           page2textexample : "Exemple:",
           Majlatitude : "La latitude",
           latitude : " la latitude",
           longitude :"la longitude",
           Majlongitude : "La longitude",
           page2text2 : "Lisbonne se trouve à l'OUEST du méridien de Greenwich. Sa longitude est alors inférieure à 0°. En effet, la longitude de Lisbonne est -9,13°. Lisbonne est bien au NORD de l'équateur. Sa latitude est alors supérieure à 0°. En effet, la longitude de Lisbonne est 38.70°.",
            page2text3a : "Lorsque vous cliquez sur l'onglet",
            page2text3b : " un ensemble de points s'affiche. C'est la carte des ",
            page2text3c : "Laboratoires d'île de France",
            page2text3d : "Cette carte est un exemple.",
            page2text3e : "Pour commencer votre carte, allez dans l'onglet ",
            page2text3f : "cliquez sur la poubelle",
            page2text3g : "pour supprimer les points existants et commencer votre carte!",
            page2text4a : "Trois élements sont essentiels pour ajouter des points sur votre carte: un",
            page2text4b : "nom unique",
            page2text4c : "Cependant vous avez la possibilité d'ajouter des informations suppémentaires à l'aide du bouton",
            page2text4d :"Comment trouver les coordonnées des points?",
            page2text4e : "De nombreux sites donnent les coordonnées géographiques grâce à l'adresse. Vous pouvez utiliser par exemple :",
            page2text5a : "Une fois que vous avez rentré un certain nombre de points, vous pouvez visualiser votre carte en cliquant directement sur l'onglet",
            page2text5b : "Vous pouvez filter les resultats en fonction des colonnes que vous avez enregistré!",
            page2text6a : "Attention, nous ne stockons aucune donnée que vous enregistrez. Pour garder vos données, il faut ",
            page2text6b : "en cliquant sur",
            page2text6c : "Un fichier est alors généré.",
            page2text6d : "Pour charger vos anciens points, utilisez le bouton",
            page2text6e : "et selectionnez votre fichier",
            page2text6f : "enregistrer votre carte",
            page2text6g : "Bravo! Vous enrichissez notre région en créant des cartes de bonnes adresses!",
            page2text6h : "Si vous souhaitez que votre carte soit disponible sur ce site web, veuillez l'envoyer à l'adresse : "








          }
        }

    }
}, function(err, t) {
    i18nextJquery.init(i18next, $);
    $('html').localize();
    $('title').localize();
    $("#lng").text("en");

    $('.lang-select').click(function() {
      i18next.changeLanguage(this.innerHTML);
      $("#lng").text(i18next.language);
      $('html').localize();
      $('title').localize();
    });
});