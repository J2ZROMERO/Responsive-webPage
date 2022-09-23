
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

 let live = document.querySelector('.invitationDA') ;

 live.addEventListener('mouseover',()=>{
  
  css(live,{
    'box-shadow': '0px 0px 0px 0px #ff4f38',
    transform: 'scale(1.2)',
  })
  
  live.addEventListener('mouseout',()=>{
  
    css(live,{
      'box-shadow': '0px 0px 0px 4px #ff4f38',
      transform: 'scale(1)',
    })
  
 })
 })


 let hovert = document.getElementsByClassName('textHoverDA');

 for(let i = 0; i< hovert.length;i++){

  hovert[i].addEventListener('mouseover',()=>{
    css(hovert[i],{
      opacity: '0',
    })
     })
    
     hovert[i].addEventListener('mouseout',()=>{
      css(hovert[i],{
        opacity: '.5',
      })    
       })
 }
