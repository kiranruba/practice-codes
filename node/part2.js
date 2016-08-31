const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('Indicators.csv')
});
var univ=[];
var year=[];
var obj,i=0;
var Asian_Country = ["Arab World","East Asia & Pacific (all income levels)","East Asia & Pacific (developing only)","South Asia","Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei Darussalam","Cambodia","China","Georgia","Indonesia","Iran, Islamic Rep.","Iraq","Israel","Japan","Jordan","India"];

rl.on('line', function(line){
var tot=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
for(var k in Asian_Country)
   {
if(tot[0]==Asian_Country[k])
{
  //console.log(Asian_Country[k]);
var y=year.indexOf(tot[4]);
var yr=0;
  if(y==-1)
  {
    if(i!=0)
univ.push(obj);
i++;
    obj={};
    obj['year']=tot[4];
    obj['UP']=0;
    obj['RP']=0;
    year.push(tot[4]);
  }
  if(tot[2]=="Urban population" )
  {
        obj['UP']+=parseFloat(tot[5]);
  }
  {
    obj['RP']+=parseFloat(tot[5]);
  }}}
});

rl.on('close',function(){
  var file='part1.json';
  var obj=JSON.stringify(univ);
  fs.writeFile('part2.json',obj,function()
{
  console.log("shaabbhahha");
});
});
