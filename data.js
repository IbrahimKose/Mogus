module.exports=function(){
    return {
        movies:[
            {id: 1, name:"Shawshank Redemption", rating:9.2, imageUrl:"shawshank.jpg", description:1994, price:4.99, categories:["Drama"]},
            {id: 2, name:"Godfather", rating:9.2, imageUrl:"godfather1.jpg", description:1972, price:6.99, categories:["Crime","Drama"]},
            {id: 3, name:"The Dark Knight", rating:9.0, imageUrl:"tdk.jpg", description:2008, price:10, categories:["Action","Crime","Drama"]},
            {id: 4, name:"Godfather 2", rating:9.0, imageUrl:"godfather2.jpg", description:1974, price:5.99, categories:["Crime","Drama"]},
            {id: 5, name:"12 Angry Men", rating:9.0, imageUrl:"12am.jpg", description:1957, price:3.99, categories:["Crime","Drama"]},
            {id: 6, name:"Schindler's List", rating:8.9, imageUrl:"schindler.jpg", description:1993, price:4.99, categories:["Drama"]},
            {id: 7, name:"TLotR: TRotK", rating:8.9, imageUrl:"lotrtrotk.jpg", description:2003, price:9.99, categories:["Action"]},
            {id: 8, name:"Pulp Fiction", rating:8.8, imageUrl:"pulpfiction.jpg", description:1994, price:4.99, categories:["Crime"]},
            {id: 9, name:"TLotR: TFotR", rating:8.8, imageUrl:"tlotrtfotr.jpg", description:1972, price:6.99, categories:["Crime","Drama"]},
            {id: 10, name:"Good, Bad and Ugly", rating:8.8, imageUrl:"gbau.jpg", description:1972, price:6.99, categories:["Crime","Drama"]},
            {id: 11, name:"Forrest Gump", rating:8.8, imageUrl:"forrestgump.jpg", description:1972, price:6.99, categories:["Crime","Drama"]},
            {id: 12, name:"Fight Club", rating:8.7, imageUrl:"fightclub.jpg", description:1972, price:6.99, categories:["Crime","Drama"]},

        ],
        categories:[
            {id:1, name:"Action"},
            {id:2, name:"Drama"},
            {id:3, name:"Crime"}
        ],
        orders:[]
    }
}