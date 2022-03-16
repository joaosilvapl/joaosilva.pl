allTasksData = [
  {
    title: "Rzeczowniki",
    type: "table",

    data: {
      columnTitles: ["Niemiecki", "Polski"],
      rowData: [
        ["der Fuß", "stopa"],
        ["die Nase", "nos"],
        ["das Bein", "noga"],
        ["Füße", "stopy"],
        ["Nasen", "nosy"],
        ["Beine", "nogi"],
        ["der Rücken", "plecy"],
        ["die Hand", "dłoń"],
        ["der Finger", "palec"],
        ["der Kopf", "głowa"],
        ["das Ohr", "ucho"],
        ["der Bauch", "brzuch"],
        ["die Schulter", "ramię"],
        ["der Mund", "usta"],
      ],
    },
  },
  {
    title:
      "Uzupełnij dialogi rodzajnikami nieokreślonymi i przeczeniami rzeczownika",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Ist das %% Arm?", expectedAnswers: ["ein"] },
        {
          text: "Nein, das ist %% Arm. Ich glaube, das ist %% Schulter.",
          expectedAnswers: ["kein", "eine"],
        },
        { text: "Is das %% Hals?", expectedAnswers: ["ein"] },
        {
          text: "Nein, das ist %% Hals. Ich glaube, das ist %% Finger.",
          expectedAnswers: ["kein", "ein"],
        },
        { text: "Is das %% Ohr?", expectedAnswers: ["ein"] },
        {
          text: "Nein, das ist %% Ohr. Ich glaube, as ist %% Nase.",
          expectedAnswers: ["kein", "eine"],
        },
        { text: "Is das %% Finger?", expectedAnswers: ["ein"] },
        {
          text: "Nein, das ist %% Finger. Ich glaube, das ist %% Bein.",
          expectedAnswers: ["kein", "ein"],
        },
      ],
    },
  },
];
