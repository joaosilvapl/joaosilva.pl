allTasksData = [
  {
    title: "Uzupełnij tabelę brakującymi formami czasowników nieregularnych.",
    type: "table",

    data: {
      columnTitles: [
        "Infinitiv",
        "Präsens er/sie/es",
        "Perfekt er/sie/es",
        "Bedeutung",
      ],
      rowData: [
        ["helfen", "hilft", "hat geholfen", "pomagać"],
        ["fahren", "fährt", "ist gefahren", "jechać"],
        ["gehen", "geht", "ist gegangen", "iść"],
        ["losgehen", "geht los", "ist losgegangen", "wyruszać"],
        ["kommen", "kommt", "ist gekommen", "przychodzić"],
        ["lesen", "liest", "hat gelesen", "czytać"],
        ["stehen", "steht", "hat gestanden", "stać"],
        ["aufstehen", "steht auf", "ist aufgestanden", "wstawać"],
        ["sehen", "sieht", "hat gesehen", "widzieć"],
        ["fernsehen", "sieht fern", "hat ferngesehen", "oglądać telewizję"],
        ["schlafen", "schläft", "hat geschlafen", "spać"],
        ["einschlafen", "schläft ein", "is eingeschlagen", "zasypiać"],
        ["sich anziehen", "zieht sich an", "hat sich angezogen", "ubierać się"],
        ["sich waschen", "wäscht sich", "hat sich gewaschen", "myć się"],
      ],
    },
  },
  {
    title:
      "Uzupełnij zdania formami czasowników posiłkowych haben i sein oraz imiesłowu czasu przeszłego Partizip Perfekt podanych czasowników nieregularnych.",
    type: "fillInBlanks",

    data: {
      choiceList:["anziehen", "aufstehen", "einschlafen", "essen", "fahren", "gehen (2x)", "lesen", "schlafen", "trinken", "waschen (2x)"],
      items: [
        { text: "Eva %% sich %% und ihre Zähne geputzt.", expectedAnswers: ["hat", "gewaschen"] },
        { text: "Sie %% um 21.30 Uhr ins Bett %%.", expectedAnswers: ["ist", "gegangen"] },
        { text: "Sie %% im Bett kein Buch %%, weil sie müde war.", expectedAnswers: ["hat", "gelesen"] },
        { text: "Sie %% sehr schnell %% und %% bis 6 Uhr morgens %%.", expectedAnswers: ["ist", "eingeschlafen", "geschlafen"] },
        { text: "Am Morgen %% sie erst um sieben %%.", expectedAnswers: ["ist", "aufgestanden"] },
        { text: "Sie %% sich blitzschnell %% und %%.", expectedAnswers: ["hat", "angezogen", "gewaschen"] },
        { text: "Sie %% Frühstück %% und ein Glas Milch %%.", expectedAnswers: ["hat", "gegessen", "getrunken"] },
        { text: "In der Schule war sie aber um fünf vor acht, denn sie %% nich zu Fuß zur Schule %%, sondern mit dem Bus %%.", expectedAnswers: ["ist", "gegangen", "gefahren"] },
      ],
    },
  },

  {
    title:
      "Utwórz zdania w czasie przeszłym Perfekt na podstawie podanych zwrotów",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "am Samstag zu Hause helfen: %%", expectedAnswers: ["Wir haben am Samstag zu Hause geholfen"] },
        { text: "den Müll wegbringen: Ich %%", expectedAnswers: ["habe den Müll weggebracht"] },
        { text: "schnell von zu Hause losgehen: Frederic %%", expectedAnswers: ["ist schnell von zu Hause gekommen"] },
        { text: "sehr spät nach Hause kommen: Meine eltern %%", expectedAnswers: ["sind sehr spät nach Hause gekommen"] },
        { text: "am Freitag bis 24 Uhr fernsehen: Sie %%", expectedAnswers: ["hat bis 24 Uhr ferngesehen"] },
        { text: "hier stehen: Eine kleine Flasche Mineralwasser %%", expectedAnswers: ["ist hier gestanden"] },
      ],
    },
  },
];
