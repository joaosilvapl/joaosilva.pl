allTasksData = [
  {
    title:
      "Utwórz zwroty z podanych elementów i je zapisz",
    type: "fillInBlanks",

    data: {
      choiceList:["ausführen", "ausräumen", "Bad", "Geschwister", "kochen", "Basen", "Tisch", "wegbringen", "wischen", "Wohnzimmer"],
      items: [
        { text: "den Müll %%", expectedAnswers: ["wegbringen"] },
        { text: "den %% mähen", expectedAnswers: ["Rasen"] },
        { text: "den %% decken", expectedAnswers: ["Tisch"] },
        { text: "eine Suppe %%", expectedAnswers: ["kochen"] },
        { text: "den Hund %%", expectedAnswers: ["ausführen"] },
        { text: "das %% putzen", expectedAnswers: ["Bad"] },
        { text: "Staub %%", expectedAnswers: ["wischen"] },
        { text: "das %% saugen", expectedAnswers: ["Wohnzimmer"] },
        { text: "auf die %% aufpassen", expectedAnswers: ["Geschwister"] },
        { text: "die Geschirrspülmaschine", expectedAnswers: ["ausräumen"] },
      ],
    },
  },
  {
    title:
      "Wpis w luki czasowniki we właściwej formie",
    type: "fillInBlanks",

    data: {
      choiceList:["ausräumen", "decken", "mähen", "müssen", "putzen", "saugen", "tun", "wegbringen", "wischen"],
      items: [
        { text: "Anton und Julia %% zu Hause helfen.", expectedAnswers: ["müssen"] },
        { text: "Anton %% freitagnachmittags das Wohnzimmer und sein Zimmer.", expectedAnswers: ["saugt"] },
        { text: "Er %% auch Staub.", expectedAnswers: ["wischt"] },
        { text: "Sonntags %% er den Tisch für das Frühstück.", expectedAnswers: ["deckt"] },
        { text: "Abends %% er immer die Geschirrpülmaschine %%.", expectedAnswers: ["räumt", "aus"] },
        { text: "Im Sommer %% er den Rasen", expectedAnswers: ["maht"] },
        { text: "Seine Schwester Julia %% samtags das Bad und %% oft den Müll %%.", expectedAnswers: ["putzt", "bringt", "weg"] },
        { text: "Anton %% das auch.", expectedAnswers: ["tut"] },
      ],
    },
  },

  {
    title:
      "Kiedy? Podpisz daty. Dzisiaj jest 18ego Maja.",
      choiceList:["übermorgen", "heute", "vorgestern", "im Sommer", "morgen", "am Wochenende", "in drei Tagen", "nach Neujahr", "vor zwei Wochen", "gestern"],
    type: "fillInBlanks",

    data: {
      items: [
        { text: "18. Mai: %%", expectedAnswers: ["heute"] },
        { text: "17. Mai: %%", expectedAnswers: ["gestern"] },
        { text: "2. Januar", expectedAnswers: ["nach Neujahr"] },
        { text: "20. Mai", expectedAnswers: ["übermorgen"] },
        { text: "21. Mai", expectedAnswers: ["in drei Tagen"] },
        { text: "4. Mai", expectedAnswers: ["vor zwei Wochen"] },
        { text: "19. Mai", expectedAnswers: ["morgen"] },
        { text: "13.-14. Mai", expectedAnswers: ["am Wochenende"] },
        { text: "16. Mai", expectedAnswers: ["vorgestern"] },
        { text: "29. Juli", expectedAnswers: ["im Sommer"] },
      ],
    },
  },
];
