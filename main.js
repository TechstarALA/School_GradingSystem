// var username = documnet.getElementById("name").username
// fuction add("name"){
//   document.getElementById("name").innerHTML= "username"

// }



function Total(){
    var studentName = document.getElementById("user").value;
    var ca1 = document.getElementById("eng1").value;
    var ca2 = document.getElementById("eng2").value;
    var ca3 = document.getElementById("math1").value;
    var ca4 = document.getElementById("math2").value;
    var ca5 = document.getElementById("phy1").value;
    var ca6 = document.getElementById("phy2").value;
    var ca7 = document.getElementById("chem1").value;
    var ca8 = document.getElementById("chem2").value;
    var ca9 = document.getElementById("bio1").value;
    var ca10 = document.getElementById("bio2").value;

    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("math").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chem").value);
    var sub5 = parseInt(document.getElementById("bio").value);
    
  
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
      alert("Please Enter Marks in range of 100");
    }
    else {
      var total= Number(ca1) + Number(ca2) + Number(ca3) + Number(ca4) + Number(ca5) + Number(ca6) + Number(ca7) + Number(ca8) + Number(ca9) + Number(ca10) + Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5);
      document.getElementById("total").innerHTML = studentName + " your total Marks is: " + total;  
    }
  };  
    
  
  
  function Average(){
    var studentName = document.getElementById("user").value;
    var ca1 = document.getElementById("eng1").value;
    var ca2 = document.getElementById("eng2").value;
    var ca3 = document.getElementById("math1").value;
    var ca4 = document.getElementById("math2").value;
    var ca5 = document.getElementById("phy1").value;
    var ca6 = document.getElementById("phy2").value;
    var ca7 = document.getElementById("chem1").value;
    var ca8 = document.getElementById("chem2").value;
    var ca9 = document.getElementById("bio1").value;
    var ca10 = document.getElementById("bio2").value;

    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("math").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chem").value);
    var sub5 = parseInt(document.getElementById("bio").value);
      
    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
      alert("Please Enter Marks in range of 100");
    }
    else {
      var total= Number(ca1) + Number(ca2) + Number(ca3) + Number(ca4) + Number(ca5) + Number(ca6) + Number(ca7) + Number(ca8) + Number(ca9) + Number(ca10) + Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5);
      var avg= total/5;
      document.getElementById("avg").innerHTML= studentName + " ! Your Average marks are: "+avg;
    }
  }
    
    
  function Grade(){
    var studentName = document.getElementById("user").value
    var ca1 = document.getElementById("eng1").value;
    var ca2 = document.getElementById("eng2").value;
    var ca3 = document.getElementById("math1").value;
    var ca4 = document.getElementById("math2").value;
    var ca5 = document.getElementById("phy1").value;
    var ca6 = document.getElementById("phy2").value;
    var ca7 = document.getElementById("chem1").value;
    var ca8 = document.getElementById("chem2").value;
    var ca9 = document.getElementById("bio1").value;
    var ca10 = document.getElementById("bio2").value;

    var sub1 = parseInt(document.getElementById("eng").value);
    var sub2 = parseInt(document.getElementById("math").value);
    var sub3 = parseInt(document.getElementById("phy").value);
    var sub4 = parseInt(document.getElementById("chem").value);
    var sub5 = parseInt(document.getElementById("bio").value);
      
     if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
    {
      alert("Please Enter Marks in range of 100");
    }else {
       var total= Number(ca1) + Number(ca2) + Number(ca3) + Number(ca4) + Number(ca5) + Number(ca6) + Number(ca7) + Number(ca8) + Number(ca9) + Number(ca10) + Number(sub1) + Number(sub2) + Number(sub3) + Number(sub4) + Number(sub5);
       var avg=total/5;
       
       if(avg>=80 && avg<=100)
       {
         document.getElementById("grade").innerHTML= "Congratulations  " + studentName +"!," + " You Got A+ Grade";
       }
       else if(avg>=75 && avg<=80)
       {
         document.getElementById("grade").innerHTML="Congratulations  " + studentName +"!," + "You Got A+ Grade";
       }
       else if(avg>=70 && avg<=75)
       {
         document.getElementById("grade").innerHTML= "Congratulations  " + studentName +"!," + "You Got A Grade";
       }
       else if(avg>=65 && avg<=70)
       {
         document.getElementById("grade").innerHTML= "Congratulations  " + studentName +"!," + "You Got B Grade";
       }
       else if(avg>=50 && avg<=60)
       {
         document.getElementById("grade").innerHTML=studentName +"!," + "You Got C Grade";
       }
       else if(avg>=40 && avg<=50)
       {
         document.getElementById("grade").innerHTML=studentName +"!," + "You Got C Grade";
       }
       
       else {
         document.getElementById("grade").innerHTML=studentName +"!," + "You Got F Grade";
       }
       
      
    }
  
  
  }
  