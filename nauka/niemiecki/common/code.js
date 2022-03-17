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

  var taskElement = createTaskElement(
    div,
    taskIndex,
    taskData.type,
    taskData.data
  );

  taskElements.push(taskElement);
};

createTaskElement = (parentElement, taskIndex, taskType, taskData) => {
  switch (taskType) {
    case "table":
      return createTableTaskElement(parentElement, taskIndex, taskData);
    case "fillInBlanks":
      return createFillInBlanksTaskElement(parentElement, taskIndex, taskData);
  }
};

createTableTaskElement = (parentElement, taskIndex, taskData) => {
  var inputs = [];
  var expectedAnswers = [];

  const table = document.createElement("table");
  table.className = "taskTable";

  var header = table.createTHead();
  var row = header.insertRow(0);

  if (taskData.hasOwnProperty("columnTitles")) {
    for (let i = 0; i < taskData.columnTitles.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = "<b>" + taskData.columnTitles[i] + "</b>";
      cell.className = "taskTableHeaderCell";
    }
  }

  for (let i = 0; i < taskData.rowData.length; i++) {
    var currentRowData = taskData.rowData[i];
    const tr = table.insertRow();

    let rowInputs = [];
    let rowExpectedAnswers = [];

    const td = tr.insertCell();
    td.appendChild(document.createTextNode(currentRowData[0]));
    td.className = "taskTableCell";

    for (let j = 1; j < currentRowData.length; j++) {
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

createFillInBlanksTaskElement = (parentElement, taskIndex, taskData) => {
  var inputs = [];
  var expectedAnswers = [];

  const mainDiv = document.createElement("div");
  mainDiv.className = "taskFillInBlanksMainDiv";

  if (taskData.hasOwnProperty("choiceList")) {
    const choiceListDiv = document.createElement("div");
    choiceListDiv.className = "choiceList";
    choiceListDiv.innerText = taskData.choiceList.join(" - ");
    mainDiv.appendChild(choiceListDiv);
  }

  for (let i = 0; i < taskData.items.length; i++) {
    var currentItem = taskData.items[i];

    let itemTextSplitted = currentItem.text.split("%%");

    let itemInputs = [];
    let itemExpectedAnswers = [];

    const itemDiv = document.createElement("div");
    itemDiv.className = "taskLine";

    for (let j = 0; j < itemTextSplitted.length; j++) {
      const span = document.createElement("span");
      span.innerText = itemTextSplitted[j];
      itemDiv.appendChild(span);

      if (currentItem.expectedAnswers.length > j) {
        let textInput = document.createElement("INPUT");
        textInput.id = `textInput-${taskIndex}-${i}-${j}`;
        textInput.setAttribute("type", "text");
        itemDiv.appendChild(textInput);
        itemInputs.push(textInput);

        let expectedAnswerSpan = document.createElement("span");
        expectedAnswerSpan.id = `expectedAnswerSpan-${taskIndex}-${i}-${j}`;
        expectedAnswerSpan.className = "hidden";
        itemDiv.appendChild(expectedAnswerSpan);
        itemExpectedAnswers.push(expectedAnswerSpan);
      }
    }

    inputs.push(itemInputs);
    expectedAnswers.push(itemExpectedAnswers);

    mainDiv.appendChild(itemDiv);
  }

  parentElement.appendChild(mainDiv);

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
    case "fillInBlanks":
      return verifyFillInBlanksTaskResults(taskData, taskElements);
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

      if (expectedValue == inputValue) {
        correctCount += 1;
        inputElement.className = "correct";
      } else {
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

verifyFillInBlanksTaskResults = (taskData, taskElements) => {
  let correctCount = 0;
  let incorrectCount = 0;

  for (let i = 0; i < taskData.items.length; i++) {
    let currentItemData = taskData.items[i];
    let expectedAnswerElements = taskElements.expectedAnswers[i];

    for (let j = 0; j < currentItemData.expectedAnswers.length; j++) {
      let expectedValue = currentItemData.expectedAnswers[j];
      let inputElement = taskElements.inputs[i][j];
      let inputValue = inputElement.value;
      let expectedAnswerElement = expectedAnswerElements[j];

      inputElement.disabled = true;

      if (expectedValue == inputValue) {
        correctCount += 1;
        inputElement.className = "correct";
      } else {
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

copyTextToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

createAllTaskElements();
