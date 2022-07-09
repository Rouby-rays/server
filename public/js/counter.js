
let searchFoll = '';

// Поиск взаимных подписок путём перебора двух массивов
let mutFollow = [];                                                              //Массив взаимных подписок
for(let i = 0; i <= follows.length; i++) {
  for(let a = 0; a <= followersCurrent.length; a++) {
  searchFoll = followers[a];
  if(follows[i] === followers[a]) {
    mutFollow.push(followers[i]);
  }
 }
};

// Поиск потенциалых подписчиков
//Изменить массив на нужный
let testArray = [];
aks_followers.forEach( function (element) {
    if ( !~follows.indexOf(element) ) testArray.push(element)
});

let testArray2 = [];
testArray.forEach( function (element) {
    if ( !~followersCurrent.indexOf(element) ) testArray2.push(element)
});

let potentFollow = []
testArray2.forEach( function (element) {
    if ( !~deleted.indexOf(element) ) potentFollow.push(element)
});

console.log('Потенциальные подписчики: ' + potentFollow.length + ' ' + potentFollow)

//Отписавшиеся
let unFollow = followers.filter(n => followersCurrent.indexOf(n) === -1);
console.log('Отписался: ' + unFollow);

// Новые подписчики
let newFollowers = [];
followersCurrent.forEach( function (element) {
    if ( !~followers.indexOf(element) ) newFollowers.push(element)
});

console.log('Новые подписчики: ' + newFollowers)


/**Удаление повторяющихся элементов из массива */
const uniqueSet = new Set(deleted);
const backToArray = [...uniqueSet];
console.log(backToArray)