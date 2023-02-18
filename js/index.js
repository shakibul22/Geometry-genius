document.getElementById('blog-button').addEventListener('click', ()=>{
    document.getElementById('home-page').style.display= 'none';
    document.getElementById('blogs').style.display= 'block';

})
document.getElementById('header-icon').addEventListener('click', ()=>{
    document.getElementById('home-page').style.display= 'flex';
    document.getElementById('blogs').style.display= 'none';

})

document.getElementById('triangle-btn').addEventListener('click', () => {
    const sd = getData('triangle-name','triangle-base','triangle-height')
    const area= 0.5*sd.firstInputValue*sd.secondInputValue;
    
})

function getData(id1, id2, id3) {

    const shapeName = document.getElementById(id1).innerText;
    const firstInputValue = document.getElementById(id2).value;
    const secondInputValue = document.getElementById(id3).value;
  
    const sd = {
      shapeName: shapeName,
      firstInputValue: firstInputValue,
      secondInputValue: secondInputValue,
    };
    return sd;
  }
  