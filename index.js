const imgArr = ['fox1','fox2','fox3','fox4','fox5','fox6']
      imgArrLength = imgArr ? imgArr.length : 0
      imgArea = document.getElementById('imgArea')
      lightBoxImg = document.getElementById('lightBoxImg')
      currentPage = document.getElementById('currentPage')
      totalPage = document.getElementById('totalPage')
      mask = document.getElementById('mask')
function loadImg(){
  let html = ''
  if(imgArrLength > 0){
    for (let i = 0; i < imgArrLength; i++){
      let img = `<figure onclick="openDialog(${i})"><img src="./img/${imgArr[i]}.jpg" alt="狐狸"></figure>`
      html += img
    }
    imgArea.innerHTML = html
  }
}
function openDialog(index){
  mask.style.display = 'flex'
  lightBoxImg.setAttribute('src', `./img/${imgArr[index]}.jpg`)
  currentPage.textContent = index + 1
  totalPage.textContent = imgArrLength
}
function closeDialog(){
  mask.style.display = 'none'
}
function jumpTo(num){
  let pageNo = Number(currentPage.textContent) + num
  pageNo = pageNo > imgArrLength ? 1 : pageNo
  pageNo = pageNo < 1 ? imgArrLength : pageNo
  currentPage.textContent = pageNo
  lightBoxImg.setAttribute('src', `./img/${imgArr[pageNo - 1]}.jpg`)
}

