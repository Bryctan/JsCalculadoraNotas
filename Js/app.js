const btnCalculate = document.querySelector('#calcular')
const notes = document.querySelectorAll('input');
const message = document.querySelector('#result')
const strong = document.querySelector('strong')
const calculator = document.querySelector('.calculator')

let elementParagraph;

function calculate() {

    let result = 0;
    let message;
    
    
    elementParagraph.textContent = "";

    if (notes[0].value && notes[1].value && notes[2].value && notes[3].value) {
        if (Number(notes[1].value) <= 5 && Number(notes[1].value) >= 1
            && Number(notes[2].value) <= 5 && Number(notes[2].value) >= 1
            && Number(notes[3].value) <= 5 && Number(notes[3].value) >= 1) {
            
            result = Number(notes[1].value) * 0.3 + Number(notes[2].value) * 0.3 + Number(notes[3].value) * 0.4
            strong.textContent = result;
            

            message = result >= 3.5 ? { position: 'center', icon: 'success', title: `El estudiante ${notes[0].value} aprobo la materia`, showConfirmButton: false, timer: 1500 } :
                { position: 'center', icon: 'error', title: `El estudiante ${notes[0].value} reprobo la materia`, showConfirmButton: false, timer: 1500 }
            Swal.fire(message)

            if (result >= 3.5) {
                strong.style.color = 'green';
                elementParagraph.textContent = `¡Felicidades ${ notes[0].value } por tu éxito en la materia!`;
                elementParagraph.style.color = 'green';
                
            } else {
                strong.style.color = 'red';
                elementParagraph.textContent = `No te desanimes ${ notes[0].value }, de los errores se aprende.`;
                elementParagraph.style.color = 'red';
            }

        } else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Las notas no son validas , el rango debe ser entre 1.0 y 5.0',
                showConfirmButton: false,
                timer: 1500
            })
            strong.textContent = "";
        }
    }
    else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Los campos no pueden ser vacios',
            showConfirmButton: false,
            timer: 1500
        })
        strong.textContent = "";
    }
    
}

btnCalculate.addEventListener('click', () => {
    calculate();
});

window.addEventListener('load', function() {

    elementParagraph = document.createElement('p');
    calculator.appendChild(elementParagraph)
});








