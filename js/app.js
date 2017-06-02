let perPage = $('.student-item').length / 10; //Global variables declared at top
let pageTotal = Math.ceil(perPage);
let $students = $('.student-item');
let pageNum = 0;

$students.slice(10).hide(); //Hide all students initially but first 10

for (i = 0; i < pageTotal; i++) { //Make page links for each Page of students
  pageNum += 1;
  $('.pagination').append(`<a href="#"><li>${pageNum}</li><a>`);
};

$('a').click(function(e){ //Click handler for page links
  let numButton = +$(e.target).text();
  e.preventDefault();

  if(numButton === 1){  //Conditional statment uses page number to calculate and show correct page 
    $students.hide();
    $students.slice(0,10).show();
  } else {
    $students.hide();
    numAdjust = numButton - 1;
    index1 = numAdjust * 10;
    index2 = index1 + 10;
    showStudent = $students.slice(index1,index2);
    showStudent.show();
  }
});                