
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 29 2025
// This file contains the JS functions for index.html

"use strict"
// Setting the functoin 
function numberLoopCheck() {
  // Setting the variables
  const firstNum = parseInt(document.getElementById("first-num").value)
  const secondNum = parseInt(document.getElementById("second-num").value)
  let result = 0
  let count = 0
  let additionText = ""

  // setting the while loop 
  // Repeats the code inside the loop until count reaches secondNum
  while (count < secondNum) {
    result += firstNum
    additionText += firstNum
    //If secondNum is 3, we only want to add + when count is 0 
    if (count < secondNum - 1) {
      additionText += " + "
    }

    count++
  }
  // Getting the result
  document.getElementById("result").textContent = additionText + " = " + result
}
