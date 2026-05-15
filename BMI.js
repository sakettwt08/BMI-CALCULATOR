document.getElementById('res').addEventListener('click',()=>{

    let weight = Number(document.getElementById('wt').value)

    let height = Number(document.getElementById('height').value)

    let bmi = weight / (height * height)

    document.getElementById('output').innerText = bmi

})

