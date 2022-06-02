fetch('https://restcountries.com/v2/all')
.then(res => res.json())
.then(data => displayCountries(data))

const displayCountries = countries =>{
    const div  = document.getElementById('countryDisplay')
    
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country'

        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo
        div.appendChild(countryDiv)
    });




    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div')
    //     countryDiv.className = 'country'

    //     const countryInfo = `
    //         <h3>${country.name}</h3>
    //         <p>${country.capital}</p>
    //     `
    //     countryDiv.innerHTML = countryInfo
    //     div.appendChild(countryDiv)


        // const name = document.createElement('h3')
        // name.innerText = country.name
        // countryDiv.appendChild(name)

        // const capital = document.createElement('p')
        // capital.innerText = country.capital
        // countryDiv.appendChild(capital)

        // div.appendChild(countryDiv)

        // // li.innerText = country.name
        // // ul.appendChild(li)
        // // // console.log(country.name)
    // }
}