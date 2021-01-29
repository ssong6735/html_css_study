

const $btn = document.querySelector('#change'); //id가 change인 것의 내용을 btn에 저장
const $pet = document.querySelector('#my-pet'); //id가 my-pet인 것의 내용을 pet에 저장

$btn.addEventListener('click', e => {
    $pet.textContent = '못난이 거북이!';
});