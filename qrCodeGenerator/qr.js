const qrInput=document.getElementById('qr-input');

const generateButton=document.getElementById('Generate').innerHTML;
const qrImg=document.getElementById('qr-img')


function generateQr()
{
    if(!qrInput.value)
    {
      return  alert('please give some input')
    }
const inputText=qrInput.value;
const url=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`

qrImg.src=url;


}