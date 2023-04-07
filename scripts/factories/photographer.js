function photographerFactory(data) {
    const { name, portrait, city, country } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        // Ajout code
        const city = document.createElement('p');
        city.textContent = city;
        const country = document.createElement('p');
        country.textContent = country;


        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(city);
        article.appendChild(country);
        return (article);
    }
    return { name, picture, city, country, getUserCardDOM }
}