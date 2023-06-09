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
    var age = parseInt(document.getElementById("age").value);
    var weight = parseFloat(document.getElementById("weight").value.replace(',', '.'));
    var height = parseFloat(document.getElementById("height").value.replace(',', '.'));
    var resultElement = document.getElementById("result");
  
    if (name === "" || !isValidName(name) || isNaN(age) || isNaN(weight) || isNaN(height)) {
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
  
  function isValidName(value) {
    return /^[A-Za-z\s]+$/.test(value); // Verifica se contém apenas letras e espaços
  }