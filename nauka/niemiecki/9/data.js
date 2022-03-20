allTasksData = [
  {
    title:
      "Utwórz zwroty z podanych elementów i je zapisz",
    type: "fillInBlanks",

    data: {
      choiceList:["wischen", "den", "eine", "ausführen", "Hund", "das", "aufräumen", "Zimmer", "kochen", "den", "Rasen", "Suppe", "mähen", "Staub"],
      items: [
        { text: "%%", expectedAnswers: ["Staub wischen"] },
        { text: "%%", expectedAnswers: ["den Hund ausführen"] },
        { text: "%%", expectedAnswers: ["eine Suppe kochen"] },
        { text: "%%", expectedAnswers: ["das Zimmer aufräumen"] },
        { text: "%%", expectedAnswers: ["Rasen mähen"] },
      ],
    },
  },
  {
    title:
      "Dokończ zdania. Użyj spójnika weil",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Ich schlafe heute bestimmt sofort ain, %% (müde sein)", expectedAnswers: ["weil ich müde bin"] },
        { text: "Leo kann nicht zu Party gehen, %% (auf seinen Bruder aufpassen müssen)", expectedAnswers: ["weil er seinen Bruder aufpassen muss"] },
        { text: "Wir haben uns verspätet, (im Stadtzentrum Freunde treffen - Perfekt)", expectedAnswers: ["weil wir im Stadtzentrum Freunde getroffen haben"] },
      ],
    },
  },

  {
    title:
      "Utwórz formy imiesłowu czasu przeszłego Partizip Perfekt od podanych czasowników, a następnie uzupełnij nimi zdania.",
      choiceList:["waschen", "essen", "putzen", "einpacken", "aufstehen", "trinken"],
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Monika is heute um sieben Uhr %%", expectedAnswers: ["aufgestanden"] },
        { text: "Zuerst hat sie gefrühstückt. Zum Frühstück hat sie Rührei un Brötchen %%.", expectedAnswers: ["gegessen"] },
        { text: "Sie hat ein Glas Orangensaft %%.", expectedAnswers: ["getrunken"] },
        { text: "Dann hat sie sich %% und sich die Zähne %%.", expectedAnswers: ["gewaschen", "geputzt"] },
        { text: "Sie hat sich schnell angezogen. Danach hat sie ihre Bücher und Hefte %%.", expectedAnswers: ["eingepacken"] },
      ],
    },
  },

  {
    title:
      "Ułóż zdania w czasie przeszłym Perfekt. Pierwszy wyraz jest początkiem zdania.",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Ich %%. (gelangweilt, habe, nicht, mich)", expectedAnswers: ["have mich nicht gelangweilt"] },
        { text: "Er %%. (seinem, ist, mit, Opa, gesegelt)", expectedAnswers: ["ist mit seinem Opa gesegelt"] },
        { text: "Manchmal %%. (es, geregnet, hat)", expectedAnswers: ["hat es geregnet"] },
      ],
    },
  },

  {
    title:
      "Wpisz właściwą formę czasownika sein w czasie przeszłym Präteritum.",
    type: "fillInBlanks",

    data: {
      choiceList:["war", "warst", "waren", "wart"],

      items: [
        { text: "Ich %% gestern bei meinem Opa.", expectedAnswers: ["war"] },
        { text: "Wo %% ihr in den Sommerferien", expectedAnswers: ["wart"] },
        { text: "%% due schon in Griechenland", expectedAnswers: ["warst"] },
        { text: "Unsere Freunde %% im Kino.", expectedAnswers: ["waren"] },
      ],
    },
  },

  {
    title:
      "Wpisz właściwe czasowniki posiłkowe i podane czasowniki we formie Partizip Perfekt.",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Manchmal %% es %%. (regnen)", expectedAnswers: ["hat", "geregnet"] },
        { text: "Am Strand %% wir Musik %%. (hören)", expectedAnswers: ["haben", "gehört"] },
        { text: "Ich %% am Wochenende mit meinem Vater %%. (segeln)", expectedAnswers: ["habe", "gesegelt"] },
      ],
    },
  },
];
