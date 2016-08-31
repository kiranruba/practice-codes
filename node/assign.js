const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Indicators.csv')
});

var ind=[],t1=0,t2=0,i=1960;

var asi=[],j=1960;
var asia=[],m;
rl.on('line', function(line){
var tot=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
 if(tot[1]=="IND")
 {
   var obj={};
   if((tot[2]=="Urban population (% of total)" )||(tot[2]=="Rural population (% of total population)"))
   {
     if(tot[4]==i)
     {
       var indname=tot[2];
       obj[indname]=tot[5];
       obj['year']=tot[4];
       ind.push(obj);
       t1++;
     }
   }


     if(t1==2)
     {
        i++;t1=0;
     }
   }
var Asian_Country = ["Arab World","East Asia & Pacific (all income levels)","East Asia & Pacific (developing only)","South Asia","Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei Darussalam","Cambodia","China","Georgia","Indonesia","Iran, Islamic Rep.","Iraq","Israel","Japan","Jordan","India"];

for(var k in Asian_Country)
   {
   if(tot[0]==Asian_Country[k])
   {

   var obj={};
   if((tot[2]=="Urban population" ))
   {
     if(tot[4]==j)
     {
       var indname=tot[2];
       obj[indname]=tot[5];
       obj['year']=tot[4];
obj['country']=tot[1];
       asi.push(obj);
       t2++;
     }
   }


     if(t2==40)
     {
        j++;t2=0;
     }
   }


 }
});


rl.on('close',function(){
  //console.log(ind);
 //console.log(asi);
 var up=0,rp=0;
 var y=1960;
 var tp=0;
 var obj={};
 var u="Urban population";
 var r='Rural population';
 for(var l in asi)
 {
   var urb=parseFloat(asi[l]['Urban population']);
   var rur=parseFloat(asi[l]['Rural population'])
   if(asi[l].year==y)
   {
     up=up+urb;
     rp=rp+rur;
     tp++;
    console.log(up);
     console.log(rp);
   }
   if(tp==40)
   {
     obj['U-P']=up;
     obj['L-P']=rp;
     obj['year']=y;
     asia.push(obj);
     obj={};
     tp=0;
     y++;
   }
 }
console.log(asia);



});
