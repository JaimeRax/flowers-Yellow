onload = () =>{
        document.body.classList.remove("container");
};

 window.addEventListener('load', function() {
            const audio = document.getElementById('flowerMusic');
            audio.play().catch(function(error) {
                console.log("Reproducción automática bloqueada, por favor interactúa con la página.");
            });
        });
