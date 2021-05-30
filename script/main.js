let button = document.getElementById('click-me-button');
button.addEventListener('click', changeBackgroundColor);

let colorName = document.getElementById('color-name');

window.onload = function () {
    changeBackgroundColor();
};

/**
 * Устанавливает цвет страницы в зависимости выбранного типа цвета
 *
 */
function changeBackgroundColor() {
    let pageColor = '';
    if (document.getElementById('simple').checked) {
        pageColor = simpleColors();
    }
    if (document.getElementById('hex').checked) {
        pageColor = hexColors();
    }

    document.body.style.background = pageColor;
    button.style.background = pageColor;
    colorName.innerHTML = pageColor;
}

/**
 * Возвращает случайный индекс массива
 *
 * @param {number} arrayLength длина массива
 * @return {number} случайный индекс массива.
 */
function randomArrayElementIndexGenerator(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

/**
 * Возвращает название случайного простого цвета из массива
 *
 * @return {string} случайный простой цвет.
 */
function simpleColors() {
    let simpleColors = ['pink', 'crimson', 'red', 'maroon', 'brown', 'rose', 'salmon', 'coral', 'orangered', 'chocolate', 'orange', 'gold', 'ivory', 'yellow', 'olive', 'yellowgreen', 'lawngreen', 'chartreuse', 'lime', 'green', 'springgreen', 'aquamarine', 'turquoise', 'azure', 'aqua', 'teal', 'lavender', 'blue', 'navy', 'blueviolet', 'indigo', 'darkviolet', 'plum', 'magenta', 'purple', 'mediumvioletred'];

    let randomIndex = randomArrayElementIndexGenerator(simpleColors.length);
    return simpleColors[randomIndex];
}

/**
 * Возвращает название случайного веб цвета
 *
 * @return {string} случайный веб цвет.
 */
function hexColors() {
    let lettesAndNumerals = [['a', 'b', 'c', 'd', 'e', 'f'], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]];
    let hexColorName = '#';
    for (let index = 0; index < 6; index++) {
        let randomArray = randomArrayElementIndexGenerator(lettesAndNumerals.length);
        let randomArrayElementIndex = randomArrayElementIndexGenerator(lettesAndNumerals[randomArray].length);
        hexColorName = hexColorName + lettesAndNumerals[randomArray][randomArrayElementIndex];
    }

    return hexColorName;
}