const images = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];
const targetImage = document.querySelector('.mdvp-image img');
let i = 1;
app = Flask(__name__)

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        if (i === images.length - 1) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 200);

//shift + alt + F

});

// JSON-ist andmete laadimine ja HTML-i lisamine
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Lisa nimi
    const nimiElem = document.querySelector('.mark-sazonov');
    if (nimiElem) {
      nimiElem.textContent = `${data.eesnimi} ${data.perekonnanimi}`;
    }

    // Lisa e-mail
    const emailElem = document.querySelector('.mark-sazonov-tallink-ee');
    if (emailElem) {
      emailElem.textContent = data.email;
    }

    // Lisa keeled
    const keeledElem = document.querySelector('.group-44'); // või '.keeled2' kui tahad teise kohta
    if (keeledElem && data.keeled) {
      data.keeled.forEach(keel => {
        const div = document.createElement('div');
        div.textContent = keel;
        keeledElem.appendChild(div);
      });
    }

    // Lisa tehnilised oskused (näide)
    const oskusedElem = document.querySelector('.group-42');
    if (oskusedElem && data.oskused) {
      data.oskused.forEach(oskus => {
        const div = document.createElement('div');
        div.textContent = oskus;
        oskusedElem.appendChild(div);
      });
    }
  });
