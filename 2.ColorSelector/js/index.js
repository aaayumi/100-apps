const inputs = document.querySelectorAll('.selector input');

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

function added() {
  var input_value = document.getElementById("text").value;
document.getElementById("checker").innerHTML = input_value;
}

document.getElementById("text").addEventListener("input",added);