const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
    const results = [];

    const radioButtons = document.querySelectorAll("input[type='radio']:checked");
    radioButtons.forEach((radioButtons, index) => {
        if (radioButtons.value === responses[index]) {
            results.push(true);
        } else {
            results.push(false);
        }
    });
    // console.log(radioButtons);
    // console.log(results);
    showResults(results);
    addColors(results);
}
const titleResult = document.querySelector(".results h2");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
    // Si callback est est vrai ici === faux alors on ajoute au tableau l'élément
    const errorsNumber = results.filter(el => el === false).length;
    // Compte le nombre d'erreurs
    console.log(errorsNumber);
    switch(errorsNumber) {
        case 0:
            titleResult.textContent = "Bravo, c'est un sans faute !";
            helpResult.style.display = "block";
            helpResult.textContent = "Quelle culture !!";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>5 / 5<span>";
            break
        case 1: 
            titleResult.textContent = "Presque parfait ! Vous avez une erreur";
            helpResult.style.display = "block";
            helpResult.textContent = "Vous avez une bonne culture !!";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>4 / 5<span>";
            break
        case 2: 
            titleResult.textContent = "Dommage ! Vous avez 2 erreurs";
            helpResult.style.display = "block";
            helpResult.textContent = "Vous êtes dans la moyenne";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>3 / 5<span>";
            break
        case 3: 
            titleResult.textContent = "Mince ! Vous avez 3 erreurs";
            helpResult.style.display = "block";
            helpResult.textContent = "Entrainez vous puis ré essayer !";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>2 / 5<span>";
            break
        case 4:
            titleResult.textContent = "Aie ! Vous avez 4 erreurs";
            helpResult.style.display = "block";
            helpResult.textContent = "Vous devriez lire plus et retentez votre chance";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>1 / 5<span>";
            break
        case 5:
            titleResult.textContent = "Aie ! Vous avez 5 erreurs";
            helpResult.style.display = "block";
            helpResult.textContent = "Vous avez tout faux. Ce n'est pas grave entrainez vous et retentez votre chance !";
            markResult.style.display = "block";
            markResult.innerHTML = "Score : <span>0 / 5<span>";
            break
        default:
            titleResult.textContent = "Wops, cas innatendu. Bug dans la matrice";
    }
}

const questions = document.querySelectorAll(".question-block");

function addColors(results) {
    // Pour utiliser index on doit mettre response même si on ne s'en sert pas
    //ForEach très utile pour la programmation fonctionnelle
    results.forEach((response, index) => {
        if(results[index]) {
            questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6";
        } else {
            questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c";
        }
    })
}