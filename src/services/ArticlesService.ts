import { ArticleType } from "../types/ArticleType";

export class ArticleService {
  baseUrl: string = "https://newsapi.org/v2/";
  countryTag: string = "fr";
  domains: string[] = ["lemonde.fr"];

  public static getArticles(search: string = ""): ArticleType[] {
    return [
      {
        source: {
          id: "le-monde",
          name: "Le Monde",
        },
        author: "Le Monde",
        title:
          "Elisabeth Borne « ne partage pas » la position de François Bayrou sur l’exécution provisoire prononcée dans le jugement de Marine Le Pen",
        description:
          "La ministre de l’éducation nationale, de l’enseignement supérieur et de la recherche était l’invitée de « Questions politiques » sur France Inter, France Télévision et « Le Monde ».",
        url: "https://www.lemonde.fr/politique/article/2025/04/06/elisabeth-borne-ne-partage-pas-la-position-de-francois-bayrou-sur-l-execution-provisoire-prononcee-dans-le-jugement-de-marine-le-pen_6592077_823449.html",
        urlToImage:
          "https://img.lemde.fr/2025/04/06/1/0/5500/3666/1440/960/60/0/4acac90_ftp-import-images-1-sfxfp7fvj85y-2025-04-06t084653z-1052809475-rc28sdav1uvr-rtrmadp-3-france-politics.JPG",
        publishedAt: "2025-04-06T12:46:21Z",
        content:
          "Elisabeth Borne au meeting de Renaissance à Saint-Denis (Seine-Saint-Denis), le 6 avril 2025. TOM NICHOLSON / REUTERS\r\nElisabeth Borne, ministre de léducation nationale, de lenseignement supérieur et… [+1477 chars]",
      },
      {
        source: {
          id: "le-monde",
          name: "Le Monde",
        },
        author: "Service Sports",
        title:
          "Quentin Jabet remporte la finale masculine de voltige de la Coupe du monde d’équitation",
        description:
          "Le Français de 22 ans, sur Goldjunge et longé par Jacqueline Schönteich, s’est imposé dimanche à Bâle, en Suisse, en ayant notamment obtenu une note parfaite sur le volet artistique du test libre.",
        url: "https://www.lemonde.fr/sport/article/2025/04/06/quentin-jabet-remporte-la-finale-masculine-de-voltige-de-la-coupe-du-monde-d-equitation_6592087_3242.html",
        urlToImage:
          "https://img.lemde.fr/2025/04/06/0/0/4930/3287/1440/960/60/0/b43b13b_sirius-fs-upload-1-q25ktqwqi19b-1743940687137-54433594808-bf3689a67e-o.jpg",
        publishedAt: "2025-04-06T12:19:41Z",
        content:
          "Le Français Quentin Jabet, sur Goldjunge et longé par Jacqueline Schönteich, lors du test libre de la finale de voltige masculine de la Coupe du monde déquitation, à Bâle (Suisse), le 6 avril 2025. F… [+3373 chars]",
      },
      {
        source: {
          id: "le-monde",
          name: "Le Monde",
        },
        author: "Jean Birnbaum",
        title:
          "Denis Podalydès : « Bourdieu était toujours curieux des autres, de leur savoir, de leur langage, de leur vie »",
        description:
          "Le comédien, metteur en scène et écrivain a fait la connaissance du sociologue dans les années 1980. Dans « L’Ami de la famille », il en livre un portrait empathique et raconte comment cette rencontre l’a transformé.",
        url: "https://www.lemonde.fr/livres/article/2025/04/06/denis-podalydes-bourdieu-etait-toujours-curieux-des-autres-de-leur-savoir-de-leur-langage-de-leur-vie_6592086_3260.html",
        urlToImage:
          "https://img.lemde.fr/2025/03/31/118/59/696/464/1440/960/60/0/6c47f01_sirius-fs-upload-1-b9q9qhnnn2km-1743420441295-podalydes.jpg",
        publishedAt: "2025-04-06T12:00:06Z",
        content:
          "« LAmi de la famille. Souvenirs de Pierre Bourdieu », de Denis Podalydès, Julliard, « Camera obscura », 256 p., 21 , numérique 15 .\r\nEn 1983, Denis Podalydès fait la connaissance dEmmanuel Bourdieu, … [+2224 chars]",
      },
    ];
  }
}
