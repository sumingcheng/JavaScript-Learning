var list = document.getElementsByTagName('ul')[0],
    frag = document.createDocumentFragment();

for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    li.innerHTML = '123';
    frag.appendChild(li);
}

list.appendChild(frag);