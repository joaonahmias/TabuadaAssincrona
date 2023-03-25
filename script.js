function tabuada(){
  let numero = document.getElementById("numero")

  let aparecetabela = document.getElementById("aparecetabela")

  let table = document.createElement("table")
  let thead = document.createElement("thead")
  let tbody = document.createElement("tbody")
        
  aparecetabela.appendChild(table)
  table.appendChild(thead)
  table.appendChild(tbody)

  let linha1 = document.createElement("tr")
  let cabecalho1 = document.createElement("th") 
  cabecalho1.innerHTML="Tabuada de "+numero.value
  linha1.appendChild(cabecalho1)
  thead.appendChild(linha1)

 
  for(i=0;i<=10;i++){
    let linhax = document.createElement("tr")
    let cx = document.createElement("th")
    cx.innerHTML=numero.value+"x"+i
    let cxx = document.createElement("td")
    cxx.innerHTML=numero.value*i
    linhax.appendChild(cx)
    linhax.appendChild(cxx)
    tbody.appendChild(linhax)
  }

  
}