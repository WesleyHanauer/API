
document.querySelector("button").onclick=()=>{

    fetch("https://free-quotes-api.herokuapp.com/").then(
        function(citacoes){
            return citacoes.json()
                          }
    ).then(
        function(response){

            let tbody = document.querySelector("#tabelaBody")
            let tdSentencas=document.createElement("td")
            let tr = document.createElement("tr")

            tdSentencas.append(
                document.createTextNode(response.quote)
            )

                    tr.append(tdSentencas)
                    tbody.append(tr)

        }
    )
}
