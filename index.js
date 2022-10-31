

var movie =  {
    name: "ამირანი",
    languages: ["ქართული","ინგლისური","მიქსი"],
    adress: "მერაბ კოსტავას 36/1",
    movies : [
        { name:"The Shawshank Redemption" , imdb: 9.3},
        { name:"The Dark Knight" , imdb: 9.0},
        { name:"The Black Phone " , imdb: 7.0 },
    ]
}


document.write("<h2> რა ენებზე გადის ფილმები? </h3> ")
for (var i=0; i < movie.languages.length; i++ ) {
    document.write (movie.languages[i] + "</br>")
}

document.write("<h2> კინოები და მათი რეიტინგები </h3> ")
for (var i=0; i < movie.movies.length; i++ ) {
    document.write (movie.movies[i].name + "</br>")
    document.write (movie.movies[i].imdb + "</br>")
}