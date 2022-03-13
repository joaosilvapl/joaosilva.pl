taskData = {
  title: "Czasowniki nieregularne",
  type: "table",

  data: {
    columnTitles: [
      "Infinitiv",
      "Präsens 3. Person",
      "Präteritum",
      "Partizip II",
    ],
    rowData: [
      ["backen (piec)", "backt / bäckt", "backte / buk", "gebacken"],
      ["befehlen (rozkazywać)", "befiehlt", "befahl", "befohlen"],
     



      [" beginnen (zaczynać (się))","","begann","begonnen"],
      



      ["bieten (oferować)","","bot","geboten"],

      ["bitten (prosić)","","bat","gebeten"],
      ["bleiben (zostawać)","","blieb","geblieben (s.)"],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
      


      ["nennen (nazywac)","","nannte","genannt"],
        
      ["raten (radzić","rät","riet","geraten"],
      



      ["reiben (trzec)","","rieb","gerieben"],
      ["reißen (drzeć, rwać)","","riss","gerissen"],
      ["reiten (jeździć konno)","","ritt","geritten (s.)"],
      ["rennen (pędzić, biec)","","rannte","gerannt (s.)"],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    //   ["","","",""],
    ],
  },
};

taskElements = [];

createAllTaskElements = (parent) => {
  const taskHeaderDiv = document.createElement("div");

  taskHeaderDiv.className = "taskHeader";

  taskHeaderDiv.innerHTML = taskData.title;

  document.getElementById("tasksDiv").appendChild(taskHeaderDiv);

  const div = document.createElement("div");
  document.getElementById("tasksDiv").appendChild(div);

  var taskElement = createTaskElement(div, taskData.type, taskData.data);

  taskElements.push(taskElement);
};

createTaskElement = (parentElement, taskType, taskData) => {
  switch (taskType) {
    case "table":
      return createTableTaskElement(
        parentElement,
        taskData.columnTitles,
        taskData.rowData
      );
  }
};

createTableTaskElement = (parentElement, columnTitles, rowData) => {
  var inputs = [];
  var imgs = [];

  const body = document.body;
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
    let rowImages = [];

    const td = tr.insertCell();
    td.appendChild(document.createTextNode(currentRowData[0]));
    td.className = "taskTableCell";

    for (let j = 1; j < columnTitles.length; j++) {
      const td = tr.insertCell();

      var textInput = document.createElement("INPUT");
      textInput.id = "textInput-" + i + "-" + j;
      textInput.setAttribute("type", "text");
      rowInputs.push(textInput);

      var resultObj = document.createElement("object");
      resultObj.id = "resultObj-" + i + "-" + j;
      resultObj.width = 24;
      resultObj.height = 24;
      resultObj.className = "hidden";
      rowImages.push(resultObj);

      var cellDiv = document.createElement("div");
      cellDiv.appendChild(textInput);
      cellDiv.appendChild(resultObj);

      td.appendChild(cellDiv);
      td.className = "taskTableCell";
    }
    inputs.push(rowInputs);
    imgs.push(rowImages);
  }
  parentElement.appendChild(table);

  var elements = {
    inputs: inputs,
    images: imgs,
  };

  return elements;
};

verifyAllTaskResults = () => {
  var resultData = verifyTaskResults(
    taskData.type,
    taskData.data,
    taskElements[0]
  );

  document.getElementById(
    "resultsText"
  ).innerHTML = `Poprawne: ${resultData.correctCount}, niepoprawne: ${resultData.incorrectCount}`;
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
    var currentRowData = taskData.rowData[i];
    var inputElements = taskElements.inputs[i];
    var imgElements = taskElements.images[i];
    for (let j = 1; j < currentRowData.length; j++) {
      let expectedValue = currentRowData[j];
      let inputValue = inputElements[j - 1].value;

      imgElements[j - 1].className = "visible";

      let imgData = "";

      if (expectedValue == inputValue) {
        imgData = "good.svg";
        correctCount += 1;
      } else {
        imgData = "fail.svg";
        incorrectCount += 1;
      }

      imgElements[j - 1].data =
        expectedValue == inputValue ? "good.svg" : "fail.svg";
    }
  }

  var resultData = {
    correctCount: correctCount,
    incorrectCount: incorrectCount,
  };

  return resultData;
};

createAllTaskElements();
