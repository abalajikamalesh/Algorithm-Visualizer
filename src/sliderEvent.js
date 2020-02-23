var slider = document.getElementById("changeSize");
const container = document.querySelector(".data-container");

generateBlocks(Number(slider.value));

slider.oninput = function() {
  generateBlockUtil();
}

function generateBlockUtil(){
  container.innerHTML = '';
  var result = document.querySelector("#result");
  result.innerHTML = '';
  generateBlocks(Number(slider.value));
}

function generateBlocks(num = 45) {

  var x = [];

  for (let i = 1; i < num; i += 1){
      x.push(i);
    }

    x.sort(() => Math.random() - 0.5); //shuffle array

    for (let i = 1; i < num-1; i += 1) {
      
      const value = x[i];
      const block = document.createElement("div");
      
      block.classList.add("block");
      
      if(num < 20)
        block.style.height = `${value * 8.5}px`;
      else if(num >= 20 && num < 40)
        block.style.height = `${value * 5.5}px`;
      else if(num >= 40 && num < 60)
        block.style.height = `${value * 4.5}px`;
      else if(num >= 60 && num < 80)
        block.style.height = `${value * 3.5}px`;
      else 
        block.style.height = `${value * 2.5}px`;

      block.style.width = `${900/(num)}px`;
      block.style.transform = `translateX(${i * 1200/(num)}px)`;
  
      const blockLabel = document.createElement("label");
      blockLabel.classList.add("block__id");
      
      if(num > 50 && num < 80)
        blockLabel.style.fontSize = `10px`;
      if(num >= 80)
        blockLabel.style.fontSize = `8px`;
      
        blockLabel.innerHTML = value;
  
      block.appendChild(blockLabel);
      container.appendChild(block);
    }
  }