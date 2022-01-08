let X = prompt('Введите значение', '');

if (typeof(+X) === 'number' && +X) {
    console.log(`${X} - число`);
} else if (typeof(X) === 'string' && X != '') {
    console.log(`${X} - строка`);
} else if (!X) {
    console.log(`${X} - логический тип`);
} else {
    console.log(`Тип ${X} не определен`);
}