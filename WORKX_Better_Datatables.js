
// Semi running code but hopefully all 100 % known good

var testNow = {}; 

testNow.theExe = t2010; testNow.theDescription = "Clicks to tables; testNow.roughlyWhen = "01 May 2021";
// A click to table2 shows the data cell on console 01May21
function t2010()
{
    let dT;
    dT = "mytable8";
    dT = "table2";

    let mMore = "tbody";
    let clickMore = 'tr td';

    $( "#" + dT + " " + mMore ).on( "click", clickMore, function() 
    {
        alert( 'Look at console for a zebra' );
        console.log( 'zebra: ' + $( this ).text() ) ;
    });
  }

 
//testNow.theExe = t1229; testNow.theDescription = "Understanding THIS all the way"; testNow.roughlyWhen = "02 May 2021";
// Using this with tables well 02may21
  function t1229()
  {
      let dT;
      dT = "mytable8";
      dT = "table2";
  
      let mMore = "tbody";
      let clickMore = 'tr td';
  
      $( "#" + dT + " " + mMore ).on( "click", clickMore, function(e) 
      {
        alert( 'Look at console for a zebra-32' );
        console.log( 't1229 zebra: ' + $( this ).text() ) ;
        console.log( e );
        console.log( typeof e );
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        alert('Row: ' + row + ', Column: ' + col);
        });
    }
  
    
  //  $(document).ready(function() {
//    var table = $('#example').DataTable();
     
//    $('#example tbody').on('click', 'tr', function () {
//        var data = table.row( this ).data();
//        alert( 'You clicked on '+data[0]+'\'s row' );
//    } );
//} );

