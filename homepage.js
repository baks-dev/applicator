

async function applicator(param) {

    var table = [];

    let response = await fetch('https://tmdb.cub.red/?sort=now_playing&page=1');

    let json =  await response.json(); // прочитать тело ответа как текст

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


    //console.log(table);

    return table;
}

function applicatorOLD(param) {



    let response = fetch('https://tmdb.cub.red/?sort=now_playing&page=1');

    if (response.ok) {

        //let json = response.json();

        const obj = JSON.parse(response.json());

        obj.results.forEach(function (item, i, arr) {

            item.id,
                item.name

            //item.checked = $this.dataset.id === item.dataset.id;
        });


    } else {
        alert("Ошибка HTTP: " + response.status);
    }


    return param;
}


