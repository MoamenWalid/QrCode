
const makeQrButton = document.querySelector('.make-qr');
let inputLink = document.querySelector('.input-qr');
const size = document.querySelector('select');
const qrCodeImg = document.getElementById('qrcode');
const link = document.querySelector('a');

makeQrButton.addEventListener('click', () => {
  if (inputLink.value == '') {
    alert(`You Must Enter The Link`)
  }

  else {
    createQrCode(inputLink.value, size.value);
  }
})

// Function To Create The QrCode 
function createQrCode(linkUrl, size) {
  qrCodeImg.innerHTML = '';
  qrCodeImg.style.display = 'block';
  link.style.display = 'block';
  const qrCode = new QRCode(document.getElementById('qrcode'), {
    text: linkUrl,
    width: size,
    height: size,
    colorDark : '#000',
    colorLight : '#fff',
    correctLevel : QRCode.CorrectLevel.H
  });
}

window.addEventListener('keypress', (event) => {
  if (event.key == "Enter") {
    makeQrButton.click();
  }
})



// Function To Download The QrCode 
  link.addEventListener('click', () => {
    const img = document.querySelector('#qrcode img');

    link.href = img.src;
    link.download = 'qrcode';
  })