var search=angular.module('search',[])
search.filter('searchfil', function() {
        var send,ck;
        return function(input,sort,fillt,emp,scope) {
          send=[];
          //console.log("crime",crime);
          //console.log("input",input);
            for(var i in input){
              ck=0;
              for(j in emp){
                if( (i==emp[j]) )
                ck=1;}
               if ((input[i][sort]>=fillt)&& ck!=1){
                      send.push(input[i]);
                      }
                     }
                     scope.total=send.length;
                    console.log(scope.total);
                     return send;
              };
});
