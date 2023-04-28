function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    //console.log(data)

    //const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // lien d'un photographer => `/photographer.html?id=${id}`
        // Solution n°1
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        //img.setAttribute("src", picture)
        img.setAttribute("src", portrait)
        console.log(portrait)

        // créer lien
        // lien.setAttribute(...) => ??? recherche google avec "js a set href" 

        const h2 = document.createElement( 'h2' );
        h2.classList.add('title');
        h2.textContent = name;

        const cities = document.createElement('h3');
        cities.textContent = city  + ', ' +  country;

        const description = document.createElement('p');
        description.textContent = tagline;

        const tjm = document.createElement('p');
        tjm.textContent = price;

        const idPhotographer = document.createElement('p');
        idPhotographer.textContent = id;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cities);
        article.appendChild(description);
        article.appendChild(tjm);
        article.appendChild(idPhotographer);

        // Solution n°2
        const newArticle = document.createElement( 'article' );
        newArticle.innerHTML = `
                <a class="ficheArtiste" href="/photographer.html?id=${id}">
                    <img src=${portrait} >
                    <h2 class="title">${name}</h2>
                    <h3>${city}, ${country}</h3>
                    <p>${tagline}</p>
                    <p>${price}€/jour</p>
                    <p>id : ${id}</p>
                </a>
        `

        return (newArticle);
    }
    return { name, portrait, city, country, tagline, price, id, getUserCardDOM }
}