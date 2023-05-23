document.addEventListener('DOMContentLoaded', (event) => {
    /* Récupération des éléments HTML */
    const toggleCheckbox = document.getElementById('toggle_checkbox');
    const body = document.body;
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('form');

    /* Désactivation temporaire des transitions */
    body.style.transition = 'none';
    form.style.transition = 'none';
    formContainer.style.transition = 'none';

    /* Définition des couleurs d'arrière-plan et de texte initiales */
    body.style.backgroundColor = '#f9f4e1';
    body.style.color = '#000';
    form.style.backgroundColor = '#f9f4e1';

    /* Récupération de l'état du mode sombre depuis le localStorage */
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    /* Application de l'état du mode sombre */
    toggleCheckbox.checked = isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-mode'); // Supposez que vous ayez une classe 'dark-mode' qui applique le mode sombre
    } else {
        body.classList.remove('dark-mode');
    }

    /* Gestion du changement d'état du mode sombre */
    toggleCheckbox.addEventListener('change', () => {
        body.classList.toggle('dark-mode', toggleCheckbox.checked);

        /* Mise à jour de l'état du mode sombre dans le localStorage */
        localStorage.setItem('darkMode', toggleCheckbox.checked);
    });

    /* Réactivation des transitions après un court délai */
    setTimeout(() => {
        body.style.transition = '';
        form.style.transition = '';
        formContainer.style.transition = '';
    }, 100);

    /* Écoute du changement d'état du bouton bascule */
    toggleCheckbox.addEventListener('change', function () {
        if (this.checked) {
            /* Passage en mode sombre */
            body.style.backgroundColor = '#333';
            body.style.color = '#f9f4e1';
            form.style.backgroundColor = '#333';
            formContainer.style.backgroundImage = "url('/images/background_dark.png')";
        } else {
            /* Passage en mode clair */
            body.style.backgroundColor = '#f9f4e1';
            body.style.color = '#000';
            form.style.backgroundColor = '#f9f4e1';
            formContainer.style.backgroundImage = "url('/images/background.png')";
        }
    });

    /* Ajout d'un écouteur d'événements "click" au bouton d'annulation */
    document.getElementById('cancel').addEventListener('click', function () {
        window.location.href = '/devweb'; // Remplacez "/devweb" par votre URL
    });
});

/* Fonction pour valider une adresse e-mail */
function validateEmail(email) {
    /* Création d'une expression régulière pour tester le format de l'e-mail */
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    /* Test de l'e-mail avec l'expression régulière et renvoi du résultat */
    return re.test(email);
}

/* Fonction pour vérifier si le champ du mot de passe est vide */
function isPasswordEmpty(password) {
    /* Vérification si le mot de passe est vide et renvoi du résultat */
    return password === "";
}

/* Ajout d'un écouteur d'événements "submit" au formulaire */
document.getElementById('login-form').addEventListener('submit', function (event) {
    try {
        /* Récupération de l'e-mail et du mot de passe des champs de saisie */
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        /* Si l'e-mail n'est pas valide ou si le mot de passe est vide, blocage de la soumission du formulaire */
        if (!validateEmail(email)) {
            alert('Veuillez entrer une adresse e-mail valide.');
            event.preventDefault();
        } else if (isPasswordEmpty(password)) {
            alert('Veuillez entrer un mot de passe.');
            event.preventDefault();
        }
    } catch (error) {
        /* Si une erreur se produit, capture et affichage de celle-ci */
        console.error("Une erreur s'est produite lors de la validation du formulaire :", error);
    }
});
