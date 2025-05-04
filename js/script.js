
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 29 2025
// This file contains the JS functions for index.html

"use strict"
// Setting the functoin 
function clauclateTypeOfTriangle() {
  // Setting the variables
  const lengthA = parseInt(document.getElementById("length-A").value)
  const lengthB = parseInt(document.getElementById("length-B").value)
  const lengthC = parseInt(document.getElementById("length-C").value)
  let message = ""

  // This code checks for input can form a triangle
  if ((lengthA + lengthB > lengthC) &&
    (lengthA + lengthC > lengthB) &&
    (lengthB + lengthC > lengthA)) {
    // Setting the if and else statments 
    if (lengthA == lengthB && lengthB == lengthC) {
      message = "equilateral triangle"
    } else if (lengthA == lengthB || lengthA == lengthC || lengthB == lengthC ) {
      message = "isosceles triangle"
    }else{
        message = "Scalene triangle"
      }
  } else {
    message = "Not a triangle "
  }

  document.getElementById("result").innerHTML = message
}
