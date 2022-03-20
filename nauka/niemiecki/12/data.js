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
        ["abwaschen", "wäscht ab", "hat abgewaschen", "zmywać naczynia"],
        ["schreiben", "schreibt", "hat geschrieben", "pisać"],
        ["treffen sich", "trifft sich", "hat sich getroffen", "spotykać się"],
        ["verbringen", "verbringt", "hat verbracht", "spędzać"],
        ["bleiben", "bleibt", "ist geblieben", "zostawać"],
        ["fliegen", "fliegt", "ist geflogen", "latać"],
        ["schwimmen", "schwamm", "ist geschwommen", "pływać"],
        ["zurück kommen", "kommt züruck", "ist züruckgekommen", "wracać"],
      ],
    },
  },
  {
    title:
      "Czas przeszły złożony Perfekt. Wpisz właściwy czasownik posiłkowy haben lub sein we właściwej formie.",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Wir %% im Sportunterricht Fußball gespielt. (haben, sind)", expectedAnswers: ["haben"] },
        { text: "Wann %% du geboren? - Am 23. November 2004. (hast, bist)", expectedAnswers: ["bist"] },
        { text: "Um wie viel Uhr %% Sven nach Hause gekommen? - Keine Ahnung. (hat, ist)", expectedAnswers: ["ist"] },
        { text: "%% ihr zu Fuß gegangen oder mit dem Bus gefahren? (Habt, Seid). - Wir %% mit dem Bus gefahren. (haben, sind)", expectedAnswers: ["Seid", "sind"] },
        { text: "Marie %% sofort eingeschlafen und %% dann bis 11 Uhr geschlafen. (hat, ist)", expectedAnswers: ["ist"] },
      ],
    },
  },

  {
    title:
      "Ułóż z podanych elementów zdania. Zwróć uwagę na formy orzeczeń.",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "See, allein, geschwommen, im, ist, er: %%", expectedAnswers: ["Er ist allein im See geschwommen"] },
        { text: "Nachmittag, ferngesehen, ich, am, habe: %%", expectedAnswers: ["Ich habe am Nachmittag ferngesehen"] },
        { text: "Kino, Wochenende, ins, gegangen, sind, am, sie: %%", expectedAnswers: ["Sie sind am Wochenende ins Kino gegangen"] },
        { text: "Party, du, wen, zur, eingeladen, hast, ?: %%", expectedAnswers: ["Wen hast du zur Party eingeladen?"] },
        { text: "Aufgabe, gelöst, wir, nicht, die, haben: %%", expectedAnswers: ["Wir haben die Aufgabe nicht gelöst"] },
      ],
    },
  },
];
