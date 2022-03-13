var allTasksData = [

  {
    title: "Czas przeszły prosty - Präteritum",
    type: "table",

    data: {
      columnTitles: ["Zaimek", "Czasownik"],
      rowData: [
        ["ich", "hatte"],
        ["du", "hattest"],
        ["er / sie / es", "hatte"],
        ["wir", "hatten"],
        ["ihr", "hattet"],
        ["sie / Sie", "hatten"],

      ],
    },
  },
  {
    title: "Spójnik dass w zdaniu",
    type: "table",

    data: {
      columnTitles: ["Początek zdania", "czasownik"],
      rowData: [
        ["(Wiem, że on miał gorączkę) Ich weiß, dass er Fieber", "hatte"],
        ["(Wiem, że on poszedł do lekarza) Ich weiß, dass er zum Arzt", "gegangen ist"],
      ],
    },
  },

  {
    title: "Imperativ - tryb rozkazujący",
    type: "table",

    data: {
      columnTitles: ["Infinitiv", "2. Person Singular", "Imperativ 2. Person Singular", "2. Person Plural", "Imperativ 2. Person Plural (ihr)"],
      rowData: [
        ["lesen (czytać)","du liest","Lies bitte!","ihr lest","Lest bitte!"],
        ["zuhören (słuchać)","du hörst zu","Hör(e) mal zu!","ih hört zu","Hört mal zu!"],
        ["sprechen (mówić)","du sprichst","Sprich mal!","ihr sprecht","Sprecht mal!"],
        ["sich setzen (siadać)","du setzt dich","Setz(e) dich bitte!","ih setzt euch","Setzt euch bitte!"],
        ["fahren (jechać)","du fährst","Fahr(e) mal!","ihr fahrt","Fahrt mal!"],
        ["ruhig sein (być cicho)","du bist ruhig","Sei bitte ruhig!","ihr seid ruhig","Seid bitte ruhig!"],
      ],
    },
  },

  // {
  //   title: "Dativ (celownik) - wem? (komu?)",
  //   type: "table",

  //   data: {
  //     columnTitles: ["Określony", "Nieokreślony", "Przeczenie", "Zaimek dzierżawczy"],
  //     rowData: [
  //       ["dem Fuß", "einem Fuß","keinem Fuß","meinem Fuß"],
  //       ["der Nase", "einer Nase","keiner Nase","meiner Nase"],
  //       ["dem Bein", "einem Bein","keinem Bein","meinem Bein"],
  //       ["den Füßen, Nasen, Beinen (Plural)", "Füßen, Nasen, Beinen","keinem Füßen, Nasen, Beinen","meinem Füßen, Nasen, Beinen"],

  //     ],
  //   },
  // },

  // {
  //   title: "Akkusativ (biernik) - wen? was? (kogo? co?)",
  //   type: "table",

  //   data: {
  //     columnTitles: ["Określony", "Nieokreślony", "Przeczenie", "Zaimek dzierżawczy"],
  //     rowData: [
  //       ["den Fuß", "einen Fuß","keinen Fuß","meinem Fuß"],
  //       ["die Nase", "eine Nase","keine Nase","meine Nase"],
  //       ["das Bein", "ein Bein","kein Bein","mein Bein"],
  //       ["die Füße, Nasen, Beine (Plural)", "Füße, Nasen, Beine","keine Füße, Nasen, Beine","meine Füße, Nasen, Beine"],

  //     ],
  //   },
  // },

  
  // {
  //   title: "",
  //   type: "table",

  //   data: {
  //     columnTitles: ["Niemiecki", "Polski"],
  //     rowData: [
  //       ["", ""],

  //     ],
  //   },
  // },
  // {
  //   title: "",
  //   type: "table",

  //   data: {
  //     columnTitles: ["Niemiecki", "Polski"],
  //     rowData: [
  //       ["", ""],

  //     ],
  //   },
  // },
];

taskElements = [];

createAllTaskElements = () => {
  var parentElement = document.getElementById("tasksDiv");

  for (let i = 0; i < allTasksData.length; i++) {
    createTaskElements(parentElement, i, allTasksData[i]);
  }
};

