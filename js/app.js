const app=document.getElementById('typewriter');
const typewriter = new Typewriter(app,{
    loop:true//,
    //delat:3
});

typewriter
    .typeString('¡Hola! Soy Jesus Llanos,')
    .changeDelay(1)
    .pauseFor(8000)
    .start();