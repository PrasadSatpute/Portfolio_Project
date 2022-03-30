function add()
        {
            const n1 = parseInt(document.getElementById('num1').value) 
            const n2 = parseInt(document.getElementById('num2').value) 

            const total = n1 + n2

            const result = document.getElementById('result')
            result.innerHTML = `Result = ${total}` 
        }
        function mult()
        {
            const n1 = parseInt(document.getElementById('num1').value) 
            const n2 = parseInt(document.getElementById('num2').value) 

            const total = n1 * n2

            const result = document.getElementById('result')
            result.innerHTML = `Result = ${total}` 
        }
        function sub()
        {
            const n1 = parseInt(document.getElementById('num1').value) 
            const n2 = parseInt(document.getElementById('num2').value) 

            const total = n1 - n2

            const result = document.getElementById('result')
            result.innerHTML = `Result = ${total}` 
        }
        function divide()
        {
            const n1 = parseInt(document.getElementById('num1').value) 
            const n2 = parseInt(document.getElementById('num2').value) 

            const total = n1 / n2

            const result = document.getElementById('result')
            result.innerHTML = `Result = ${total}` 
        }