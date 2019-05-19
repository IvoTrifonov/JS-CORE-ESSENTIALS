function growingWord() {
  let p = document.getElementsByTagName("p")[2];
  
  if (p.style.color === 'red') {
    p.style.color = 'blue';
  } else if (p.style.color === 'blue') {
    p.style.color = 'green';
  } else if (p.style.color === 'green') {
    p.style.color = 'red';
  } else {
    p.style.color = 'blue';
  }

  p.clicks = p.clicks + 1 || 1;
  p.style.fontSize = `${2 ** p.clicks}px`;
}
