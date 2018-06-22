function displayMultiply() {
  // Déclaration des variables.
  var regex = /^[\d]+[.][\d]+$/;
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  // Vérification des valeurs des inputs sont bien des nombres.
  if(regex.test(shoeSize) == true && regex.test(yearOfBirth) == true);
  {
      // Multiplication des variables firstNumber et secondNumber.
      var shoeSize = (shoeSize * 2 + 5) * 50 - (yearOfBirth) + 1766;
      // Affichage du résultat de la multiplication.
      alert(shoeSize);
  }
}
