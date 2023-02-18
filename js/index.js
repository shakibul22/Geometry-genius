let serial = 0;
document.getElementById('blog-button').addEventListener('click', () => {
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('blogs').style.display = 'block';

})
document.getElementById('header-icon').addEventListener('click', () => {
    document.getElementById('home-page').style.display = 'flex';
    document.getElementById('blogs').style.display = 'none';

})


document.getElementById('ellipse-btn').addEventListener('click', () => {
    serial += 1;
    const sd = getData('ellipse-name', 'ellipsee-base', 'ellipse-height')
    const area = 3.1416 * sd.firstInputValue * sd.secondInputValue;
    displayData(sd.shapeName, area)

})
document.getElementById('pentagon-btn').addEventListener('click', () => {
    serial += 1;
    const sd = getData('pentagon-name', 'pentagon-base', 'pentagon-height')
    const area = 0.5 * sd.firstInputValue * sd.secondInputValue;
    displayData(sd.shapeName, area)

})
document.getElementById('rhombus-btn').addEventListener('click', () => {
    serial += 1;
    const sd = getData('rhombus-name', 'rhombus-base', 'rhombus-height')
    const area = 0.5 * sd.firstInputValue * sd.secondInputValue;
    displayData(sd.shapeName, area)

})
document.getElementById('parallelogram-btn').addEventListener('click', () => {
    serial += 1;
    const sd = getData('parallelogram-name', 'parallelogram-base', 'parallelogram-height')
    const area = 0.5 * sd.firstInputValue * sd.secondInputValue;
    displayData(sd.shapeName, area)

})
document.getElementById('rectangle-btn').addEventListener('click', () => {
    serial += 1;
    const sd = getData('rectangle-name', 'rectangle-width', 'rectangle-length')


  
    const area = parseFloat(sd.firstInputValue) * parseFloat(sd.secondInputValue);
    displayData(sd.shapeName, area)


})
document.getElementById('triangle-btn').addEventListener('click', () => {

    serial += 1;
    const sd = getData('triangle-name', 'triangle-base', 'triangle-height')
    const area = 0.5 * sd.firstInputValue * sd.secondInputValue;
    displayData(sd.shapeName, area)

})

function displayData(nameOfShape, area) {
    const container = document.getElementById("area");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${nameOfShape}</td>
      <td>${area} cm<sup>2</sup></td>
      
      <td>
      <button class="btn btn-sm bg-orange-700 ">X</button>
      </td>
      
    `;
    container.appendChild(tr);
}

function getData(id1, id2, id3) {

    const shapeName = document.getElementById(id1).innerText;
    const firstInputValue = document.getElementById(id2).value;
    const secondInputValue = document.getElementById(id3).value;
    if (firstInputValue == "" || firstInputValue <= 0 || secondInputValue == "" || secondInputValue <= 0) {
        return alert("please enter any valid number");
    }
    const sd = {
        shapeName: shapeName,
        firstInputValue: firstInputValue,
        secondInputValue: secondInputValue,
    };
    return sd;
}


