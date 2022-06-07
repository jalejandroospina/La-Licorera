fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log( data[0].title )
        console.log( data[0].body )
    })