createTaskElements = (parentElement, taskIndex, taskData) => {
  const taskHeaderDiv = document.createElement("div");

  taskHeaderDiv.className = "taskHeader";

  taskHeaderDiv.innerHTML = `${taskIndex + 1} ${taskData.title}`;

  parentElement.appendChild(taskHeaderDiv);

  const div = document.createElement("div");
  parentElement.appendChild(div);

  var taskElement = createTaskElement(div, taskIndex, taskData.type, taskData.data);

  taskElements.push(taskElement);
};

createTaskElement = (parentElement, taskIndex, taskType, taskData) => {
  switch (taskType) {
    case "table":
      return createTableTaskElement(
        parentElement,
        taskIndex,
        taskData.columnTitles,
        taskData.rowData
      );
  }
};

createTableTaskElement = (parentElement, taskIndex, columnTitles, rowData) => {
  var inputs = [];
  var expectedAnswers = [];

  const table = document.createElement("table");
  table.className = "taskTable";

  var header = table.createTHead();
  var row = header.insertRow(0);

  for (let i = 0; i < columnTitles.length; i++) {
    var cell = row.insertCell(i);
    cell.innerHTML = "<b>" + columnTitles[i] + "</b>";
    cell.className = "taskTableHeaderCell";
  }

  for (let i = 0; i < rowData.length; i++) {
    var currentRowData = rowData[i];
    const tr = table.insertRow();

    let rowInputs = [];
    let rowExpectedAnswers = [];

    const td = tr.insertCell();
    td.appendChild(document.createTextNode(currentRowData[0]));
    td.className = "taskTableCell";

    for (let j = 1; j < columnTitles.length; j++) {
      const td = tr.insertCell();

      var textInput = document.createElement("INPUT");
      textInput.id = `textInput-${taskIndex}-${i}-${j}`;
      textInput.setAttribute("type", "text");
      rowInputs.push(textInput);

      var expectedAnswerSpan = document.createElement("span");
      expectedAnswerSpan.id = `expectedAnswerSpan-${taskIndex}-${i}-${j}`;
      expectedAnswerSpan.className = "hidden";
      rowExpectedAnswers.push(expectedAnswerSpan);

      var cellDiv = document.createElement("div");
      cellDiv.appendChild(textInput);
      cellDiv.appendChild(expectedAnswerSpan);

      td.appendChild(cellDiv);
      td.className = "taskTableCell";
    }
    inputs.push(rowInputs);
    expectedAnswers.push(rowExpectedAnswers);
  }
  parentElement.appendChild(table);

  var elements = {
    inputs: inputs,
    expectedAnswers: expectedAnswers,
  };

  return elements;
};

verifyAllTaskResults = () => {
  let correctCount = 0;
  let incorrectCount = 0;
  
  for (let i = 0; i < allTasksData.length; i++) {
    let taskData = allTasksData[i];
    let resultData = verifyTaskResults(
      taskData.type,
      taskData.data,
      taskElements[i]
    );

    correctCount += resultData.correctCount;
    incorrectCount += resultData.incorrectCount;

  }

  document.getElementById(
    "resultsText"
  ).innerHTML = `Poprawne: ${correctCount}, niepoprawne: ${incorrectCount}`;
};

verifyTaskResults = (taskType, taskData, taskElements) => {
  switch (taskType) {
    case "table":
      return verifyTableTaskResults(taskData, taskElements);
  }
};

verifyTableTaskResults = (taskData, taskElements) => {
  let correctCount = 0;
  let incorrectCount = 0;

  for (let i = 0; i < taskData.rowData.length; i++) {
    let currentRowData = taskData.rowData[i];
    let inputElements = taskElements.inputs[i];
    let expectedAnswerElements = taskElements.expectedAnswers[i];
    for (let j = 1; j < currentRowData.length; j++) {
      let expectedValue = currentRowData[j];
      let inputElement = inputElements[j - 1];
      let inputValue = inputElement.value;
      let expectedAnswerElement = expectedAnswerElements[j - 1];

      inputElement.disabled = true;

      if (expectedValue == inputValue) {
        imgData = "good.svg";
        correctCount += 1;
        inputElement.className = "correct";
      } else {
        imgData = "fail.svg";
        incorrectCount += 1;

        inputElement.className = "incorrect";

        expectedAnswerElement.className = "expectedAnswer";
        expectedAnswerElement.innerHTML = expectedValue;
      }
     
    }
  }

  var resultData = {
    correctCount: correctCount,
    incorrectCount: incorrectCount,
  };

  return resultData;
};

createAllTaskElements();
