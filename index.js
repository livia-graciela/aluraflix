var listaFilmes = [
    "https://posterspy.com/wp-content/uploads/2020/03/The_Crow_Poster_02-1500x2222.jpg",
    "https://fanart.tv/fanart/movies/9479/movieposter/the-nightmare-before-christmas-5e006a7ed8c89.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/7/7c/Interview_with_a_Vampire.jpg"
  ];
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }