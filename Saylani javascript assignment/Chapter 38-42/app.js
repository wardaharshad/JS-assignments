// Task 1
function power(a,b){
    return a**b;
}

// Task 2
function leapyear(year){
    if(year%4==0){
        alert("This is a Leap Year");
    }
}

// Task 3
function semiperimeter(a,b,c){
    return (a+b+c)/2
}
function area(a,b,c){
    var s = semiperimeter(a,b,c);
    return s*(s-a)*(s-b)*(s-c);
}

// Task 4
function average(s1,s2,s3){
    return (s1+s2+s3)/3;
}
function percentage(s1,s2,s3,total){
    return ((s1+s2+s3)/total)*100;
}
function mainFunction(s1,s2,s3,total){
    var avg = average(s1,s2,s3);
    var percent = percentage(s1,s2,s3,total);
    alert("Your average Marks are "+avg.toFixed(2)+"and your percentage is "+percent.toFixed(2));
}

// Task 5
function CustomIndexOf(string,word){
    var string = string.toLowerCase();
    var word = word.toLowerCase();
    var index  = -1;
    for(var i=0;i<string.length;i++){
        if(string[i]===word[0]){
            for(var j=1;j<word.length;j++){
                if(string[i+j]===word[j]){
                    var index = i;
                    continue;
                }
                else{
                    index = -1;
                    break;
                }
            }
        }
    }
    return index;
}

// Task 6
 function vowel_remover(sentence){
        return sentence.replace(/[aeiou]/g,"",);
}

// Task 7
function count_vowel(string){
    var vowels = ["a","e","i","o","u"];
    var count = 0;
    for(var x = 0;x<string.length;x++){
        switch (vowels.includes(string[x]) && vowels.includes(string[x+1])){
            case true:
                count++;
                break;
        }
    }
    return count;
}

// Task 8
function dist_in_meters(d){
    return  d*1000; 
}
function dist_in_feet(d){
    return  d*3281;  //approx 
}
function dist_in_inches(d){
    return  d*39370; 
}
function dist_in_centimeters(d){
    return  d*100000; 
}
var distance = prompt("Enter distance between two cities (in km.)");
var out = "Distance in meters: "+dist_in_meters(distance)+"\n"+
          "Distance in feet: "+dist_in_feet(distance)+"\n"+
          "Distance in inches: "+dist_in_inches(distance)+"\n"+
          "Distance in centimeters: "+dist_in_centimeters(distance)+"\n";
alert(out);

// Task 9
 function overtimePay(hours){ 
    if( hours>40){
         return (hours-40)*12;
     }
     else{
         return 0;
     }
 }
 var hoursWorked = prompt("Enter the number of hours worked");
alert("Your overtime pay is "+overtimePay(hoursWorked));

// Task 10

var amount  = prompt("Enter amount to Withdraw");
if(amount%10 !== 0){
    alert("Enter amount in multiple of 10");
}
function withdraw(amount){
    var notes = [10, 50, 100];
    var out = [];
    for(var c=notes.length-1;c>=0;c--){
        out.push((amount-amount%notes[c])/notes[c])
        amount-= amount-amount%notes[c]
    }
    return out;
}
document.write("You will have "+withdraw(amount)[0]+" hundred note(s) "+withdraw(amount)[1]+" fifty note(s) "+withdraw(amount)[2]+" ten note(s)")
