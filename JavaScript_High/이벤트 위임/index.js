// 이벤트 위임 - 부모 요소에 이벤트를 설정해도 자식 요소로 간다.
const list = document.querySelector('#list');

list.addEventListener('click', function(e) {
    //if(e.target.tagName == 'li')
    if ( e.target.classList.contains('item')) {
      e.target.classList.toggle('done');
    }
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);

