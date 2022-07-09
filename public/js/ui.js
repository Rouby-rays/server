const name = 'vitebsk.furniland';



//Поле вывода текущего количества подписок
const followsNumberField = document.querySelector('#current-follows');

//Поле вывода текущего количества взаимных подписок
const currentMutFollowsField = document.querySelector('#current-mut-follows');

//Поле вывода текущего количества не взаимных подписок
const currentNotMutFollowsField = document.querySelector('#current-not-mut-follows');

//Поле вывода новых подписчиков
const newFollowersField = document.querySelector('#current-new-followers');

//Поле вывода количества отписавшихся
const currentUnfollowersField = document.querySelector('#current-unfollowers');



const profileName = document.querySelector('#profile-name');


// console.log('Подписчиков ' + followers.length);
console.log('Подписок: ' + follows.length);

//Вывод текущего количества подписок
followsNumberField.textContent = follows.length;

 //Вывод количества взаимных подписок
currentMutFollowsField.textContent = mutFollow.length;

 //Вывод количества не взаимных подписок
//  currentNotMutFollowsField.textContent = notMutFollows.length;

 //Вывод количества новых подписчиков
 newFollowersField.textContent = newFollowers.length;

  //Вывод количества отписавшихся
  currentUnfollowersField.textContent = unFollow.length;


 //Вывод количества отписавшихся

 let dary = []

fetch('./db/submit-follow.json')
  .then((response) => response.json())
  
  .then((data) => {
    // console.log(data);
    dary = Array.from(data.submit);
  })
  
// Вывод без взаимной подписки  
const toolsList = document.querySelector('.tools__list')


// for(let i = 0; i < notMutFollows.length; i++) {
//   const card = document.createElement('li')
//   card.classList.add('list-item')
//   card.innerHTML = `${notMutFollows[i]} <button class="remove-button" type="button"></button>`
  
// toolsList.append(card)
// }

// Вывод потенциальных подписчиков

let list = document.querySelector('.potencial__list')


for(let i = 0; i < potentFollow.length; i++) {
  const card = document.createElement('li')
  card.classList.add('list-item')
  card.innerHTML = `${potentFollow[i]}<button class="copy-button type="button"></button> <button class="remove-button" type="button"></button>`
  
list.append(card)
}

//Удаление элементов
const removeButtons = document.querySelectorAll('.remove-button')
for(removeButton of removeButtons) {
  removeButton.addEventListener('click', function () {
    this.parentNode.remove()
  })
}

//Копирование содержимого
const copyButtons = document.querySelectorAll('.copy-button')
for(copyButton of copyButtons) {
  copyButton.addEventListener('click', function() {
    this.parentNode.remove()
    const hash = this.parentNode.textContent.trim()
    
    navigator.clipboard
      .writeText(hash)
      .then(() => {
          // Успех!
      })
      .catch(() => {
          // Неудача :(
      });
    
  })  
}

