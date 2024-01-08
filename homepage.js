

async function applicator(param) {

    var table = [];

    let response = await fetch('https://tmdb.cub.red/?sort=now_playing&page=1');

    let json = await response.json();

    //console.log(json.results);

    json.results.forEach(function (item, index) {

        //console.log(item);
        // console.log(item.title);
        // console.log(item.name);

        const date = new Date(item.release_date ? item.release_date : item.first_air_date);

        let itm = {};

        itm.id = item.id;
        itm.title = item.title ? item.title : item.name;
        itm.image = 'https://imagetmdb.cub.red/t/p/w300' + item.poster_path;
        itm.year = date.getFullYear();
        itm.rate = item.vote_average.toFixed(1);

        table[index] = itm;

    });

    return table;
}