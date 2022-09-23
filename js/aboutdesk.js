
  function css(variable, style) {
    Object.keys(style).forEach((attr) => {
      variable.style[attr] = style[attr];
    });
  }
  
let logo = document.querySelector('.logo_mobDA');
logo.addEventListener('mouseover',()=>{
  css(logo,{
    transform: 'scale(1.2)',
    'box-shadow':'0px 0px 0px 0px #ff4f38',
  })
})

logo.addEventListener('mouseout',()=>{
  css(logo,{
    transform: 'scale(1)',
    'box-shadow':'-11px 5px 0px -2px #ff4f38',
  })
})



let socialM = document.getElementsByClassName('headWordDA');
console.log(socialM)

 for(let i = 0;i < socialM.length;i+=1){

socialM[i].addEventListener('mouseover',()=>{

  css(socialM[i],{
  transform: 'scale(1.2)',
  cursor: 'pointer',
})
})
socialM[i].addEventListener('mouseout',()=>{

  css(socialM[i],{
  transform: 'scale(1)',

})
})
 }