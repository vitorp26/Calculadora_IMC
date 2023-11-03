const form = document.getElementById ('form');

form.addEventListener ('submit', function(event){
    event.preventDefault();

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    const bmi = (weight /(height * height)).toFixed(2);

    const value = document.getElementById ('value');
    let description = '';

    document.getElementById ('infos').classList.remove('hidden');

    value.classList.add('attention');
    
    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!"
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está com Peso Ideal!"
        value.classList.remove('attention');
        value.classList.add('regular');
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!"
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com Obesidade moderada!"
    }else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com Obesidade severa!"
    }else {
        description = "Cuidado! Você está com Obesidade mórbida!"
    }

    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description;

});

function validarNumeroDecimal(input) {
    // Remove caracteres que não sejam números ou pontos
    input.value = input.value.replace(/[^0-9.]/g, '');

    // Certifica-se de que haja no máximo um ponto decimal na entrada
    var pontos = input.value.split('.').length - 1;
    if (pontos > 1) {
        input.value = input.value.replace(/\.+/, '.');
    }
}