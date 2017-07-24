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

        $('li').first().addClass('btn1');
        body.css("background-image", "url('" + data[0].src + "')");
        title.text(data[0].title);
        author.html("<a href='" + data[0].link + "'target='_blank'>&#169; " + data[0].author + "</a>");


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
        });

        var num1 =0;

        $('.right').on('click', function(){
          num1++;
          var url1 = data[num1];

          $('.left').show();
          if(num1 === 5){
            $('.right').hide();
            $('li').removeClass('btn1');
            $('li').eq(num1).addClass('btn1');
          }else{
            $('li').removeClass('btn1');
            $('li').eq(num1).addClass('btn1');
          }
          title.text(url1.title);
          body.css("background-image", "url('" + url1.src + "')");
          author.html("<a href='" + url1.link + "' target='_blank'>&#169; " + url1.author + "</a>");

        });

         $('.left').on('click', function(){
            num1--;
            var url2 = data[num1];

              if (num1 === 0){
                  $('.left').hide();
                  $('li').removeClass('btn1');
                  $('li').eq(num1).addClass('btn1');
              }else{
                  $('li').removeClass('btn1');
                  $('li').eq(num1).addClass('btn1');
              }

            $('.right').show();
            title.text(url2.title);
            body.css("background-image", "url('" + url2.src + "')");
            author.html("<a href='" + url2.link + "' target='_blank'>&#169; " + url2.author + "</a>");

        });
    });
});