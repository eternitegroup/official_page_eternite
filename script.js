function irA(url) {
    window.location.href = url;
}

// Seleccionamos todas las tarjetas
const tarjetas = document.querySelectorAll('.tarjeta');

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('mouseenter', () => {
        const fondo = tarjeta.querySelector('.fondo');
        fondo.style.transform = 'scale(1.05)'; // zoom al pasar el mouse
    });

    tarjeta.addEventListener('mouseleave', () => {
        const fondo = tarjeta.querySelector('.fondo');
        fondo.style.transform = 'scale(1)'; // vuelve al tamaño normal
    });
});

// FUNCION SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

// Seleccionamos elementos que queremos animar
document.querySelectorAll('section, .tarjeta, .valor, .esfera, .btn').forEach(el => {
    el.classList.add('animate'); // inicializamos oculto
    observer.observe(el);
});
/*-------------------------------------------------------------------*/

/*Contacto*/

/*relojes*/
function goToLink(url) {
    window.location.href = url;
}

let currentCollection = "datejust";

function setCollection(type) {
    currentCollection = type;

    document.querySelectorAll(".watch-toggle button").forEach(btn => {
        btn.classList.remove("active");
    });

    event.target.classList.add("active");

    // Cambiar título H1 según colección
    const h1 = document.querySelector(".info-box h1");
    h1.textContent = type === "datejust" ? "Datejust" : "Daydate";

    // Cargar primer reloj por defecto
    if (type === "datejust") {
        changeWatch("dj_1");
    } else {
        changeWatch("dd_1");
    }
}

/*relojes-plantilla*/
function changeWatch(color) {
    const name = document.getElementById("watchName");
    const image = document.getElementById("watchImage");
    const h1 = document.querySelector(".info-box h1"); // define siempre
    image.style.opacity = "0";

    setTimeout(() => {
        switch (color) {
            case "black":
                name.textContent = "Panda";
                name.style.color = "#000000ff";
                image.src = "./relojes/daytona.webp";
                break;

            case "blue":
                name.textContent = "Panda black";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/daytona/negro.webp";
                break;

            case "gold":
                name.textContent = "Ice Blue";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/daytona/azul.png";
                break;

            case "red":
                name.textContent = "Rose Gold";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/daytona/rose.webp";
                break;
            /*sub */
            case "black_sub":
                name.textContent = "Black sub";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/1.png";
                break;
            case "greeny":
                name.textContent = "Greeny";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/2.png";
                break;

            case "smurf":
                name.textContent = "Smurf";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/3.png";
                break;

            case "bluephantom":
                name.textContent = "Blue Phantom";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/4.png";
                break;

            case "panter":
                name.textContent = "Panter";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/5.png";
                break;

            case "hulk":
                name.textContent = "Hulk";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/6.png";
                break;

            case "starbucks":
                name.textContent = "Starbucks";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/7.png";
                break;

            case "bluesy":
                name.textContent = "Bluesy";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/8.png";
                break;

            case "sky":
                name.textContent = "Sky Edition";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sub/9.png";
                break;
        
        /*GMT */
            case "batman":
                name.textContent = "Batman";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/1.png";
                break;

            case "brucewayne":
                name.textContent = "Bruce Wayne";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/2.png";
                break;

            case "joker":
                name.textContent = "Joker";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/3.png";
                break;

            case "pepsi":
                name.textContent = "Pepsi";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/4.png";
                break;

            case "coke":
                name.textContent = "Coke";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/5.png";
                break;

            case "sprite":
                name.textContent = "Sprite";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/6.png";
                break;

            case "bluemonarch":
                name.textContent = "Blue Monarch";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/7.png";
                break;

            case "goldwayne":
                name.textContent = "Gold Wayne";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/8.png";
                break;

            case "rootbear":
                name.textContent = "Root Bear";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/gmt/9.png";
                break;
            /*na */
            case "desert_mirage":
                name.textContent = "Desert Mirage";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/1.png";
                break;

            case "rose_panther":
                name.textContent = "Rose Panther";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/2.png";
                break;

            case "chocolate_wave":
                name.textContent = "Chocolate Wave";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/3.png";
                break;

            case "shadow":
                name.textContent = "Shadow";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/4.png";
                break;

            case "poseidon":
                name.textContent = "Poseidon";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/5.png";
                break;

            case "tiffany_blue":
                name.textContent = "Tiffany Blue";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/6.png";
                break;

            case "green_light":
                name.textContent = "Green Light";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/7.png";
                break;

            case "silver_surfer":
                name.textContent = "Silver Surfer";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/na/8.png";
                break;

            case "black_panther":
                name.textContent = "Black Panther";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/na/9.png";
                break;
          /* DATEJUST */
            case "dj_1":
                name.textContent = "Blue";
                name.style.color = "#000000ff";
                image.src = "relojes/pantilla de relojes/da/datejust/1.png";
                h1.textContent = "Datejust";
                break;
            case "dj_2":
                name.textContent = "Ice Blue";
                name.style.color = "#000000ff";
                image.src = "relojes/pantilla de relojes/da/datejust/2.png";
                h1.textContent = "Datejust";
                break;
            case "dj_4":
                name.textContent = "Mint Green";
                name.style.color = "#000000ff";
                image.src = "relojes/pantilla de relojes/da/datejust/3.png";
                h1.textContent = "Datejust";
                break;
            case "dj_6":
                name.textContent = "Black Classic";
                name.style.color = "#000000";
                image.src = "relojes/pantilla de relojes/da/datejust/4.png";
                h1.textContent = "Datejust";
                break;

            /* DAYDATE */
            case "dd_1":
                name.textContent = "Blue";
                name.style.color = "#000000ff";
                image.src = "relojes/pantilla de relojes/da/day/5.png";
                h1.textContent = "Daydate";
                break;
            case "dd_4":
                name.textContent = "Ice Blue";
                name.style.color = "#000000ff";
                image.src = "relojes/pantilla de relojes/da/day/6.png";
                h1.textContent = "Daydate";
                break;
            case "dd_2":
                name.textContent = "Mint Green";
                name.style.color = "#000000ff";
                image.src = "relojes/pantilla de relojes/da/day/7.png";
                h1.textContent = "Daydate";
                break;
            case "dd_6":
                name.textContent = "Black Classic";
                name.style.color = "#000000";
                image.src = "relojes/pantilla de relojes/da/day/8.png";
                h1.textContent = "Daydate";
                break;

            /* ROYAL OAK */
            case "gold_ro":
                name.textContent = "Gold";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/1.png";
                h1.textContent = "Royal Oak";
                break;

            case "black_ro":
                name.textContent = "Black";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/2.png";
                h1.textContent = "Royal Oak";
                break;

            case "chronograph_blue":
                name.textContent = "Chronograph Blue";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/3.png";
                h1.textContent = "Royal Oak";
                break;

            case "blue_ice_ro":
                name.textContent = "Blue Ice";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/4.png";
                h1.textContent = "Royal Oak";
                break;

            case "chrono_green":
                name.textContent = "Chrono Green";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/5.png";
                h1.textContent = "Royal Oak";
                break;

            case "white_ro":
                name.textContent = "White";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/6.png";
                h1.textContent = "Royal Oak";
                break;

            case "rose_gold_white":
                name.textContent = "Rose Gold White";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/7.png";
                h1.textContent = "Royal Oak";
                break;

            case "chrono_panda":
                name.textContent = "Chrono Panda";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/8.png";
                h1.textContent = "Royal Oak";
                break;

            case "pink_ro":
                name.textContent = "Pink";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/ro/9.png";
                h1.textContent = "Royal Oak";
                break;
            /*santos*/
            case "white_sa":
                name.textContent = "White";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/sa/1.png";
                break;

            case "black_sa":
                name.textContent = "Black";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sa/2.png";
                break;

            case "silvergold_sa":
                name.textContent = "Silver + Gold";
                name.style.color = "#000000";
                image.src = "./relojes/pantilla de relojes/sa/3.png";
                break;

            case "green_sa":
                name.textContent = "Green";
                name.style.color = "#000000ff";
                image.src = "./relojes/pantilla de relojes/sa/4.png";
                
                break;
            
            case "ninefive":
                name.textContent = "9 - 5 EDITION";
                name.style.color = "#000000ff"; // contraste sobre gris
                image.src = "./relojes/pantilla de relojes/sa/5.png";
                break;

                
        }
        

                    image.style.opacity = "1";
                }, 300);
            }

