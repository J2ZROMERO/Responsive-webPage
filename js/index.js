// functions styles and properties

function setAttributes(element, attributes) {
    Object.keys(attributes).forEach((attr) => {
      element.setAttribute(attr, attributes[attr]);
    });
  }
  
  function css(variable, style) {
    Object.keys(style).forEach((attr) => {
      variable.style[attr] = style[attr];
    });
  }
  
  // buttons hover and mouseout
  function bottonEventOutA(event) {
    event.addEventListener('mouseout', () => {
      event.style.backgroundColor = '#36B37F';
  
      event.style.cursor = 'pointer';
    });
  }
  
  function bottonEventA(event) {
    event.addEventListener('mouseover', () => {
      event.style.backgroundColor = 'green';
  
      event.style.cursor = 'pointer';
    });
  }
  
  function bottonEventOut(event) {
    event.addEventListener('mouseout', () => {
      event.style.backgroundColor = 'rgb(238, 248, 243)';
  
      event.style.cursor = 'pointer';
    });
  }
  function bottonEvent(event) {
    event.addEventListener('mouseover', () => {
      event.style.backgroundColor = '#ebeff4';
  
      event.style.cursor = 'pointer';
    });
  }

window.addEventListener('load',elements);

  function elements (){


    const section = document.createElement('section');
        section.className = 'container-sm section_colab';
        css(section, {
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'center',
          'margin-top': '7%',
          });
          

section.innerHTML = `
<h2>Featured Speackers</h2>
<svg class="line_content_colab" >
    <line class="line_colab" x1="0" y1="0" x2="30" y2="0"  />
  </svg>

<ul class="ul_users">
    <li class="col_user">
        <div class="collaborators"> 
            <img  alt="" class="user">
        </div> 
        <div class="about_col"> 
             <h2 class="col_name">Richard Half</h2>
             <h3 class="desc_col">Software Enginner Teacher at Hardvard University</h3>
             <svg class="line_content" >
                <line class="line" x1="0" y1="0" x2="30" y2="0"  />
              </svg>
             <p class="brief_col">Expert  to  teach Paradigms  of programming.</p>
            </div>
        </li>
    <li class="col_user">
        <div class="collaborators">
            <img src="../img/face2.jpg " alt="" class="user">
        </div> 
        <div class="about_col">
            <h2 class="col_name">Sopfia Robinson</h2>
            <h3 class="desc_col">Software Enginner At Google</h3>
            <svg class="line_content" >
                <line class="line" x1="0" y1="0" x2="30" y2="0"  />
              </svg>
            <p class="brief_col">Professional on backend at google.</p> </div></li>
    <li class="col_user"><div class="collaborators"><img src="../img/face3.jpg " alt="" class="user"></div> <div class="about_col"><h2 class="col_name">Albert Cons</h2><h3 class="desc_col">UX desing at Google</h3><svg class="line_content" >
        <line class="line" x1="0" y1="0" x2="30" y2="0"  />
      </svg><p class="brief_col">Expert creating UX design for user, 3 times named: The best UX designer at Google</p> </div></li>
    <li class="col_user"><div class="collaborators"><img src="../img/face4.jpg" alt="" class="user"></div> <div class="about_col"><h2 class="col_name">Neymar Royar</h2><h3 class="desc_col">Computer System Enginer </h3><svg class="line_content" >
        <line class="line" x1="0" y1="0" x2="30" y2="0"  />
      </svg><p class="brief_col">Full stack programmer</p> </div></li>
    <li class="col_user"><div class="collaborators"><img src="../img/face5.jpg" alt="" class="user"></div> <div class="about_col"><h2 class="col_name">Luci Caprilla</h2><h3 class="desc_col">Especialist on Digital Marketing</h3><svg class="line_content" >
        <line class="line" x1="0" y1="0" x2="30" y2="0"  />
      </svg><p class="brief_col">Professional to catch new potential clients</p> </div></li>
    <li class="col_user"><button class="colab_button"> <span>More</span> <img class="arrow_bu" src="../img/arrow.png" alt=""></button></li>
    </ul>`;

    document.body.appendChild(section);

    let lineCC = document.querySelector('.line_content_colab');
    css(lineCC,{
      height: '8px',
        display: 'flex',
        width: '6%',
    })

    let lineCCL = document.querySelector('.line_colab');
    css(lineCCL,{
      stroke: '#e7aea9',
      'stroke-width': '7px',
    })


      

    let liU = document.getElementsByClassName('col_user');
    let collaborators = document.getElementsByClassName('collaborators');
    let about_colab = document.getElementsByClassName ('about_col');
    let name_colab = document.getElementsByClassName ('col_name');
    let descr_col = document.getElementsByClassName ('desc_col');  
    let lineContent = document.getElementsByClassName ('line_content');
    let lineC = document.getElementsByClassName ('line');
    let briefC = document.getElementsByClassName ('brief_col');
    


    let user = document.getElementsByClassName('user');
    let people = ['../img/face1.jpg','../img/face2.jpg','../img/face3.jpg','../img/face4.jpg','../img/face5.jpg'];
    

    for(let i = 0;i < liU.length -1;i+=1){
      
    
      css(liU[i],{
        display: 'flex',
      'justify-content': 'center',
      'margin-top': '39px',
      })
      css(collaborators[i],{
        'max-width': '130px',
        height: '130px',
        'min-width': '130px',
        'background-image': 'url(../img/chess.png)',
        'background-size': '45%',
        'background-repeat': 'no-repeat',
        display: 'flex',
        'justify-content': 'flex-end',
        'align-items': 'flex-end',
        'margin-right': '5%',
      })
    
  
    css(about_colab[i],{
      width: '80%',
    height: '131px',
    })

    css(name_colab[i],{
      'font-size': '1.3em',
      'font-weight': '700',
      color: '#272a31',
      'font-family':  'Lato , sans-serif',
    })
    
    
    css(descr_col[i],{
      'font-size': '1em',
      color: '#ec5242',
      'font-family':  'Lato , sans-serif',
      margin: '0',
    })

    
    css(lineContent[i],{
    height : '3%',
    })


    css(lineC[i],{
      stroke: '#d3d3d3',
      'stroke-width': '7px',
    })

    css(briefC[i],{
      'font-size': '1em',
      color: '#555555',
      'font-family':  'Lato ,sans-serif',
      margin: '0',
    })

    setAttributes(user[i],{
      src: people[i],
    })
  }


    let colabB = document.querySelector('.colab_button');
    css(colabB,{
      cursor: 'pointer',
      width: '100%',
      border: '2px solid #d3d3d3',
      'background-color':' white',
      'margin-top': '8%',
      height: '56px',
    })

    let arrow = document.querySelector('.arrow_bu');
    css(arrow,{
      width: '2.5%',
      'margin-left': '1%',
    })
    let ulUser = document.querySelector('.ul_users');
    css(ulUser,{
      'list-style': 'none',
      padding: '0',
      width: '100%',
      'margin-top': '5%',
      height: '985px',
    })
    
    //start observing for resize
    resize_ob.observe(document.body);

  }

  let landingP  = document.querySelector('.container_lanpage');
  let menu = document.querySelector('.navT');
  const mobilVE = [];
  
  document.querySelector('.menu_mobil').addEventListener('click',()=>{
  
  
            while (landingP.hasChildNodes()) {
              mobilVE.push(landingP.firstChild);
              landingP.removeChild(landingP.firstChild);
            }
       document.body.removeChild(landingP);
        menu.style.display = 'block';
     
document.querySelector('.section_colab').remove();


      });
  
          document.querySelector('.closeB').addEventListener('click',()=>{
            menu.style.display = 'none';
            
            
            for (let i = 0; i <= mobilVE.length - 1; i += 1) {
              landingP.appendChild(mobilVE[i]);
            }
            
            document.body.appendChild(landingP)
            elements();

            

          })


