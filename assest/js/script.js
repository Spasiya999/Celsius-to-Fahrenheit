function celToFa(val){
  let out = val*9;
  out /= 5;
  out += 32;
  return out;
}

function conAndFa(){
  let out = document.querySelector('#conCel');
  out.innerHTML = celToFa(temp.value);
}

const convertBtn = document.querySelector('#tempBtn');
const temp = document.querySelector('#temp');
convertBtn.addEventListener('click', conAndFa);