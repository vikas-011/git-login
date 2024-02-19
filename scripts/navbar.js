let plat = document.getElementById('plat')
    let platform = document.getElementById('platform')
    let body = document.getElementById("mainBody");

    plat.addEventListener("click", () => {
        if (platform.style.display == 'block') {

            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            // will disable platform 2, 3 & 4
            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')
            
            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')            
            // will disable platform 2, 3 & 4

            body.setAttribute("style","overflow: auto;")
        }
        else {
            
            platform.style.display = 'block'
            plat.setAttribute('class','pop_on')
            
            // will disable platform 2, 3 & 4
            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')
            
            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')            
            // will disable platform 2, 3 & 4

            body.setAttribute("style","overflow: hidden;")
        }
    })

    
    let plat3 = document.getElementById('plat3');
    let platform3 = document.getElementById('platform3');
    plat3.addEventListener('click', () => {
        if (platform3.style.display == 'block') {

            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')

            // will disable platform 1, 2 & 4
            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')

            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')
            // will disable platform 1, 2 & 4

            body.setAttribute("style","overflow: auto;")
        }
        else {
            
            platform3.style.display = 'block'
            plat3.setAttribute('class','pop_on')

            // will disable platform 1, 2 & 4
            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')
    
            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')
            // will disable platform 1, 2 & 4

            body.setAttribute("style","overflow: hidden;")
        }
    })


    let plat2 = document.getElementById('plat2');
    let platform2 = document.getElementById('platform2');
    plat2.addEventListener('click', () => {
        if (platform2.style.display == 'block') {

            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')

            // will disable platform 1, 3 & 4
            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')

            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')
            // will disable platform 1, 3 & 4

            body.setAttribute("style","overflow: auto;")
        }
        else {
            
            platform2.style.display = 'block'
            plat2.setAttribute('class','pop_on')
            
            // will disable platform 1, 3 & 4
            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')
    
            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')
            // will disable platform 1, 3 & 4

            body.setAttribute("style","overflow: hidden;")
        }
    })


    let plat4 = document.getElementById('plat4');
    let platform4 = document.getElementById('platform4');
    plat4.addEventListener('click', () => {
        if (platform4.style.display == 'block') {

            platform4.style.display = 'none'
            plat4.setAttribute('class','pop_out')

            // will disable platform 1,2 & 3
            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')

            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')
            // will disable platform 1,2 & 3

            body.setAttribute("style","overflow: auto;")
        }
        else {
            
            platform4.style.display = 'block'
            plat4.setAttribute('class','pop_on')

            // will disable platform 1,2 & 3
            platform.style.display = 'none'
            plat.setAttribute('class','pop_out')

            platform2.style.display = 'none'
            plat2.setAttribute('class','pop_out')
    
            platform3.style.display = 'none'
            plat3.setAttribute('class','pop_out')
            // will disable platform 1,2 & 3

            body.setAttribute("style","overflow: hidden;")
        }
    })