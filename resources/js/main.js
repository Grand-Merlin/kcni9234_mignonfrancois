$(document).ready(function () {
    /* Récupération des éléments HTML */
    var toggleCheckbox = $('#toggle_checkbox');
    var body = $('body');
    var formContainer = $('.form-container');
    var form = $('form');
    var passwordInput = $('#password');
    var confirmPasswordInput = $('#confirm-password');
    var passwordValidationIcon = $('#password-validation-icon');
    var confirmPasswordValidationIcon = $('#confirm-password-validation-icon');

    /* Désactivation temporaire des transitions */
    body.css('transition', 'none');
    form.css('transition', 'none');
    formContainer.css('transition', 'none');

    /* Définition des couleurs d'arrière-plan et de texte initiales */
    body.css('backgroundColor', '#f9f4e1');
    body.css('color', '#000');
    form.css('backgroundColor', '#f9f4e1');

    /* Récupération de l'état du mode sombre depuis le localStorage */
    var isDarkMode = localStorage.getItem('darkMode') === 'true';

    /* Application de l'état du mode sombre */
    toggleCheckbox.prop('checked', isDarkMode);
    applyDarkMode(isDarkMode);

    /* Gestion du changement d'état du mode sombre */
    toggleCheckbox.on('change', function () {
        var isDark = toggleCheckbox.is(':checked');
        body.toggleClass('dark-mode', isDark);

        /* Mise à jour de l'état du mode sombre dans le localStorage */
        localStorage.setItem('darkMode', isDark);

        /* Appliquer les changements d'arrière-plan et de couleur en fonction de l'état du mode sombre */
        applyDarkMode(isDark);
    });

    /* Réactivation des transitions après un court délai */
    setTimeout(function() {
        body.css('transition', '');
        form.css('transition', '');
        formContainer.css('transition', '');
    }, 100);

    /* Ajout d'un écouteur d'événements "click" au bouton d'annulation */
    $('#cancel').on('click', function () {
        window.location.href = '/devweb'; // Remplacez "/devweb" par votre URL
    });

    /* Application du mode sombre */
    function applyDarkMode(isDark) {
        if (isDark) {
            /* Passage en mode sombre */
            body.css('backgroundColor', '#333');
            body.css('color', '#f9f4e1');
            form.css('backgroundColor', '#333');
            formContainer.css('backgroundImage', "url('/images/background_dark.png')");
        } else {
            /* Passage en mode clair */
            body.css('backgroundColor', '#f9f4e1');
            body.css('color', '#000');
            form.css('backgroundColor', '#f9f4e1');
            formContainer.css('backgroundImage', "url('/images/background.png')");
        }
    }

    /* Récupération des éléments e-mail et de confirmation d'e-mail */
    var emailInput = $('#email');
    var confirmEmailInput = $('#confirm-email');

    /* Interdiction du copier/coller dans le champ de confirmation d'e-mail */
    confirmEmailInput.on('paste', function (event) {
        event.preventDefault();
    });

    /* Empêcher le copier/coller dans le champ de confirmation du mot de passe */
    confirmPasswordInput.on('paste', function (e) {
        e.preventDefault();
        alert("Il n'est pas possible de coller dans ce champ.");
    });

    /* Ajout d'un écouteur d'événements "submit" au formulaire */
    $('#login-form').on('submit', function (event) {
        try {
            /* Récupération de l'e-mail et du mot de passe des champs de saisie */
            var email = emailInput.val();
            var confirmEmail = confirmEmailInput.val();
            var password = passwordInput.val();
            var confirmPassword = confirmPasswordInput.val();

            /* Si l'e-mail n'est pas valide, si les e-mails ne correspondent pas ou si le mot de passe n'est pas valide, blocage de la soumission du formulaire */
            if (!validateEmail(email)) {
                alert('Veuillez entrer une adresse e-mail valide.');
                event.preventDefault();
            } else if (email !== confirmEmail) {
                alert('Les adresses e-mail ne correspondent pas.');
                event.preventDefault();
            } else if (!validatePassword(password)) {
                alert('Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre, un caractère spécial et avoir une longueur minimale de 8 caractères.');
                event.preventDefault();
            } else if (password !== confirmPassword) {
                alert('Les mots de passe ne correspondent pas.');
                event.preventDefault();
            }
        } catch (error) {
            /* Si une erreur se produit, capture et affichage de celle-ci */
            console.error("Une erreur s'est produite lors de la validation du formulaire :", error);
        }
    });

    /* Fonction pour valider une adresse e-mail */
    function validateEmail(email) {
        /* Création d'une expression régulière pour tester le format de l'e-mail */
        var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        /* Test de l'e-mail avec l'expression régulière et renvoi du résultat */
        return re.test(email);
    }

    /* Fonction pour valider un mot de passe */
    function validatePassword(password) {
        /* Création d'une expression régulière pour tester le format du mot de passe */
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        /* Test du mot de passe avec l'expression régulière et renvoi du résultat */
        return re.test(password);
    }
});