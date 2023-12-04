/*
Live Code Editor 
By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign

*/

const html_code = document.querySelector('.html-code textarea');
const css_code = document.querySelector('.css-code textarea');
const js_code = document.querySelector('.js-code textarea');
const result = document.querySelector('#result');

function run() {
    // Storing data in Local Storage
    localStorage.setItem('html_code', html_code.value);
    localStorage.setItem('css_code', css_code.value);
    localStorage.setItem('js_code', js_code.value);

    // Executing HTML, CSS & JS code
    result.contentDocument.body.innerHTML = `<style>${localStorage.css_code}</style>` + localStorage.html_code;
    result.contentWindow.eval(localStorage.js_code);
}

// Checking if user is typing anything in input field
html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();

// Accessing data stored in Local Storage. To make it more advanced you could check if there is any data stored in Local Storage.
html_code.value = localStorage.html_code;
css_code.value = localStorage.css_code;
js_code.value = localStorage.js_code;
var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    mode: "text/x-c++src",
    theme: "dracula",
    lineNumbers: true,
    autoCloseBrackets: true,
})
var width = window.innerWidth
var input = document.getElementById("input")
var output = document.getElementById("output")
var run = document.getElementById("run")
editor.setSize(0.7 * width, "500")
var option = document.getElementById("inlineFormSelectPref")
option.addEventListener("change", function () {
    if (option.value == "Java") {
        editor.setOption("mode", "text/x-java")
    } else if (option.value == "python") {
        editor.setOption("mode", "text/x-python")
    } else {
        editor.setOption("mode", "text/x-c++src")
    }
})
var code;
run.addEventListener("click", async function () {
    code = {
        code: editor.getValue(),
        input: input.value,
        lang: option.value,
    }
    console.log(code)
    var oData = await fetch("http://localhost:8000/compile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(code),
    })
    var d = await oData.json()
    output.value = d.output
})



function openSettings() {
    document.getElementById('settingsWindow').style.display = 'block';
    document.getElementById('sidebar').style.width = '0'; // Close the sidebar when opening settings
}

function closeSettings() {
    document.getElementById('settingsWindow').style.display = 'none';
}

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}
 // JavaScript functions to show and hide the floating page
         function showFloatingPage() {
             document.getElementById('floatingPage').style.display = 'block';
         }
 
         function hideFloatingPage() {
             document.getElementById('floatingPage').style.display = 'none';
         }
 
         function showTab(tabId) {
             // Hide all sections
             document.querySelectorAll('section').forEach(section => {
                 section.classList.remove('active');
             });
 
             // Show the selected section
             document.getElementById(tabId).classList.add('active');
         }
 
         function insertCommonViewportTag() {
             // Logic to insert the common viewport meta tag
             alert('Inserted the most common viewport meta tag!');
         }
     