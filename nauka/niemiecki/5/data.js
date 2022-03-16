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
  {
    title:
      "Wpisz rodzajniki i przeczenie rzeczowników we właściwych przypadkach",
    type: "fillInBlanks",

    data: {
      items: [
        { text: "Ich sehe %% Hals (kein), sondern %% Finger (ein).", expectedAnswers: ["keinem", "einem"] },
        { text: "Fährst du lieber mit %% Auto (das) oder mit %% Bus (der)? - Ich gehe lieber zu Fuß.", expectedAnswers: ["dem", "dem"] },
        { text: "Klara schreibt ihren Aufsatz mit %% der Hand (die) und nicht am Computer.", expectedAnswers: ["der"] },
        { text: "Er hat einen Monat auf %% Land (das) verbracht. Es war sehr langweilig.", expectedAnswers: ["dem"] },
        { text: "Wir brauchen %% Kuli (ein), %% Bleistift (ein) un %% Radiergummi (ein).", expectedAnswers: ["einen", "einen", "einen"] },
        { text: "Ich treffe mich gern nach %% Unterricht (der) mit %% Freunden (Pl.).", expectedAnswers: ["dem", "den"] },
      ],
    },
  },
  {
    title: "Uzupełnij tabelę brakującymi formami czasowników nieregularnych",
    type: "table",

    data: {
      columnTitles: ["Infinitiv", "Präesens (er/sie/es)", "Perfekt (er/sie/es)", "Bedeutung"],
      rowData: [
        ["laufen", "läuft","ist gelaufen", "biegać"],
        ["singen", "singt","hat gesungen", "śpiewać"],
        ["springen", "springt","ist gesprungen", "skakać"],
        ["verlieren", "verliert","hat verloren", "gubić"],
        
      ],
    },
  },
];
