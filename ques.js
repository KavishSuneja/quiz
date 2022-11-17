var quesArray = [ {
     question: "How Respiration Occurs?",
     OptionA:"Plants",
     OptionB:"Leaves",
     OptionC:"Stem",
     OptionD:"Roots",
     Answer:"Leaves",
    
    },
    
    {
     question: "Who is the Richest Person on this Planet?",
     OptionA:"Elon Musk",
     OptionB:"Jeff Bezos",
     OptionC:"J.K. Advani",
     OptionD:"Bill Gates",
     Answer:"Elon Musk",
    
    }, 
    
    {
     question: "Who is the founder of D.A.V ?",
     OptionA:"Ram Nath Kovind",
     OptionB:"Vaibhav",
     OptionC:"Kavish",
     OptionD:"Hansraj Ji",
     Answer:"Hansraj Ji",
    
    },
    
    {
     question: "Who is Carry Minati?",
     OptionA:"Tik Toker",
     OptionB:"Youtuber",
     OptionC:"Blogger",
     OptionD:"Comedian",

    }, 

    {
     question: "abcd",
     OptionA:"a",
     OptionB:"b",
     OptionC:"c",
     OptionD:"d",
    
    }, 
];

    var nextquestionbtn = document.getElementById('sbmitbtn');
    var questions = document.getElementById('questions1');
    var A = document.getElementById('a_text');
    var B = document.getElementById('b_text');
    var C = document.getElementById('c_text');
    var D = document.getElementById('d_text');
    
    

    var num = 1;


    questions.innerHTML = quesArray[0].question;
    a_text.innerHTML = quesArray[0].OptionA;
    b_text.innerHTML = quesArray[0].OptionB;
    c_text.innerHTML = quesArray[0].OptionC;
    d_text.innerHTML = quesArray[0].OptionD;
    
    function quest() {

     questions.innerHTML = quesArray[num].question;
     a_text.innerHTML = quesArray[num].OptionA;
     b_text.innerHTML = quesArray[num].OptionB;
     c_text.innerHTML = quesArray[num].OptionC;
     d_text.innerHTML = quesArray[num].OptionD;
      return num++
    };
