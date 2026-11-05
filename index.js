let question=1;
let score=0;
let selected=null;

function selectAnswer(button){
    if (selected){
        selected.classList.remove('selected')
    }

    selected=button;

    selected.classList.add('selected');

    document.querySelector(
    "#question" + question + " .check-button"
  ).disabled = false;

  let correct= page.querySelector('.correct');
  let page=document.getElementById('question'+'question');

  if (selected==correct){
    score++;
  }
  else{
    selected.classList.add('wrong');
  }

}