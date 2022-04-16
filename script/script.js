function addValue() {
  debugger;
  // get the operands value
  // parse to integer. You can use: parseInt(input, 10);
  var val1 = document.getElementById("input_a").value;
  var val2 = document.getElementById("input_b").value;
  if (val1 == "" || val2 == "") {
    alert("Please enter a number");
    return false;
  }
  var conVal1 = parseInt(val1);
  var conVal2 = parseInt(val2);

  console.log("Value 1: ", conVal1);
  console.log("Value 2: ", conVal2);

  // perform operation
  sumVal = conVal1 + conVal2;
  console.log("Result: ", sumVal);

  // creating the text output
  var text = conVal1 + " + " + conVal2 + " = " + sumVal;

  // (if you want to check) print out in console
  console.log("Output : ", text);

  // change the text area
  document.mycalculator.output.value = text;
}

function mulValue() {
  var val1 = document.getElementById("input_a").value;
  var val2 = document.getElementById("input_b").value;
  if (val1 == "" || val2 == "") {
    alert("Please enter a number");
    return false;
  }
  var conVal1 = parseInt(val1);
  var conVal2 = parseInt(val2);

  console.log("Value 1: ", conVal1);
  console.log("Value 2: ", conVal2);

  // perform operation
  sumVal = conVal1 * conVal2;
  console.log("Result: ", sumVal);

  // creating the text output
  var text = conVal1 + " x " + conVal2 + " = " + sumVal;

  // (if you want to check) print out in console
  console.log("Output : ", text);

  // change the text area
  document.mycalculator.output.value = text;
}

function divValue() {
  var val1 = document.getElementById("input_a").value;
  var val2 = document.getElementById("input_b").value;
  if (val1 == "" || val2 == "") {
    alert("Please enter a number");
    return false;
  }
  var conVal1 = parseInt(val1);
  var conVal2 = parseInt(val2);

  console.log("Value 1: ", conVal1);
  console.log("Value 2: ", conVal2);

  // perform operation
  sumVal = conVal1 / conVal2;
  console.log("Result: ", sumVal);

  // creating the text output
  var text = conVal1 + " / " + conVal2 + " = " + sumVal;

  // (if you want to check) print out in console
  console.log("Output : ", text);

  // change the text area
  document.mycalculator.output.value = text;
}
