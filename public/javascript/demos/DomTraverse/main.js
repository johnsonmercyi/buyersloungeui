document.addEventListener("DOMContentLoaded", function(event) {
  const html = document.getElementsByTagName('html')[0];
  const head = document.getElementsByTagName('head')[0];
  const body = document.getElementsByTagName('body')[0];

  const title = document.createElement('title');
  title.innerHTML = "Demo Title";
  head.appendChild(title);


  const h2 = document.createElement('h2');
  h2.innerHTML = "Writing html with Javascript! ";
  // h2.hidden = true;
  // h2.setAttribute('hidden', true);

  body.appendChild(h2);

  const button = document.createElement('button');
  button.innerHTML = "Click me!";

  button.onclick = ()=> {
    alert("Hey I'm clicked!");
  }

  if (head.childElementCount) {
    head.firstElementChild.innerHTML = "Here!"
  }
  // body.appendChild(button);

  console.log(head.parentNode);
});