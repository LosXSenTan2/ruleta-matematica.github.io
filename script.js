let userScore = 0;
let numHits = 0; // Variable para contar aciertos
const startButton = document.getElementById('start');
const gameDiv = document.getElementById('game');
const problemP = document.getElementById('problem');
const answerButtons = Array.from(document.getElementsByClassName('answer'));
const instructionsDiv = document.getElementById('instructions');
const scoreDiv = document.getElementById('score');
const continueButton = document.getElementById('continue');
const finishButton = document.getElementById('finish');
const videoContainer = document.getElementById('video-container');

startButton.addEventListener('click', startGame);
continueButton.addEventListener('click', generateProblem);
finishButton.addEventListener('click', showFinalScreen);

function startGame() {
    startButton.style.display = 'none';
    answerButtons.forEach(button => button.disabled = false);
    gameDiv.style.display = 'block';
    userScore = 0;
    numHits = 0; // Reiniciar el contador de aciertos
    scoreDiv.textContent = 'Puntuación: ' + userScore;
    generateProblem();
}

function generateProblem() {
    const problemas = [
        {
            pregunta: '¿Cuál es la derivada de f(x) = 2x^3?',
            respuestas: [
                'a. f\'(x) = 6x^2',
                'b. f\'(x) = 2x^2',
                'c. f\'(x) = 3x^2',
                'd. f\'(x) = 4x^2'
            ],
            respuestaCorrecta: 0,
            instrucciones: 'Para calcular la derivada de una función polinómica, multiplica el coeficiente del término por el exponente y reduce el exponente en 1.',
            videoUrl: 'https://www.youtube.com/embed/-PjdQi5Foio'
        },
        {
            pregunta: '¿Cuál es el límite de f(x) = 5x^2 + 3x - 2 cuando x tiende a 2?',
            respuestas: [
                'a. 13',
                'b. 24',
                'c. 19',
                'd. 17'
            ],
            respuestaCorrecta: 1,
            instrucciones: 'Para calcular el límite de una función en un punto, evalúa la función en ese punto o utiliza propiedades y reglas de límites.',
            videoUrl: 'https://www.youtube.com/embed/nTaiyaoyJhw'
        },
        {
            pregunta: 'Encuentra la derivada de la función f(x) = 3x^2 - 2x + 1.',
            respuestas: [
                'a) f\'(x) = 6x - 2x + 1',
                'b) f\'(x) = 3x^2 - 2x',
                'c) f\'(x) = 3x - 2',
                'd) f\'(x) = 6x - 2'
            ],
            respuestaCorrecta: 3,
            instrucciones: '1. Usa la regla de potencias para derivar término por término.\n2. Deriva cada término de la función dada f(x) = 3x^2 - 2x + 1 por separado. La derivada de 3x^2 es 6x, la derivada de -2x es -2, y la derivada de 1 (una constante) es 0.\n3. Combina los resultados de las derivadas de cada término para obtener la derivada de la función completa. En este caso, la derivada de f(x) = 3x^2 - 2x + 1 es f\'(x) = 6x - 2.',
            videoUrl: 'https://www.youtube.com/embed/RBN1HeRmZlc'
        },
        {
            pregunta: 'Encuentra la derivada de la función f(x) = e^x, utilizando la definición de derivada.',
            respuestas: [
                'a) f\'(x) = e',
                'b) f\'(x) = xe',
                'c) f\'(x) = e^x',
                'd) f\'(x) = 1/e^x'
            ],
            respuestaCorrecta: 2,
            instrucciones: '1. Utiliza la definición de derivada por definición: La derivada de una función f(x) en un punto x se define como el límite cuando h tiende a cero de la expresión [f(x + h) - f(x)] / h.\n2. Sustituye la función dada en la definición de derivada por definición: f(x) = e^x, f(x + h) = e^(x + h).\n3. Sustituye estos valores en la expresión de la derivada por definición: [f(x + h) - f(x)] / h = [e^(x + h) - e^x] / h.\n4. Simplifica la expresión: [e^(x + h) - e^x] / h = [e^x * e^h - e^x] / h = e^x * [e^h - 1] / h.\n5. Toma el límite cuando h tiende a cero: Lim(h->0) [e^x * [e^h - 1] / h] = e^x * [1 - 1] / 0 = e^x.',
            videoUrl: 'https://www.youtube.com/embed/Yo6LwDxj7_w'
        },
        {
            pregunta: 'Encuentra la derivada de la función f(x) = cos^2(x) - sin^2(x).',
            respuestas: [
                'a) f\'(x) = -2cos(x)sin(x)',
                'b) f\'(x) = 2cos(x)sin(x)',
                'c) f\'(x) = -2cos(x)-sin(x)',
                'd) f\'(x) = 2cos(x)/sin(x)'
            ],
            respuestaCorrecta: 0,
            instrucciones: '1. Utiliza las identidades trigonométricas para expresar cos^2(x) y sin^2(x) en términos de cos(2x).\n2. Deriva la función f(x) = cos(2x).\n3. Utiliza las propiedades de las derivadas de funciones compuestas y aplica la regla de la cadena.\n4. Simplifica la expresión obtenida para obtener la derivada de la función f(x) = cos^2(x) - sin^2(x).\n5. El resultado es f\'(x) = -2cos(x)sin(x).',
            videoUrl: 'https://www.youtube.com/embed/fmUgdAECwlA'
        },
        {
            pregunta: "Calcula el límite de la función h(x) = (x^2 - 4) / (x - 2) cuando x tiende a 2.",
            respuestas: [
                "a) 0",
                "b) 1",
                "c) 2",
                "d) No existe"
            ],
            respuestaCorrecta: 3,
            instrucciones: "1. Intenta simplificar la expresión factorizando el numerador o el denominador, si es posible.\n2. Si la expresión no se puede simplificar, utiliza métodos de límites como la sustitución directa o las propiedades de los límites.\n3. Sustituye el valor al cual x tiende en la función h(x) simplificada.\n4. Si obtienes una forma indeterminada como 0/0 o ∞/∞, aplica técnicas de cálculo de límites como la regla de L'Hôpital o la factorización.\n5. Si después de aplicar técnicas de cálculo de límites aún obtienes una forma indeterminada, el límite no existe.\n6. En este caso, el límite de h(x) cuando x tiende a 2 no existe.",
            videoUrl: 'https://www.youtube.com/embed/lv7sONoclwM'
        },
        {
            pregunta: "Calcula el límite de la función f(x) = 3x^2 / (2x^2 - 5) cuando x tiende a infinito.",
            respuestas: [
                "a) 0",
                "b) 1",
                "c) 2",
                "d) No existe"
            ],
            respuestaCorrecta: 1,
            instrucciones: "1. Observa los términos de mayor grado en el numerador y en el denominador.\n2. Si los términos de mayor grado son iguales, divide todos los términos por la variable con el mayor exponente.\n3. Si los términos de mayor grado son diferentes, el límite será ∞ o -∞ dependiendo de los coeficientes.\n4. Sustituye infinito en la función f(x) simplificada.\n5. El resultado obtenido es el límite de la función f(x) cuando x tiende a infinito.\n6. El resultado es 1.",
            videoUrl: 'https://www.youtube.com/embed/YijB5BhcFw8'
        },
        {
            pregunta: "Encuentra la derivada de la función g(x) = e^x * sin(x).",
            respuestas: [
                "a) g'(x) = e^x * cos(x)",
                "b) g'(x) = e^x * cos(x) + e^xsin(x)",
                "c) g'(x) = e^x * (cos(x) - e^xsin(x))",
                "d) g'(x) = e^x * (cos(x) - cos(x))"
            ],
            respuestaCorrecta: 1,
            instrucciones: "1. Utiliza las reglas de derivación para cada término de la función.\n2. La derivada de e^x es e^x.\n3. La derivada de sin(x) es cos(x).\n4. Aplica las reglas de multiplicación y suma para obtener la derivada completa de la función.\n5. El resultado es g'(x) = e^x * cos(x) + e^xsin(x).",
            videoUrl: 'https://www.youtube.com/embed/nTY64wRlczA'
        },
        {
            pregunta: "Encuentra la derivada de y con respecto a x para la ecuación x^2 + y^2 = 25.",
            respuestas: [
                "a) dy/dx = -x/y",
                "b) dy/dx = -y/x",
                "c) dy/dx = x/y",
                "d) dy/dx = y/x"
            ],
            respuestaCorrecta: 0,
            instrucciones: "1. Diferencia ambos lados de la ecuación con respecto a x aplicando la regla de la cadena.\n2. Para derivar y^2, utiliza la regla de la potencia.\n3. Para derivar x^2, utiliza la regla de la potencia.\n4. Agrupa los términos con dy/dx en un lado de la ecuación y los términos sin dy/dx en el otro lado.\n5. Divide ambos lados de la ecuación por y para obtener dy/dx aislada.\n6. El resultado es dy/dx = -x/y.",
            videoUrl: 'https://www.youtube.com/embed/RAzsJFsIzzQ'
        },
        {
            pregunta: "Encuentra la derivada de y con respecto a x para la función y = tan(3x).",
            respuestas: [
                "a) dy/dx = 3sec^2(3x)",
                "b) dy/dx = 3sec(3x)",
                "c) dy/dx = 3cos^2(3x)",
                "d) dy/dx = 3cos(3x)"
            ],
            respuestaCorrecta: 0,
            instrucciones: "1. Utiliza la regla de la cadena para derivar la función compuesta.\n2. La derivada de tan(u) es sec^2(u), donde u es una función de x.\n3. Aplica la regla de la cadena y la derivada del factor multiplicativo para obtener la derivada completa.\n4. El resultado es dy/dx = 3sec^2(3x).",
            videoUrl: 'https://www.youtube.com/embed/dD-ncnBiq3g'
        },
        {
            pregunta: "Encuentra la derivada de y con respecto a x para la función y = sin(2x).",
            respuestas: [
                "a) dy/dx = 2cos(2x)",
                "b) dy/dx = 2sin(2x)",
                "c) dy/dx = cos(2x)",
                "d) dy/dx = sin(2x)"
            ],
            respuestaCorrecta: 0,
            instrucciones: "1. Utiliza la regla de la cadena para derivar la función compuesta.\n2. La derivada de sin(u) es cos(u), donde u es una función de x.\n3. Aplica la regla de la cadena y la derivada del factor multiplicativo para obtener la derivada completa.\n4. El resultado es dy/dx = 2cos(2x).",
            videoUrl: 'https://www.youtube.com/embed/iJEICRUgRok'
        },
        {
            pregunta: "Encuentra la derivada de y con respecto a x para la ecuación x^2 + y^2 = sin(x).",
            respuestas: [
                "a) dy/dx = (-2x - cos(x))/(2y)",
                "b) dy/dx = (-2x + cos(x))/(2y)",
                "c) dy/dx = (2x - cos(x))/(2y)",
                "d) dy/dx = (2x + cos(x))/(2y)"
            ],
            respuestaCorrecta: 1,
            instrucciones: "1. Diferencia ambos lados de la ecuación con respecto a x aplicando la regla de la cadena.\n2. Para derivar y^2, utiliza la regla de la potencia.\n3. Para derivar sin(x), utiliza la regla de la derivada de la función seno.\n4. Agrupa los términos con dy/dx en un lado de la ecuación y los términos sin dy/dx en el otro lado.\n5. Divide ambos lados de la ecuación por 2y para obtener dy/dx aislada.\n6. El resultado es dy/dx = (-2x - cos(x))/(2y).",
            videoUrl: 'https://www.youtube.com/embed/xuw3lbkEJ0o'
        },
        {
            pregunta: 'Encuentra la ecuacion de la recta tangente de la funcion f(x) = 2x + 2.',
            respuestas: [
                'a) f\'(x) = 2x',
                'b) f\'(x) = 2x^2-8',
                'c) f\'(x) = 2x-3',
                'd) f\'(x) = x^2-4'
            ],
            respuestaCorrecta: 2,
            instrucciones: '1. La derivada de una función lineal como f(x) = 2x + 2, en este caso es 2. La pendiente de la función es 2..\n2. Para encontrar la ecuación de la recta tangente en el punto (1,-1) con pendiente 2, podemos utilizar la forma punto-pendiente de la ecuación de una recta: y-y1=m(x-x1).\n3. Sustituyendo y1= -1, x1= 1, m= 2.\n4. y-(-1)= 2(x-1)   y+1=2x-2    y=2x-3\n5. El resultado es f\'(x) = 2x-3.',
            videoUrl: 'https://www.youtube.com/embed/zaREJCoBR5M'
        },
        {
            pregunta: 'Encuentra el mínimo valor de la función f(x) = x^3(x) - 6x^2 + 9x. En el intervalo [−1,3]',
            respuestas: [
                'a) f\'(x) = 1',
                'b) f\'(x) = 2',
                'c) f\'(x) = -2',
                'd) f\'(x) = 0'
            ],
            respuestaCorrecta: 3,
            instrucciones: '1. Para encontrar el mínimo valor, primero encontramos la derivada de la función: f\'(x)= 3x^2 -12x +9 \n2. Igualamos la derivada a cero para encontrar los puntos críticos: 0 = 3x^2 -12x +9\n3. Evaluamos la función en los extremos del intervalo y en el punto crítico: f(-1)= 16, f(3)= 0 y f(1)= 4\n4. El mínimo valor de la función en el intervalo  [−1,3] es 0',
            videoUrl: 'https://www.youtube.com/embed/wjm8iYrtGIQ'
        },
        {
            pregunta: 'Determina si la función f(x)= 2x^3 es creciente o decreciente en todo su dominio.',
            respuestas: [
                'a) f\'(x) = Decreciente',
                'b) f\'(x) = Creciente',
                
            ],
            respuestaCorrecta: 1,
            instrucciones: '1. Para determinar si una función es creciente o decreciente, examinamos el signo de su derivada.\n2. Calculamos la derivada de la función: f\'(x)= 6x^2 \n3. La derivada es siempre positiva en todo el dominio de la función, lo que indica que la función es creciente en todo su dominio.',
            videoUrl: 'https://www.youtube.com/embed/sE5jdoJd97g'
        },
        {
            pregunta: 'Determina si la función f(x)= e^x es creciente o decreciente en todo su dominio.',
            respuestas: [
                'a) f\'(x) = Decreciente',
                'b) f\'(x) = Creciente',
                
            ],
            respuestaCorrecta: 1,
            instrucciones: '1. Calculamos la derivada de la función:f\'(x)= e^x \n2. La derivada es siempre positiva en todo el dominio de la función, ya que la función exponencial e^x es siempre positiva  \n3. Esto indica que la función es creciente en todo su dominio.',
            videoUrl: 'https://www.youtube.com/embed/IhsZKreUPE0'
        },
        // Agrega más preguntas aquí...
    ];

    if (problemas.length === 0) {
        alert('No hay más preguntas.');
        return;
    }

    const indexProblema = Math.floor(Math.random() * problemas.length);
    const problemaActual = problemas[indexProblema];

    problemP.textContent = problemaActual.pregunta;
    instructionsDiv.textContent = ''; // Vaciar el contenido de las instrucciones
    instructionsDiv.style.display = 'none'; // Ocultar las instrucciones
    answerButtons.forEach((button, index) => {
        button.textContent = problemaActual.respuestas[index];
        button.disabled = false;
        button.classList.remove('correct');
        button.classList.remove('incorrect');
        button.removeEventListener('click', handleCorrectAnswer);
        button.removeEventListener('click', handleIncorrectAnswer);
        if (index === problemaActual.respuestaCorrecta) {
            button.addEventListener('click', handleCorrectAnswer);
        } else {
            button.addEventListener('click', handleIncorrectAnswer);
        }
    });

    if (problemaActual.videoUrl) {
        videoContainer.innerHTML = `
            <iframe width="560" height="315" src="${problemaActual.videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
    } else {
        videoContainer.innerHTML = '';
    }

    instructionsDiv.textContent = problemaActual.instrucciones;
    continueButton.disabled = true;
    finishButton.disabled = true;

    problemas.splice(indexProblema, 1);
}

function handleCorrectAnswer(event) {
    event.target.classList.add('correct');
    userScore += 5;
    numHits++; // Incrementar solo en caso de respuesta correcta
    scoreDiv.textContent = 'Puntuación: ' + userScore;
    answerButtons.forEach(button => button.disabled = true);

    const correctMessage = '¡Respuesta correcta!';
    document.getElementById('correct-message').textContent = correctMessage;
    document.getElementById('incorrect-message').textContent = '';

    continueButton.disabled = false; // Habilitar el botón Continuar
    finishButton.disabled = false; // Habilitar el botón Finalizar
    instructionsDiv.style.display = 'none'; // Ocultar las instrucciones
}

function handleIncorrectAnswer(event) {
    event.target.classList.add('incorrect');
    userScore -= 3;
    scoreDiv.textContent = 'Puntuación: ' + userScore;
    instructionsDiv.style.display = 'block'; // Mostrar las instrucciones
    answerButtons.forEach(button => button.disabled = true);

    const incorrectMessage = '¡Respuesta incorrecta!';
    document.getElementById('correct-message').textContent = '';
    document.getElementById('incorrect-message').textContent = incorrectMessage;

    continueButton.disabled = false; // Habilitar el botón Continuar
    finishButton.disabled = false; // Habilitar el botón Finalizar
}

function showFinalScreen() {
    const finalScore = document.getElementById('final-score');
    const finalHits = document.getElementById('final-hits');
    finalScore.textContent = userScore;
    finalHits.textContent = numHits; // Mostrar el número de aciertos
    document.getElementById('final-screen').style.display = 'block';
    continueButton.disabled = true;
    finishButton.disabled = true;
}

document.getElementById('play-again').addEventListener('click', () => {
    document.getElementById('final-screen').style.display = 'none';
    userScore = 0;
    numHits = 0; // Reiniciar el contador de aciertos
    startGame();
});