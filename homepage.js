

async function applicator(param) {

    var table = [];

    let response = await fetch('https://tmdb.cub.red/?sort=now_playing&page=1');

    let json =  await response.json();

    //console.log(json.results);

    json.results.forEach(function (item, index) {

        const date = new Date(item.release_date);

        let itm = {};
        itm.id = item.id
        itm.title = item.title
        itm.image = 'https://imagetmdb.cub.red/t/p/w300'+item.poster_path
        itm.year = date.getFullYear();
        itm.rate = item.vote_average

        table[index] = itm;

    });

    return table;
}