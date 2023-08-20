let img = document.getElementsByClassName('imagecode');

img.addEventListener("error", (event) => {
    this.src = '/assets/img/imgnonexist.png';
    this.style = 'border: solid 6px rgba(255,50,50,0.8);';
});