/* end mob version */

/*responsive page */
             const resize_ob = new ResizeObserver(function(entries) {
          //   // since we are observing only a single element, so we access the first element in entries array
             let rect = entries[0].contentRect;
          
          //   // current width & height
             let width = rect.width;
             let height = rect.height;
let clp = document.querySelector('.container_lanpage');
let gcs = window.getComputedStyle(clp);
let clpD = document.querySelector('.container_lanpageD');
let gcsD = window.getComputedStyle(clpD);

if(gcs.display === 'none'){
  if(rect.width >= 768 ){
    document.querySelector('.section_colab').style.display = 'none';
  }
}

if(gcsD.display === 'none'){
  if(rect.width <= 768 ){
    document.querySelector('.section_colab').style.display = 'flex';
  }
  
}


             console.log('Current Width : ' + width);
             console.log('Current Height : ' + height);
 });
          
/* end responsive page */

/*start dek features */


// functions styles and properties

function setAttributes(element, attributes) {
  Object.keys(attributes).forEach((attr) => {
    element.setAttribute(attr, attributes[attr]);
  });
}

function css(variable, style) {
  Object.keys(style).forEach((attr) => {
    variable.style[attr] = style[attr];
  });
}

// buttons hover and mouseout
function bottonEventOutA(event) {
  event.addEventListener('mouseout', () => {
    event.style.backgroundColor = '#36B37F';

    event.style.cursor = 'pointer';
  });
}

