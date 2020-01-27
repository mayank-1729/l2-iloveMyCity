function home(req, res){
    res.render('home',{
        title:'iLoveMyCity',
        headline: 'Every City Has Story Of Its Own.'
    });
}

function city(req, res){
    var cityName = req.params.city;
    var title, headline;
    var imagesCount = 4;
    
    //console.log(cityName)
    switch(cityName){
        case 'paris':
            title = 'Paris';
            headline = 'In Paris, our lives are one masked ball.';
            break;
        case 'mumbai':
            title = 'Mumbai';
            headline = 'Aamchi Mumbai.';
            break;
        case 'madrid':
            title = 'Madrid';
            headline = 'From Madrid to heaven and there a little hole to see it.';
            break;
        case 'tokyo':
            title = 'Tokyo';
            headline = 'Tokyo was an origami city folded over and over until something was made of virtually nothing.';
            imagesCount = 6;
            break;
        case 'phuket':
            title = 'Phuket';
            headline = 'Sometimes you just have to say PHUKET.';
            break;
    }

    res.render('city', {
        title: title,
        headline: headline,
        imagesCount: imagesCount,
        city:cityName
    });
}

module.exports = {
    home:home,
    city:city
}