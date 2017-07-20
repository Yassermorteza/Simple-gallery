$(document).ready(function(){

        var title = $('h1');
          var body = $('body');
          var author = $('p');

    $.getJSON('data.json', function(data){

          var li = '';
        //data.forEach()
        for(var i=0 ; i < data.length; i++){
           li+= ('<li>' + (i + 1) + '</li>');
        }

        $('ul').append(li);

        $('li').on('click', function(){

          var num = +$(this).text();
          var item = data[num -1];
          var url = item.src;

          title.text(item.title);
          body.css("background-image", "url('" + url + "')");
          author.html("<a href='" + item.link + "' target='_blank'>&#169; " + item.author + "</a>");
        })
    });
});