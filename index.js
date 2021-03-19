
const downloadButton = document
    .getElementById('download-button')
    .addEventListener('click', download)

function download() {
    let blob;
    let link = document.createElement('a');
    link.download = 'github.txt';
    fetch('https://api.github.com/users/swissfranks').then(response => response.json()).then(json => {
        blob = new Blob([JSON.stringify(json)], { type: 'text/plain' });
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href);
    })
}