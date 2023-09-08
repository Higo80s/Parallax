function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    let yOffset = window.scrollY;
    
    // Mova os elementos com classe 'parallax-inner' com base no deslocamento vertical
    select('.parallax-inner').position(0, -yOffset * 0.2); // Ajuste o fator de paralaxe conforme necessário
}
