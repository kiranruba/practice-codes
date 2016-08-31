const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Indicators.csv')
});
var a=0;
var tot=[];
var ind={};
var i=1960;
rl.on('line', function(line){

tot=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  if(tot[1]=="IND")
  {
    if(tot[4]==i)
    {
      if(tot[2]=="Urban population (% of total)")
      {
        ind['U-P']=tot[5];
        t1=1;
      }
      if(tot[2]=="Rural population (% of total)")
      {
        ind['R-P']=tot[5];
        t2=1;
      }
      if(t1==1 && t2==1)
      {
        ind['year']=i;
        i++;
      }
    }
  }
});
