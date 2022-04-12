
 let piePagina = document.querySelector("#pie3  p")

 piePagina.innerText = "Copyright-Terracita 2022"

 console.log (piePagina.innerText)
 


 fetch('../js/data.json')
 .then((resp) => resp.json())
 .then((data) => console.log(data))




    