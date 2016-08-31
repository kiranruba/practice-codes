const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('crime.csv')
});
var univ=[];
var year=[];
var obj,i=0;
var f=0;
console.time("helo");
rl.on('line', function(line){

var tot=line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

if(f==0)
{
  header=tot;
  //console.log(header);
  f=1;
}
//console.log(tot[header.indexOf('Primary Type')]);

  if(tot[header.indexOf('Primary Type')]=="THEFT")
    {
      var y=year.indexOf(tot[header.indexOf('Year')]);
      if(y==-1)
        {



          obj={};
          obj['year']=tot[header.indexOf('Year')];
          obj['THEFT OVER $500']=0;
          obj['THEFT $500 AND UNDER']=0;
          year.push(tot[header.indexOf('Year')]);
          if(tot[header.indexOf('Description')]=="OVER $500" )
          {
                obj['THEFT OVER $500']++;
          }
          if(tot[header.indexOf('Description')]=="$500 AND UNDER")
          {
            obj['THEFT $500 AND UNDER']++;
          }
            univ.push(obj);
        }
        else{
          for(var j in univ)
          {
            if(univ[j].year==tot[header.indexOf('Year')]){
              //year.push(tot[header.indexOf('Year')]);
              if(tot[header.indexOf('Description')]=="OVER $500" )
              {
                    univ[j]["THEFT OVER $500"] ++;
                    // console.log(univ[j].year);
                    // console.log(univ[j]["THEFT OVER $500"]);
              }
              if(tot[header.indexOf('Description')]=="$500 AND UNDER")
              {
                univ[j]["THEFT $500 AND UNDER"]++;
              }}}}}

}
);

rl.on('close',function(){
  univ.sort(function (a, b) {
return a.year- b.year ;

    });
  console.log(univ);
  var file='crime.json';
  var obj=JSON.stringify(univ);
  fs.writeFile('crime.json',obj,function()
{
  console.log("shaabbhahha");
});
console.timeEnd("helo");
});
