define('slides/slide',
    [
        'utils/global'
        // , 'slides/trailer'
        , 'slides/index'
        , 'slides/world'
        , 'slides/race'
        , 'slides/classes'
        , 'slides/zone'
        , 'slides/ship'
        , 'slides/trade'
        , 'slides/glider'
        // , 'slides/court'
        , 'slides/pvp'
        , 'slides/life'
        , 'slides/siege'
    ],
    function (global, /*trailer,*/ index, world, race, classes, zone, ship, trade, glider, /*court,*/ pvp, life, siege) {

        var slides = [].concat(/*trailer,*/ index, world, race, classes, zone, ship, trade, glider, /*court,*/ pvp, life, siege)

        return slides
    })
/*  |xGv00|69ef0c175b3000d59232aa0391d257f7 */