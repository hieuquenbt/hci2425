

// Monaco Editor configuration
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' }});
require(['vs/editor/editor.main'], function() {
    window.editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            'import java.io.*;',
            'import java.util.*;',
            '',
            'public class Solution {',
            '    public static void main(String[] args) {',
            '        /* Enter your code here. Read input from STDIN. Print output to STDOUT.',
            '           Your class should be named Solution. */',
            '    }',
            '}'
        ].join('\n'),
        language: 'java',
        theme: 'vs-light',
        minimap: { enabled: true },
        automaticLayout: true,
        fontSize: 14,
        lineNumbers: 'on',
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        cursorStyle: 'line',
        matchBrackets: 'always'
    });
});

// Editor functions
function resetCode() {
    if (window.editor) {
        editor.setValue([
            'import java.io.*;',
            'import java.util.*;',
            '',
            'public class Solution {',
            '    public static void main(String[] args) {',
            '        /* Enter your code here. Read input from STDIN. Print output to STDOUT.',
            '           Your class should be named Solution. */',
            '    }',
            '}'
        ].join('\n'));
    }
}

function runCode() {
    const code = window.editor.getValue();
    console.log('Running code:', code);
    let a = document.getElementById('rightPanel');
    a.classList.remove("hidden");
}

function testCode() {
    const code = window.editor.getValue();
    console.log('Testing code with custom input:', code);
    // Implement your test code logic here
}

function submitCode() {
    const code = window.editor.getValue();
    console.log('Running code:', code);
    let a = document.getElementById('rightPan  el');
    a.classList.remove("hidden");
}

// Language change handler
document.getElementById('language-select').addEventListener('change', function(e) {
    if (window.editor) {
        monaco.editor.setModelLanguage(editor.getModel(), e.target.value);
    }
});

// show 
document.getElementById("toggleButton").addEventListener("click", function() {
    var div = document.getElementById("codeEnviroment");
    div.classList.toggle("hidden");
  });



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
function togglePassword(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Login:', { email, password });
    // Thêm logic xử lý đăng nhập ở đây
}

