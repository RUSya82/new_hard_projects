/*
* В уроке№8 можно перекинуть усложнённое задание в основное, т.к. не такое уж оно и сложное
* А в качестве усложнёнки прикрепить следующее задание
* ЗАДАНИЕ:
* 1. Есть массив игроков с результатами последних 8 боёв. Сформировать массив объектов gamersRating следующего вида:
* [
*   {
*       gamerName: 'Gendalf',
*       tank: 'T34',
*       finalPoints: 10235
*   },
*   {
*       gamerName: 'Aragorn',
*       tank: 'Tiger-II',
*       finalPoints: 8652
*   },
* ]
* Финальное количество очков считать по следующим правилам:
* - сумма очков по всем боям(массив points), плюс по 500 очков за каждый фраг(массив frags), при наличии
* премиум аккаунта сумма очков увеличивается на 30% с округлением в меньшую сторону.
* 2. Отсортировать gamersRating по убыванию количества очков, то есть, чтобы первым был объект самого результативного игрока.
* 3. Вывести его в консоль
* 4. С помощью prompt запросить у пользователя имя игрока
* Если в массиве gamersRating найден игрок с таким именем, то вывести в alert строку вида:
* "user: Gendalf, points: 12325, rating: 2"
* Если не найден, то вывести "Такой игрок не найден"
* */
const gamers = [
    {
        name: "Gendalf",
        tank: 'T34',
        points: [325, 6532, -452, -32, 6587, -1254, 325, 1254],
        frags: [0, 4, 0, 0, 3, 1, 0, 1],
        premium: true
    },
    {
        name: "Saruman",
        tank: 'IS-7',
        points: [2365, 4215, 325, 5256, -124, -1254, 2541, -1],
        frags: [1, 3, 0, 4, 0, 0, 1, 0],
        premium: false
    },
    {
        name: "Aragorn",
        tank: 'Tiger-II',
        points: [-451, 1254, 659, 215, 3654, -56, 5640, -124],
        frags: [1, 0, 1, 1, 3, 0, 3, 1],
        premium: true
    },
    {
        name: "Frodo",
        tank: 'ИСУ-152',
        points: [-235, 1234, -235, 6982, -1230, 2365, -456, 2235],
        frags: [0, 1, 1, 2, 0, 1, 1, 1],
        premium: false
    }
]
const gamersRating = [];
gamers.forEach(item => {
    let resultPoints = item.points.reduce((sum, item) => sum + item, 0);//тут пощупают reduce
    resultPoints += Math.floor(item.frags.reduce((sum, item) => sum + item, 0) * 500);
    if(item.premium){
        resultPoints = Math.floor(resultPoints * 1.3);
    }
    gamersRating.push({     //тут push
        name: item.name,
        tank: item.tank,
        points: resultPoints
    })
});
gamersRating.sort((a, b) => b.points - a.points)
console.log(gamersRating);
let userName = prompt("Введите имя игрока");
let index = gamersRating.findIndex((item) => item.name === userName);//тут можно через find или findIndex
if(index !== -1){
    alert(`user: ${gamersRating[index].name}, points: ${gamersRating[index].points}, rating: ${index + 1}`);
} else {
    alert('User not found');
}
