// Google Sign-In
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Google ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail());
}

// GitHub Login (Mockup for frontend)
document.getElementById('github-login').addEventListener('click', function() {
    // Redirect to GitHub OAuth URL
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=user';
});

// Facebook Login (Mockup for frontend)
document.getElementById('facebook-login').addEventListener('click', function() {
    // Redirect to Facebook OAuth URL
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email';
});

// Load the Google Sign-In API (Optional)
function startGoogleAuth() {
    gapi.load('auth2', function() {
        gapi.auth2.init();
    });
}

startGoogleAuth();
