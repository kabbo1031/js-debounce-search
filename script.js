let timer;

document.getElementById('search').addEventListener('input', e=>{
  clearTimeout(timer);

  timer = setTimeout(()=>{
    search(e.target.value);
  }, 500);
});

function search(text){
  const list = document.getElementById('list');
  list.innerHTML = '';

  if(!text) return;

  for(let i=1; i<=5; i++){
    const li = document.createElement('li');
    li.innerText = text + ' result ' + i;
    list.appendChild(li);
  }
}
