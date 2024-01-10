document.addEventListener("DOMContentLoaded", function (event) {
  const container = document.querySelector(".show-date h2");
  setInterval(()=> {
    const date = new Date();
    container.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    
  }, 1000);
});