allTasksData = [
  {
    title:
      "Przyporządkuj podanym czasownikom właściwe imiesłowy czasu przeszłego Partizip Perfekt. Wpisz odpowienio hat lub ist.",
    type: "fillInBlanks",

    data: {
      choiceList:["studiert", "verbracht", "ferngesehen", "verstanden", "besucht", "angerufen", "gekommen", "gehört"],
      items: [
        { text: "verbringen - %%", expectedAnswers: ["hat verbracht"] },
        { text: "hören - %%", expectedAnswers: ["hat gehört"] },
        { text: "verstehen - %%", expectedAnswers: ["verstanden"] },
        { text: "anrufen - %%", expectedAnswers: ["hat angerufen"] },
        { text: "studieren - %%", expectedAnswers: ["hat studiert"] },
        { text: "kommen - %%", expectedAnswers: ["ist gekommen"] },
        { text: "fernsehen - %%", expectedAnswers: ["ferngesehen"] },
        { text: "besuchen - %%", expectedAnswers: ["besucht"] },
      ],
    },
  },

  {
    title:
      "Uzupełnij zdania słówkami pytającymi. Jedno słówko nie pasuje do żadnego pytania.",
    type: "fillInBlanks",

    data: {
      choiceList:["Wann", "Was", "Wo", "Womit", "Mit wem", "Wie", "Wie oft", "Wie lange"],
      items: [
        { text: "%% hast du den Tanzkurs besucht? - Zwei mal in der Woche.", expectedAnswers: ["Wie oft"] },
        { text: "%% bist du ins Schwimmbad gegangen? - Mit Paula", expectedAnswers: ["Mit wem"] },
        { text: "%% seid ihr ans Meer gefahren? - Im Juli.", expectedAnswers: ["Wann"] },
        { text: "%% wart ihr am Meer? - Nur zwei Wochen.", expectedAnswers: ["Wie lange"] },
        { text: "%% seid ihr zur Schule gefahren? - Mit dem Bus.", expectedAnswers: ["Womit"] },
        { text: "%% hast du am Sonntag gemacht? - Ich bin Rad gefahren.", expectedAnswers: ["Was"] },
      ],
    },
  },

  {
    title:
      "Dopisz czasowniki w czasie przeszłym prostym (Präteritum) lub złożonym (Perfekt).",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Ich %% gestern die ganze Wohnung %%. (saugen)", expectedAnswers: ["habe", "gesaugt"] },
        { text: "Wir %% in den Ferien in den Alpen. Es %% echt cool! (sein)", expectedAnswers: ["waren", "war"] },
        { text: "Er %% seine ganze Klasse zur Party %%. (einladen)", expectedAnswers: ["hat", "eingeladen"] },
        { text: "Er %% zu Fuß zur Schule %%. (gehen)", expectedAnswers: ["ist", "gegangen"] },
        { text: "Ich %% heute um 6 Uhr %%. (aufstehen)", expectedAnswers: ["bin", "aufgestanden"] },
        { text: "Warum %% ihr die Hausaufgaben nich %%? (machen)", expectedAnswers: ["habt", "gemacht"] },
        { text: "Er %% seinem Bruder nicht %%, weil er krank %%. (helfen, sein)", expectedAnswers: ["hat", "geholfen", "war"] },
        { text: "Ich %% zu Hause %%, denn es %% kalt. (bleiben, sein)", expectedAnswers: ["bin", "geblieben", "war"] },
      ],
    },
  },
];