/* ===== ZOOM SIGUIENDO EL RATÓN ===== */
const zoomContainer = document.getElementById("zoomContainer");
const zoomImage = document.getElementById("watchImage");

zoomContainer.addEventListener("mousemove", (e) => {
    const rect = zoomContainer.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    zoomImage.style.transformOrigin = `${x}% ${y}%`;
    zoomImage.style.transform = "scale(1.8)";
});

zoomContainer.addEventListener("mouseleave", () => {
    zoomImage.style.transformOrigin = "center";
    zoomImage.style.transform = "scale(1)";
});

function mostrarServicio(servicioId) {
    // Ocultar todos los servicios
    const servicios = document.querySelectorAll('.servicio-contenido');
    servicios.forEach(servicio => servicio.classList.remove('activo'));

    // Quitar estado activo de botones
    const botones = document.querySelectorAll('.servicio-btn');
    botones.forEach(boton => boton.classList.remove('active'));

    // Mostrar servicio seleccionado
    const seleccionado = document.getElementById(servicioId);
    if (seleccionado) seleccionado.classList.add('activo');

    // Activar botón correspondiente
    const boton = document.querySelector(`.servicio-btn[onclick="mostrarServicio('${servicioId}')"]`);
    if (boton) boton.classList.add('active');
}

function irA(url) {
    const [page, hash] = url.split('#');
    if (hash) {
        // Actualizar la URL con el hash
        window.location.hash = hash;
        mostrarServicio(hash);
        // Opcional: hacer scroll al contenedor de servicios
        const servicioCard = document.querySelector('.servicio-card');
        if (servicioCard) servicioCard.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Si no hay hash, solo redirigir a la página
        window.location.href = url;
    }
}

// Ejecutar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        mostrarServicio(hash);
        const servicioCard = document.querySelector('.servicio-card');
        if (servicioCard) servicioCard.scrollIntoView({ behavior: 'smooth' });
    }
});


// Animación Fade-In al hacer scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Función para navegación (ejemplo)
function irA(url){
    window.location.href = url;
}















