allTasksData = [
  {
    title: "Uzupełnij tabelę brakującymy formami czasowników nieregularnych",
    type: "table",

    data: {
      columnTitles: ["Infinitiv", "Präesens (er/sie/es)", "Perfekt (er/sie/es)", "Bedeutung"],
      rowData: [
        ["aussehen", "aussehend","hat ausgesehen", "wyglądać"],
        ["nehmen", "nimmt ein","hat eingenommen", "zażywać"],
        ["geben", "gibt","hat gegeben", "dawać"],
        ["vergessen", "vergisst","hat vergessen", "zapominać"],
        ["schreiben", "schreibent","hat verschrieben", "zapisywać"],
        ["wissen", "weiß","hat gewusst", "wiedzieć"],

      ],
    },
  },
  {
    title:
      "Dokończ zdania. Pamiętaj o poprawnej konstrukcji zdania po spójniku 'dass'",
    type: "fillInBlanks",

    data: {
      choiceList:["Heute ist ihr Geburtstag.", "Du sollst das Bad putzen.", "Wir schreiben einen Test in Bio.", "Seine Hobbys sind Sport und Musik.", "Sie weiß das nicht.", "Claudia ist noch krank."],
      items: [
        { text: "Ich weiß, dass %%", expectedAnswers: ["sie das nicht weiß"] },
        { text: "Er hat gesagt, dass %%", expectedAnswers: ["seine Hobbys Sport und Musik sind"] },
        { text: "Wir haben nicht gewusst, dass %%", expectedAnswers: ["wir einen Test in Bio schreiben"] },
        { text: "Mama hat gesagt, dass %%", expectedAnswers: ["du das Bad putzen sollst"] },
        { text: "Mensch, ich habe vergessen, dass %%", expectedAnswers: ["heute ihr Geburtstag ist"] },
        { text: "Entschuldigung! Ich habe nicht gewusst, dass %%", expectedAnswers: ["Claudia noch krank ist"] },
      ],
    },
  },
  {
    title: "Napisz podane czasowniki w 2. osobie liczby pojedynczej oraz w formie trybu rozkazującego.",
    type: "table",

    data: {
      columnTitles: ["Infinitiv", "2. osoba (du)", "Tryb rozkazujący"],
      rowData: [
        ["geben", "gibst","gib!"],
        ["sprechen", "sprichst","sprich!"],
        ["nehmen", "nimmst","nimm!"],
        ["fahren", "fährst","fahr"],
        ["nett sein", "bist nett","sei nett!"],
        ["sagen", "sagst","sag!"],
        ["hören", "hörst","hör!"],
        ["lesen", "liest","lies!"],
      ],
    },
  },
  {
    title: "Tryb rozkazujący w zdaniu. Napisz polecenia dla 2. osoby liczby pojedynczej.",
    type: "table",

    data: {
      rowData: [
        ["morgen um 6 Uhr aufstehen", "Steh morgen um 6 Uhr auf!"],
        ["das Müsli essen", "Iss das Müsli!"],
        ["die Hausaufgaben nicht vergessen", "Vergiss die Hausaufgaben nicht!"],
        ["dein Pausenbrot mitnehmen", "Nimm dein Pausenbrot mit!"],
        ["dein Zimmer aufräumen", "Räume dein Zimmer auf!"],
        ["die Lektüre lesen", "Lies die Lektüre!"],
        ["um 22 Uhr ins Bett gehen", "Geh um 22 Uhr ins Bett!"],
        
      ],
    },
  },
];