function bottonEventA(event) {
  event.addEventListener('mouseover', () => {
    event.style.backgroundColor = 'green';

    event.style.cursor = 'pointer';
  });
}

function bottonEventOut(event) {
  event.addEventListener('mouseout', () => {
    event.style.backgroundColor = 'rgb(238, 248, 243)';

    event.style.cursor = 'pointer';
  });
}
function bottonEvent(event) {
  event.addEventListener('mouseover', () => {
    event.style.backgroundColor = '#ebeff4';

    event.style.cursor = 'pointer';
  });
}


function elementsD (){


  const section = document.createElement('section');
      section.className = 'container-sm section_colabD';
      css(section, {
        display: 'flex',
        'flex-direction': 'column',
        'align-items': 'center',
        'justify-content': 'center',
        'margin-top': '7%',
        });
        

section.innerHTML = `
<h2>Featured Speackers</h2>
<svg class="line_content_colabD" >
  <line class="line_colabD" x1="0" y1="0" x2="30" y2="0"  />
</svg>

<ul class="ul_usersD">
  <li class="col_userD">
      <div class="collaboratorsD"> 
          <img  alt="" class="userD">
      </div> 
      <div class="about_colD"> 
           <h2 class="col_nameD">Richard Half</h2>
           <h3 class="desc_colD">Software Enginner Teacher at Hardvard University</h3>
           <svg class="line_contentD" >
              <line class="lineD" x1="0" y1="0" x2="30" y2="0"  />
            </svg>
           <p class="brief_colD">Expert  to  teach Paradigms  of programming.</p>
          </div>
      </li>
  <li class="col_userD">
      <div class="collaboratorsD">
          <img src="../img/face2.jpg " alt="" class="userD">
      </div> 
      <div class="about_colD">
          <h2 class="col_nameD">Sopfia Robinson</h2>
          <h3 class="desc_colD">Software Enginner At Google</h3>
          <svg class="line_contentD" >
              <line class="lineD" x1="0" y1="0" x2="40" y2="0"  />
            </svg>
          <p class="brief_colD">Professional on backend at google.</p> </div></li>
  <li class="col_userD"><div class="collaboratorsD"><img src="../img/face3.jpg " alt="" class="userD"></div> <div class="about_colD"><h2 class="col_nameD">Albert Cons</h2><h3 class="desc_colD">UX desing at Google</h3><svg class="line_contentD" >
      <line class="lineD" x1="0" y1="0" x2="30" y2="0"  />
    </svg><p class="brief_colD">Expert creating UX design for user, 3 times named: The best UX designer at Google</p> </div></li>
  <li class="col_userD"><div class="collaboratorsD"><img src="../img/face4.jpg" alt="" class="userD"></div> <div class="about_colD"><h2 class="col_nameD">Neymar Royar</h2><h3 class="desc_colD">Computer System Enginer </h3><svg class="line_contentD" >
      <line class="lineD" x1="0" y1="0" x2="30" y2="0"  />
    </svg><p class="brief_colD">Full stack programmer</p> </div></li>
  <li class="col_userD"><div class="collaboratorsD"><img src="../img/face5.jpg" alt="" class="userD"></div> <div class="about_colD"><h2 class="col_nameD">Luci Caprilla</h2><h3 class="desc_colD">Especialist on Digital Marketing</h3><svg class="line_contentD" >
      <line class="lineD" x1="0" y1="0" x2="30" y2="0"  />
    </svg><p class="brief_colD">Professional to catch new potential clients</p> </div>
    </li>
  <li class="col_userD">  </li>
  </ul>`;

  let containerM = document.querySelector('.container_mainD')
  containerM.insertAdjacentElement("afterend",section);

  let lineCC = document.querySelector('.line_content_colabD');
  css(lineCC,{
    height: '8px',
      display: 'flex',
      width: '5%',
  })

  let lineCCL = document.querySelector('.line_colabD');
  css(lineCCL,{
    stroke: '#ff4f38',
    'stroke-width': '7px',
  })


    

  let liU = document.getElementsByClassName('col_userD');
  let collaborators = document.getElementsByClassName('collaboratorsD');
  let about_colab = document.getElementsByClassName ('about_colD');
  let name_colab = document.getElementsByClassName ('col_nameD');
  let descr_col = document.getElementsByClassName ('desc_colD');  
  let lineContent = document.getElementsByClassName ('line_contentD');
  let lineC = document.getElementsByClassName ('lineD');
  let briefC = document.getElementsByClassName ('brief_colD');
  


  let user = document.getElementsByClassName('userD');
  let people = ['../img/face1.jpg','../img/face2.jpg','../img/face3.jpg','../img/face4.jpg','../img/face5.jpg'];
  

  for(let i = 0;i < liU.length -1;i+=1){
    
  
    css(liU[i],{
      
      display: 'flex',
    'justify-content': 'center',
    'margin-top': '39px',
    
    width:'44%',
    'margin-left': '6%',
    })
    css(collaborators[i],{
      'max-width': '130px',
      height: '130px',
      'min-width': '130px',
      'background-image': 'url(../img/chess.png)',
      'background-size': '45%',
      'background-repeat': 'no-repeat',
      display: 'flex',
      'justify-content': 'flex-end',
      'align-items': 'flex-end',
      'margin-right': '5%',
    })
  

  css(about_colab[i],{
    width: '80%',
  height: '131px',
  })

  css(name_colab[i],{
    'font-size': '1.3em',
    'font-weight': '700',
    color: '#272a31',
    'font-family':  'Lato , sans-serif',
  })
  
  
  css(descr_col[i],{
    'font-size': '1em',
    color: '#ec5242',
    'font-family':  'Lato , sans-serif',
    margin: '0',
  })

  
  css(lineContent[i],{
  height : '3%',
  })


  css(lineC[i],{
    stroke: '#d3d3d3',
    'stroke-width': '7px',
  })

  css(briefC[i],{
    'font-size': '1em',
    color: '#555555',
    'font-family':  'Lato ,sans-serif',
    margin: '0',
  })

  setAttributes(user[i],{
    src: people[i],
  })
}



  let ulUser = document.querySelector('.ul_usersD');
  css(ulUser,{
    'list-style': 'none',
    padding: '0',
    width: '100%',
    'margin-top': '5%',   
    height: '750px',
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    'flex-wrap': 'wrap',
  })
}

let partners  = document.querySelector('.partnersD');
let con = document.querySelector('.section_colabD');



window.addEventListener('load',()=>{
elementsD()

let logo = document.querySelector('.logo_mobD');
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


//con.after()
})
/*end desk features */

/*event social media icons */
let socialM = document.getElementsByClassName('headWordD');
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

 let live = document.querySelector('.invitationD') ;

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




/*close events social media icons */