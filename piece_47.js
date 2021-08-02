// Get each tablename and hook it up to whatever it should be hooked to
systemShape.forEach( function( daFacts )
{
  let tNameNow = 'table' + daFacts[ 0 ]; 
  let table = $('#' + tNameNow ).DataTable();
        table.MakeCellsEditable({
    "onUpdate": editsCb, "paging": false
      });
  });

//	systemShape.forEach( function( daFacts )
//    {
//      let tNameNow = 'table' + daFacts[ 0 ]; 
//      let table = $('#' + tNameNow ).DataTable();
//            table.MakeCellsEditable({
//        "onUpdate": editsCb, "paging": false
//          });
//      });
