const saturate = document.getElementById("saturate");
const contarst = document.getElementById("contarst");
const brightness = document.getElementById("brightness");
const sepia = document.getElementById("sepia");
const grayScale = document.getElementById("grayScale");
const blur = document.getElementById("blur");
const hueRotate = document.getElementById("hue-rotate");
const downloadBtn = document.getElementById("download");
const resetBtn = document.getElementById("reset");
const upload = document.getElementById("uplaodFile");
const img = document.getElementById("img");
const imgBox = document.querySelector(".image-box");
const filters = document.querySelectorAll('ul li input')
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

window.onload = function(){
  imgBox.style.display="none";
  downloadBtn.style.display="none";
  resetBtn.style.display="none";
}

upload.onchange = function(){
  restHandeler();
   imgBox.style.display = "block";
   downloadBtn.style.display = "block";
   resetBtn.style.display = "block";
   let file = new FileReader();
   file.readAsDataURL(upload.files[0])
   file.onload =function() {
    img.src = file.result;
   }
   img.onload = function(){
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    img.style.display = 'none'
   }
}
 filters.forEach(filter =>{
  filter.addEventListener('input',function(){
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contarst.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayScale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  })
 })

resetBtn.addEventListener("click", restHandeler);

 function restHandeler(){
  img.style.filter = 'none';
  saturate.value='100';
  contarst.value= "100";
  brightness.value = "100";
  sepia.value = "0";
grayScale.value = '0';
blur.value='0';
hueRotate.value='0';
 }

 downloadBtn.onclick = function(){
  downloadBtn.href = canvas.toDataURL();
 }