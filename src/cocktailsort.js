async function cocktailSort(delay) {
    let blocks = document.querySelectorAll(".block");
  
      // disable menu
      document.getElementById("changeSize").disabled = true;
      for (var i = 0; i < algos.length; i++) {
        algos[i].className += " disableClick";
      }
  
      // reset results section
      document.getElementById("result").innerHTML = '';
      let result = document.getElementById("result");
      let res = document.createElement('h3');
  
        // check array is sorted or not
        var arr = [];
        for(i=0;i<blocks.length;i++){
          arr.push(Number(blocks[i].childNodes[0].innerHTML));
        }
        const isSorted = arr.slice(1).every((item, i) => arr[i] <= item);
  
        if(isSorted){
  
            res.innerHTML = 'Array is already Sorted!!!';
            result.appendChild(res);
            
            // enable menu
            for (var k = 0; k < algos.length; k++) {
              algos[k].className = algos[k].className.replace("disableClick","");
            }
            var current = document.getElementsByClassName("highlight");
            if (current.length > 0) {
              current[0].className = current[0].className.replace(" highlight", "");
            }
            document.getElementById("changeSize").disabled = false;
  
        } else {
  
                res.innerHTML = 'Cocktail Sorting Started...';
                result.appendChild(res);
  
                var startTime = performance.now();

                var swapped = true; 
                var start = 0; 
                var end = blocks.length - 1; 
              
                while (swapped) { 
                    swapped = false; 
            
                    for (var i = start; i < end; i++) { 
                        blocks[i].style.backgroundColor = "#FF4949";
                        if (Number(blocks[i].childNodes[0].innerHTML) > Number(blocks[i+1].childNodes[0].innerHTML)) { 
                            await new Promise(resolve =>
                                setTimeout(() => {
                                    resolve();
                                }, 0.01*delay)
                            );
                            await swap(blocks[i], blocks[i + 1]); 
                            blocks = document.querySelectorAll(".block");
                            swapped = true; 
                        } 
                        blocks[i].style.backgroundColor = "#58B7FF";
                    } 
            
                    if (!swapped) 
                        break; 
                    
                    await new Promise(resolve =>
                        setTimeout(() => {
                            resolve();
                        }, 0.01*delay)
                    );
            
                    swapped = false; 
            
                    blocks[end].style.backgroundColor = "#13CE66";
                    --end; 
            
                    for (var j = end - 1; j >= start; j--) { 
                        blocks[j].style.backgroundColor = "#FF4949";
                        if (Number(blocks[j].childNodes[0].innerHTML) > Number(blocks[j+1].childNodes[0].innerHTML)) { 
                            await new Promise(resolve =>
                                setTimeout(() => {
                                    resolve();
                                }, 0.01*delay)
                            );
                            await swap(blocks[j], blocks[j + 1]); 
                            blocks = document.querySelectorAll(".block");
                            swapped = true; 
                        } 
                        blocks[j+1].style.backgroundColor = "#58B7FF";
                    } 
            
                    blocks[start].style.backgroundColor = "#13CE66";
                    ++start; 
                } 
                blocks.forEach(function(el,index){
                    blocks[blocks.length -1 - index].style.backgroundColor = "#13CE66";
                })

                
                res.innerHTML = res.innerHTML + ` Sorting Complete!!`;
                var endTime = performance.now();
                let time = document.createElement('p');
                time.innerHTML = `Time taken: ${((endTime-startTime)/1000).toFixed(4)} Sec `;
                res.appendChild(time);
  
                // enable menu and remove highlight
                for (k = 0; k < algos.length; k++) {
                  algos[k].className = algos[k].className.replace("disableClick","");
                }
                current = document.getElementsByClassName("highlight");
                if (current.length > 0) {
                  current[0].className = current[0].className.replace(" highlight", "");
                }
                document.getElementById("changeSize").disabled = false;
  
      }
    }