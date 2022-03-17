allTasksData = [
  {
    title:
      "Uzupełnij zdania nazwami dolegliwości, na które zkarży się Paul.",
    type: "fillInBlanks",

    data: {
      choiceList:["Augenschmerzen", "Bauchsmerzen", "Durchfall", "erkältet", "Halsschmerzen", "Handschmerzen", "Ohrenschmerzen", "Kopfschmerzen"],
      items: [
        { text: "Paul hat vier Stunden ohne Pausen seine Hausaufgaben gemacht. Jetzt hat er %%", expectedAnswers: ["Kopfschmerzen"] },
        { text: "Er hat eine große Pizza gegessen und einen Liter Cola getrunken. Nun hat er %%", expectedAnswers: ["Bauchsmerzen"] },
        { text: "Er hat gerade einen Film in 3D gesehen. Jetzt hat er %%", expectedAnswers: ["Augenschmerzen"] },
        { text: "Er hat mit der Hand ein langes Referat geschrieben. Jetzt hat er %%", expectedAnswers: ["Handschmerzen"] },
        { text: "Er hat zu lat Musik gehört. Nun hat er %%", expectedAnswers: ["Ohrenschmerzen"] },
        { text: "Er hat zu viel Eis gegessen. Jetzt hat er %%", expectedAnswers: ["Halsschmerzen"] },
        { text: "Er hat wieder Eier mit Majo gegessen. Jetzt muss er sofort auf die Toilette gehen, weil er %% hat", expectedAnswers: ["Durchfall"] },
        { text: "Es hat geregnet, aber er ist trotzdem Rad gefahren. Jetzt ist er schrecklich %%", expectedAnswers: ["erkältet"] },
      ],
    },
  },
  {
    title: "Lekarstwa",
    type: "table",

    data: {
      columnTitles: ["Niemieczki", "Polski"],
      rowData: [
        ["Augentropfen", "krople do oczu"],
        ["Nasentropfen", "krople do nosa"],
        ["Salbe", "maść"],
        ["Halsschmerztabletten", "tabletki na ból gardła"],
        ["Tabletten gegen Fieber", "tabletki na gorączkę"],
        ["Hustensaft", "syrop na kaszel"],
      ],
    },
  },
  {
    title:
      "Uzupełnij tekst.",
    type: "fillInBlanks",

    data: {
      choiceList:["Arzt", "einnehmen", "erkältet", "Fieber", "Halsschmerzen", "wohl", "Tage", "Schnupfen", "untersucht", "verschrieben"],
      items: [
        { text: "Seit gestern fühle mich nicht %%. Meine Nase ist rot und tut weh, weil ich %% habe.", expectedAnswers: ["wohl", "Schnupfen"] },
        { text: "Ich habe auch %% und kann nichts esse. Ich habe %% 39,3!", expectedAnswers: ["Halsschmerzen", "Fieber"] },
        { text: "Heute Morgen war ich beim %%. Er hat mich zuerst %% und dann gesagt, das ich stark %% bin.", expectedAnswers: ["Arzt", "untersucht", "erkältet"] },
        { text: "Er hat mich für sechs %% krankengeschrieben und mir ein paar Medikamente %%.", expectedAnswers: ["Tage", "verschrieben"] },
        { text: "Jetzt soll ich sie dreimal täglich %% und im Bett liegen.", expectedAnswers: ["einnehmen"] },
      ],
    },
  },  
];
