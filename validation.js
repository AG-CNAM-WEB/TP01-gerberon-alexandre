$(document).ready(function () {
    // Fonction de validation du formulaire
    $('#client-form').submit(function (event) {
        // Supprimer les messages d'erreur existants
        $('.error-message').remove();

        // Validation du mot de passe
        var password = $('#password').val();
        var confirmPassword = $('#confirm-password').val();

        if (password !== confirmPassword) {
            event.preventDefault(); // Empêcher la soumission du formulaire

            // Ajouter un message d'erreur en haut de la page
            $('body').prepend('<div class="error-message">Les mots de passe ne correspondent pas.</div>');
        }
    });
});
