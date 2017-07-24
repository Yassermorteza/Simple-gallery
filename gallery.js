$(document).ready(function(){

        var title = $('h1');
          var body = $('body');
          var author = $('p');

    $.getJSON('data.json', function(data){

          var li = '';

        //data.forEach(function(item,index){
        //  var li = $('<li>' + (index+1) + '</li>');
        //  $('ul').append(li);
        // });

        for(var i=0 ; i < data.length; i++){
           li+= ('<li>' + (i + 1) + '</li>');
        }

        $('ul').append(li);

        $('li').on('click', function(){
          console.log(data[+$(this).text()-1]);
          var num = $(this).text();
          var item = data[num-1];
          var url = item.src;


          title.text(item.title);
          body.css("background-image", "url('" + url + "')");

          author.html("<a href='" + item.link + "' target='_blank'>&#169; " + item.author + "</a>");
          $('li').removeClass('btn1');
          $(this).addClass('btn1');

        })
    });
});