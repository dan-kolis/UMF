

      // Touches to the table by the human always interest us, so we catch them
      $( tNameNow + ' tbody' ).on( 'click', 'tr', function () {
        console.log( "table touch: " );
        console.log( tableNow.row( this ).data() );
      });
      

         