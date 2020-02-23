async function quickSort(delay) {

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

      res.innerHTML = 'Array is already Sorted!!';
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

        res.innerHTML = 'Quick Sorting Started...';
        result.appendChild(res);

        var start = performance.now();

        var stack = [];
        var l = 0;
        var h = blocks.length-1;
      
        stack.push(l);
        stack.push(h); 
      
        while (stack.length > 0) { 
            let h = stack.pop();
            let l = stack.pop();
      
            var p; 
            var x = Number(blocks[h].childNodes[0].innerHTML);
            var i = (l - 1); 
        
            for (var j = l; j <= h - 1; j++) { 
                blocks[i+1].style.backgroundColor = "#FF4949";
                blocks[j].style.backgroundColor = "#FF4949";
                
                await new Promise(resolve =>
                    setTimeout(() => {
                      resolve();
                    }, delay)
                  );
                
                if (Number(blocks[j].childNodes[0].innerHTML) <= x) { 
                    i++; 
                    await swap(blocks[i], blocks[j]); 
                    blocks = document.querySelectorAll(".block");
                } 
                
                blocks[i+1].style.backgroundColor = "#58B7FF";
                blocks[j].style.backgroundColor = "#58B7FF";
            } 
            await swap(blocks[i + 1], blocks[h]); 
            blocks = document.querySelectorAll(".block");

            p = (i + 1); 

            if (p - 1 > l) {  
                stack.push(l);
                stack.push(p-1);
            } 
            
            if (p + 1 < h) { 
                stack.push(p+1);
                stack.push(h);
            } 
        } 

        blocks.forEach(function(el,index){
            blocks[blocks.length -1 - index].style.backgroundColor = "#13CE66";
        })

        res.innerHTML = res.innerHTML + ` Sorting Complete!!`;
        var end = performance.now();
        let time = document.createElement('p');
        time.innerHTML = `Time taken: ${((end-start)/1000).toFixed(4)} Sec `;
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