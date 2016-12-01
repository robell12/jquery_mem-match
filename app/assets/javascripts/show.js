$(document).ready(function() {
  var superClick = 0;
  var imgClicked = [];
  var img1;
  var img2;
  var matchCount = 0

  $('.reset').click(function() {
    $('img').addClass('hiden-img');
    alert("You're game has been reset!");
    matchCount = 0;
  })


  $('.objects').click(function() {
    img = $(this).children()
    $(this).find('img').removeClass('hiden-img');
    if(!img1) {
      img1 = img
    } else {
      img2 = img
    }
    imgClicked.push($(this).children().attr('src'))
    ++ superClick
    matching();
  })

  function matching() {
    if(superClick === 2) {
      if(imgClicked[0] === imgClicked[1]) {
        if(matchCount === 7) {
          alert('You won! Good Job!')
          $('img').addClass('hiden-img');
        } else {
          imgClicked = []
          img1 = null;
          img2 = null;
          superClick = 0
          ++ matchCount
          alert('Matches made magically: ' + matchCount)
        }
      } else {
        setTimeout(function(){
          img1.addClass('hiden-img')
          img2.addClass('hiden-img')
        img1 = null;
        img2 = null;
        superClick = 0;
        imgClicked = [];
      }, 1000);
      }
    } else {
    }
  }
  matching()
})
