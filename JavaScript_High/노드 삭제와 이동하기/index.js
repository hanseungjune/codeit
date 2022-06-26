// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기
// tomorrow.remove();
// today.children[2].remove();

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[2]);
// tomorrow.children[1].after(today.children[1]);
// tomorrow.children[2].before(today.children[1]);
// tomorrow.lastElementChild.before(today.children[1]);