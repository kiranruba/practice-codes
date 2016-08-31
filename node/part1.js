const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Indicators.csv')
});

var univ=[];
var year=[];
var obj;
var f=0;
var header=[];
rl.on('line', function(line){
var tot=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
if(f==0)
{
  header=tot;
  console.log(header);
  f=1;
}
if(tot[1]=="IND")
{
var y=year.indexOf(tot[4]);

  if(y==-1)
  {

    obj={};
    obj['year']=tot[4];
    year.push(tot[4]);

t=0;
  }
  if(tot[2]=="Urban population (% of total)" )
  {
    obj['UP']=parseFloat(tot[5]);


  }
  if(tot[2]=="Rural population (% of total population)" )
  {
    obj['RP']=parseFloat(tot[5]);
    univ.push(obj);
    t++;
  }
}
});

rl.on('close',function(){
  var file='part1.json';
  var obj=JSON.stringify(univ);
  fs.writeFile('part1.json',obj,function()
{
  console.log("shaabbhahha");
});

});
