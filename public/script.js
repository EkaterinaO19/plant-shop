const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

