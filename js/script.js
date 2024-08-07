const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
  e.preventDefault()
  clearUI()

  const url = document.getElementById('url').value
  const size = document.getElementById('size').value

  if (url === '') {
    alert('Please Enter a url')
  } else {
    showSpinner()
    setTimeout(()=> {
      hideSpinner()
      generateQRCode(url, size)
      //createsavebtn
      setTimeout(() => {
        const saveurl = qr.querySelector('img').src
        createSaveBtn(saveurl)
      }, 50);
    },1500)
  }
}

const generateQRCode = (url, size)=> {
  var qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  })
}

const createSaveBtn = (saveurl)=> {
  const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'bg-orange-400 rounded w-1/3 text-white py-2 m-auto my-5 hover:bg-orange-500'
    link.href = saveurl
    link.download = 'qrccode'
    link.innerHTML = 'Save Image'
  document.getElementById('generated').appendChild(link)
}

const showSpinner = ()=> { document.getElementById('spinner').style.display = 'block'}
const hideSpinner = ()=> { document.getElementById('spinner').style.display = 'none'}
const clearUI = ()=> {
  qr.innerHTML = ''
  const saveBtn = document.getElementById('save-link')
  if (saveBtn) saveBtn.remove()
}

hideSpinner()

form.addEventListener('submit', onGenerateSubmit)