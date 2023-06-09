fetch("tabelle.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (tabellecontent) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let content of tabellecontent) {
            out += `
         <tr>
            <td>${content.rang}</td>
            <td>${content.unternehmen}</td>
            <td>${content.land}</td>
            <td>${content.anteil}</td>
         </tr>
      `;
        }
        placeholder.innerHTML = out;
    });

    


    