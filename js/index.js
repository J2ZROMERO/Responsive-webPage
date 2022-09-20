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

window.addEventListener('load',()=>{


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
        
  });
