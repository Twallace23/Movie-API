
$("#movieForm").submit(function(e){
        e.preventDefault()
    var movie = $("#movie").val()
    //alert(movie);
    //console.log(movie);
    //var apikey= "61f9b3af"
    var url =  "http://www.omdbapi.com/?apikey=61f9b3af"+"&s="+movie
        console.log(url)
            $.ajax({method:'GET',url:url,dataType:"jsonp" })
            .then(function(data){
            console.log(data);
           // for(var i=0; i < data.Search; i++){
            searchResult= `
            <img src="${data.Search[0].Poster}"/>
            <h2>${data.Search[0].Title}</h2>
            `;
            $("#searchResult").html(searchResult);
           // }
         })
         //$("#searchResult").html(searchResult);
      })

    