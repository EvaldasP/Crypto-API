let card = document.querySelector('.card');
 let input = document.querySelector('input');

/////////////////////////////////////////////////

input.addEventListener('keyup', function(e){
    fetch('https://api.coinlore.com/api/tickers/')
    .then(response => {
        return response.json();
    }).then(results => {
        card.innerHTML = '';
        const info = results.data;
        console.log(info);
        var search = e.target.value;
        info.forEach(element => {
            console.log(element.name);
            var h3 = document.createElement('h3');
            var h2 = document.createElement('h2');
            var h4 = document.createElement('h4');
            var infodiv = document.createElement('div');
            infodiv.classList.add('divinfo');
            h3.innerHTML = element.name;
            h2.innerHTML = 'Price: ' + element.price_usd + ' USD';
            h4.innerHTML = 'Rank: ' + element.rank;
            // to lower case pavercia teskta i mazasias raides. Taip reikia daryti todel, nes includes funkcija yra case seneitive.
            if (element.name.toLowerCase().includes(search.toLowerCase())) {

                 infodiv.appendChild(h3);
                 infodiv.appendChild(h2);
                 infodiv.appendChild(h4);
                card.appendChild(infodiv);
                console.log('rado');
            }
        });
    })
})
