let value = +prompt('Введите число');

if (typeof(value) === 'number' && value) {
    (value % 2 === 0) ? console.log(`Число ${value} - четное`)
                    : console.log(`Число ${value} - нечетное`);
} else {
    console.log('Упс, кажется, вы ошиблись');
}