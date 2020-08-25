const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];

employers.forEach(employer => {
    if (employer.trim() != '') {
        employer = employer.toLowerCase().trim();
        employer = employer[0].toUpperCase() + employer.slice(1);
        command.push(employer);
    }
});


const data = {
    cash: [3, 8, 3],
    react: ['JSX', 'components', 'props', 'state', 'hooks'],
    add: ['styled-components', 'firebase']
};

const calcCash = (...arg) => {
    let everyCash = [...arg][1];
    let total = 0;

    everyCash.forEach(item => {
        total += +item;
    });

    return total;
}

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
    teacher = teacher || 'Максим';
    let sumTech = data.react.concat(data.add, 'и другие');
    console.log(`Стартует новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}.`);
    console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
    console.log(`Технологии которые мы изучим: `);
    console.log.apply(null, sumTech);
}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse]);
