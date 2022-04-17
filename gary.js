function tips(){
  alert("If you think this is the real Gary, fill in T, otherwise, fill in F.");
    alert("Let's reveal Gary's mystery together!");
}


    function answer(){
      var response=prompt("TRUE or FALSE");
      if(response=="F"){
        alert("YEAH!");
      }
      else {
        alert("NO...");
      }
    }
    function answer1(){
      var response=prompt("write down your answer");
      if(response=="F"){
        alert("YEAH!");
      }
      else {
        alert("NO...");
      }
    }
    function answer2(){
      var response=prompt("write down your answer");
      if(response=="T"){
          alert("YEAH!");
          alert("Gary, a literary b man who always pretends to be an indifferent handsome guy.");
          alert("Actually has the gentlest and warmest heart in the world.");
          alert("And, my babe, if you see this, I hope you will forgive me for always bullying you in the name of love. ");
          alert("I love you , my little puppy.");
      }
      else {
        alert("NO...");
      }
    }
    function sayhello(){
      if(score==100){
        alert("Your score is "+score+" ,you are a real fan!!!");
      }
      if(score>10&score<=99){
        alert("Your score is "+score+" ,keep fighting!");
      }
      if(score==10){
        alert("Your score is "+score+" ,you still have a long way to go");
      }
}
