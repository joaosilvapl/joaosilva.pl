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
    ],
  },
};

taskElements = [];

createAllTaskElements = (parent) => {
  const div = document.createElement("div");

  div.className = "taskHeader";

  div.innerHTML = taskData.title;

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
  verifyTaskResults(taskData.type, taskData.data, taskElements[0]);
};

verifyTaskResults = (taskType, taskData, taskElements) => {
  switch (taskType) {
    case "table":
      verifyTableTaskResults(taskData, taskElements);
  }
};

verifyTableTaskResults = (taskData, taskElements) => {
  for (let i = 0; i < taskData.rowData.length; i++) {
    var currentRowData = taskData.rowData[i];
    var inputElements = taskElements.inputs[i];
    var imgElements = taskElements.images[i];
    for (let j = 1; j < currentRowData.length; j++) {
      let expectedValue = currentRowData[j];
      let inputValue = inputElements[j - 1].value;

      imgElements[j - 1].className = "visible";

      imgElements[j - 1].data =
        expectedValue == inputValue ? "good.svg" : "fail.svg";
    }
  }
};

createAllTaskElements();
