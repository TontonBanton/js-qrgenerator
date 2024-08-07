const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
  e.preventDefault()
  const url = document.getElementById('url').value
  const size = document.getElementById('size').value

  if (url === '') {
    alert('Please Enter a url')
  } else {
    showSpinner()
    setTimeout(()=> {
      hideSpinner()
      generateQRCode(url, size)
    },1500)
  }
}

const showSpinner = ()=> {
  document.getElementById('spinner').style.display = 'block'
}
const hideSpinner = ()=> {
  document.getElementById('spinner').style.display = 'none'
}

const generateQRCode = (url, size)=> {
  var qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  })
}

hideSpinner()

form.addEventListener('submit', onGenerateSubmit)