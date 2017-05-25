let i1 = 0;
let i2 = 10;
let pageNum = 2;
let test = $('li').length;
let allLi = $('li').length;

$('.back').hide();
$('li').slice(i2, allLi).hide();
$('button span').html(pageNum);

$('.more').click(function(){   //manages click for more button////////////////////////
  i1 += 10;
  i2 += 10;
  pageNum += 1;
  
  $('li').hide();
  $('li').slice(i1, i2).show();
  $('button span').html(pageNum);

  if(i2 >= test){
    $('.more').hide();
  }
  if(i1 > 5) {
    $('.back').show();
  }else{
    $('.back').hide();
  }
});
  
$('.back').click(function(){  //manages click for back button////////////////////////
  i1 -= 10;
  i2 -= 10;
  pageNum -= 1;
  
  $('li').hide();
  $('li').slice(i1, i2).show();
  $('button span').html(pageNum);
  
  if( i2 <= test){
    $('.more').show();
  }
  if(i1 > 5) {
    $('.back').show();
  }else{
    $('.back').hide();
  }
});






























// $('.student-item, .back').hide();

// let i1 = 0;
// let i2 = 10;

// let index1 = $('li').length;
// let index2 = $('li').length;
// console.log(index1);

// test = $(document).ready(function(){
// let i = $('li').slice(i1, i2).show();

// });

// $('.more').click(function(){
//   $('.back').show();
//   i1 += 10;
//   i2 += 10;
// });
