function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").className = "";
    document.querySelector(".calculator").classList.remove("green-border", "red-border", "orange-border");
    document.querySelector(".calculator").classList.add("blue-border");
  }
  
  
  function calculateIMC() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var calculatorElement = document.querySelector(".calculator");
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
  
    // Remove todas as classes de borda
    calculatorElement.classList.remove("green-border", "red-border", "orange-border");
  
    // Adiciona a classe de borda correta
    if (className === "normal") {
      calculatorElement.classList.add("green-border");
    } else if (className === "below") {
      calculatorElement.classList.add("red-border");
    } else {
      calculatorElement.classList.add("orange-border");
    }
  }
  
  function isValidName(name) {
    return name.trim().length > 0;
  }
  
  function isValidAge(age) {
    var parsedAge = parseInt(age);
    return !isNaN(parsedAge) && parsedAge > 0;
  }
  