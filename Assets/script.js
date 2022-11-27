var questions = [
     {
     prompt: "What fruit is Red and Round?\n(a) Banana\n\
     (b) Apple\n(c) Orange\n(d) Grapes",
     answer: "b"
     },
     {
          prompt: "What Dessert cotains the most Sugar?\n(a) Peachcobbler\n\
          (b) Ice Cream\n(c) Chocolate Cake\n(d) Cookies",
          answer:"a"
     },
     {
          prompt: "Which meat contains the hightest Protien intake?\n(a) Steak\n\
          (b) Seafood\n(c) Chicken\n(d) Pork",
          answer: "c"
     },
     {
          prompt: "What is your favorite type of food?\n(a) All types !\n\
          (b) You don't really care !\n(c) Oh My God, Im on like a Diet!\n(d) OHHH MY GODDD FOODDDD !!!"
          answer: "d"
     }
]
var score = 0

for( var i=0; i< questions.length; i++){
     var response =window.prompt(questions[i].prompt);
     if( response == questions[i].answer){
          score++;
          alert("You Got It!!!");
     } else {
          alert("ANT Try Again");
     }
}
alert("Congradulations you scored" + score + "/" questions.length);