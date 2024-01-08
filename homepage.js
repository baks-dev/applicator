

function applicator(param) {

    var table = [];

    const request = new XMLHttpRequest();
    request.open('GET', 'https://tmdb.cub.red/?sort=now_playing&page=1', false);

    request.send(null);

    if (request.status === 200) {

        const json = JSON.parse(request.responseText);

        json.results.forEach(function (item, index) {

            const date = new Date(item.release_date);

            let itm = {};
            itm.id = item.id
            itm.title = item.title
            itm.image = item.poster_path
            itm.year = date.getFullYear();
            itm.rate = item.vote_average

            table[index] = itm;

        });
    }

    console.log(table);

    return table;
}

