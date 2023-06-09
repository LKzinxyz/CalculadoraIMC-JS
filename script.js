function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
  }
  
  function calculateIMC() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = parseWeightHeightValue(document.getElementById("weight").value, 3);
    var height = parseWeightHeightValue(document.getElementById("height").value, 2);
    var resultElement = document.getElementById("result");
  
    if (!isValidName(name) || !isValidAge(age) || isNaN(weight) || isNaN(height)) {
      resultElement.innerHTML = "Por favor, preencha todos os campos corretamente.";
      resultElement.className = "";
      return;
    }
  
    if (weight > 300 || height > 3) {
      resultElement.innerHTML = "IMC inválido. Verifique os valores inseridos.";
      resultElement.className = "";
      return;
    }
  
    var imc = weight / (height * height);
  
    var message;
    var className;
  
    if (imc < 18.5) {
      message = "Você está abaixo do peso!";
      className = "below";
    } else if (imc >= 18.5 && imc <= 24.9) {
      message = "Seu peso está normal!";
      className = "normal";
    } else {
      message = "Seu peso está acima do normal!";
      className = "above";
    }
  
    resultElement.innerHTML = name + ", <br>Seu IMC: " + imc.toFixed(2) + ". <br>" + message;
    resultElement.className = className;
  }
  
  function parseWeightHeightValue(value, digits) {
    var numericValue = value.replace(',', '.');
    var length = numericValue.length;
  
    if (length === digits) {
      var integerPart = numericValue.slice(0, length - 1);
      var decimalPart = numericValue.slice(length - 1);
      numericValue = integerPart + "." + decimalPart;
    }
  
    return parseFloat(numericValue);
  }
  
  function isValidName(value) {
    return /^[A-Za-z\s]+$/.test(value);
  }
  
  function isValidAge(value) {
    return /^\d+$/.test(value);
  }
  
  document.getElementById("name").addEventListener("input", function(event) {
    var input = event.target;
    var sanitizedValue = sanitizeName(input.value);
    input.value = sanitizedValue;
  });
  
  function sanitizeName(value) {
    var sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    return sanitizedValue;
  }
  