// Create needed constants

// Chrono super slack but real documentation 'in here' Keep up to date

// var or const idbObjStoName = 'something';

// This name   idbObjStoName   defines 100% of the point of app to IDB contact. so this chrono log
// applies. keep it up to date. Date and time is UCT all are version number 1

// 29 Mar 2021 01:37   stuffola
// stuffola1 set aside, left on NewtonHnf now

// 29 Mar 2021 01:38   stuffmore10a
// Make ten named key slots for tables when first touched assuming updates are PUTs
// also five more misc ones. Names are t0 to t10 inclusive for keys. and
// m1 to 5 inclusive for misc. really temp step is nobody10a

// 29 Mar 2021 11:17   nobody10a
// Using this for the day, probably, almost for sure

// 29 Mar 2021 20:22   nobody10a
// Show and tell on PIONEER today   

// 30 Mar 2021 16:50   nobody10a
// Just touch up date ver code for 'now' 16:52 today. No other changes yet

// 23 Apr 2021 22:09   nobody10a
// More abstract keys in development for lists not scalars

// 24 Apr 2021 18:00  nobody10a
// Improve and/or fix cursor to world lists of all records, might be improved shortly
// ex not save unwanted ones, unsure

// 25 Apr 2021 12:15  nobody10a
// Quite a lot of change, but preshow and gettable keys works now

// 27 Apr 2021 04:23  nobody10a
// Released after changes over a hew days, now

const idbObjStoName = 'nobody10a'

// More mundane set stuff
const idbList = document.querySelector('ul');
const titleInput = document.querySelector('#title');
const idbInput = document.querySelector('#body');
const idbForm = document.querySelector('form');
const submitBtn = document.querySelector('form button');
const idbhappykeys = 'everything1'

// Marks for keys, a simple token scheme
const keyLp = "[[[[", keyRp = "]]]]", keyGap = " ";

var displayKind = "k";                                    // Is key

var myVerIdb = "local_idb_database 25 Apr 2021 12:15";

// Ver of me
function versionOfIdb()
{
  return myVerIdb;
}

// Ready to use #zzzz
function PrepareIdbLocalDatabaseToUse() 
{
  // Open our database; it is created if it doesn't already exist
  let vSrN = 1;                                                             // Version start number
  let request = window.indexedDB.open( idbObjStoName, vSrN );

  // Onerror handler signifies that the database didn't open successfully
  request.onerror = function() {
    console.log(' Database failed to open ');
  };

  // Setup the database tables if this has not already been done
  request.onupgradeneeded = function( e ) 
  {
    // Grab a reference to the opened database
    let idbLocal = e.target.result;

    // Create an object_store to store our facts
    let objectStore = idbLocal.createObjectStore( 
                      idbObjStoName, { autoIncrement:false } );

    // Define what data items the objectStore will contain
    objectStore.createIndex( 'mycode', 'mycode', { unique: false });
    objectStore.createIndex( 'mycontent', 'mycontent', { unique: false });

    console.log( 'Database initial create complete, is: ' + idbObjStoName );
  };

  // The   onsuccess   handler signifies that the database opened successfully
  request.onsuccess = function() {
    console.log(' Database opened successfully is: ' + idbObjStoName );

    // Store the opened database object in the db variable. This is used a lot below
    idbLocal = request.result;
    
    // Leave the keys for all records lurking im memory
    GetIdbKeys( 'con' );
  
    // Global says we are usable now
    idbRunning = true;
  };
};


// Make X action number
function gimmeTransactionNumber()
{
  // Number shot term should be unique
  let rn1 = Math.random(); let rn2 = Math.pow(10,6) * rn1;
  let rn3 = Math.round( rn2 );

  // Its not really a number, number
  return rn3.toString();
}


// Just in case of need for more debugging worked A P R I L 24 2 0 2 1
function hardLoveIGoodForFunDebugging()
{
  // Cursor tour of db to console

  console.log( 'Hard love' );

  var dbOpenRequest = window.indexedDB.open( idbObjStoName, 1 );

  dbOpenRequest.onsuccess = function(event) 
  {
    db = dbOpenRequest.result;
    console.log( 'onsuccess');
  }

  dbOpenRequest.onerror = function(event) 
  {
    console.log( 'onerror' );
  };
};


// Return one record by known key 28apr21 #zzzz
function GimmeOneHunkByKey( daKnownKey, cb, daTabN )
{
  console.log( 'GimmeOneHunkByKey called' );

  var dbOpenRequest = window.indexedDB.open( idbObjStoName, 1 );

  dbOpenRequest.onsuccess = function(event) 
  {
    db = dbOpenRequest.result;
    gimmeOneByKeyINNER( daKnownKey, cb, daTabN );
  }

  dbOpenRequest.onerror = function(event) 
  {
    console.log( 'idb key get failed' );
  };
};


// Make records from scratch #zzzz
function makeRecordsJustSo( gKn )
{
  console.log( 'makeRecordsJustSo called' );

  var dbOpenRequest = window.indexedDB.open( idbObjStoName, 1 );

  dbOpenRequest.onsuccess = function(event) 
  {
    db = dbOpenRequest.result;
    makeOneByKeyINNER( gKn, 'useadd' );
  }

  dbOpenRequest.onerror = function(event) 
  {
    console.log( 'idb open for just so failed' );
  };
};


// Change records given key and new content #zzzz
function makeRecordInto( gKn, putItIn )
{
  console.log( 'makeRecordInto called' );

  var dbOpenRequest = window.indexedDB.open( idbObjStoName, 1 );

  dbOpenRequest.onsuccess = function(event) 
  {
    db = dbOpenRequest.result;
    makeOneByKeyINNER( gKn, 'useput', putItIn );
  }

  dbOpenRequest.onerror = function(event) 
  {
    console.log( 'idb open for record change failed' );
  };
};




// Return key HELPER 03apr21 fillsavegethunks
function makeOneByKeyINNER( keyN, aKind, someContent )
{
  // Make record from scratch ( not update it )

  var transaction = db.transaction( [ idbObjStoName ], 'readwrite' );
  var objectStore = transaction.objectStore( idbObjStoName );

  // Well empty 
  let nT = { rats: 'in nice outfits' }; nT = {};

  // Make a request to add or put to a record by key from the object store
  var objectStoreRequest;
  if( aKind == 'useadd' )   { objectStoreRequest = objectStore.add( nT, keyN ); }
  if( aKind == 'useput' )   { objectStoreRequest = objectStore.put( someContent, keyN ); }

  // Transaction complete
  transaction.oncomplete = function(event) 
  {
    console.log( 'idb record make complete: ' + keyN + ' is the new key' );
  };

  // Failed
  transaction.onerror = function(event) 
  {
    console.log( 'idb record make failed' );
  };

  // Worked
  objectStoreRequest.onsuccess = function(event) 
  {
    console.log( 'idb record make worked' );  
  };
};


// Return key HELPER 28apr21 #zzzz
function gimmeOneByKeyINNER( daKey, cb, aTablNum )
{
  // Ask for it by known from some other fact

  // Note aTablNum is passed through, doesn't change what it retrieved

  var transaction = db.transaction( [ idbObjStoName ], 'readwrite' );
  var objectStore = transaction.objectStore( idbObjStoName );

  // Make a request to get a record by key from the object store
  var objectStoreRequest = objectStore.get( daKey );

  // Transaction complete
  transaction.oncomplete = function(event) 
  {
    console.log( 'idb key get complete ' );
  };

  // Make a request to get a record by key from the object store
  //var objectStoreRequest = objectStore.get("Walk dog");

  // Failed
  transaction.onerror = function(event) 
  {
    console.log( 'idb key get failed' );
  };

  // Worked
  objectStoreRequest.onsuccess = function(event) 
  {
    console.log( 'idb key get worked' );  

    // Sometimes
    if( cb != undefined )
    {
      cb( objectStoreRequest.result, aTablNum );
    }

  };
};


// Show db on list in a window
function displayData() 
{
  // Here we empty the contents of the list element each time the display is updated
  while (idbList.firstChild) 
  { idbList.removeChild(idbList.firstChild); }

    // Open our object store and then get a cursor iterate through all the stuff in there
    let objectStore = idbLocal.transaction( idbObjStoName ).objectStore( idbObjStoName );
    objectStore.openCursor().onsuccess = function(e) 
    {
      // Get a reference to the cursor
      let cursor = e.target.result;

      // If there is more data items keep running
      if(cursor) {

        // Referenced cursor is this, DEBUG useful
        let someTitle = cursor.value.mycode;
        let someContent = cursor.value.mycontent;
        console.log( someTitle, someContent );

        // Create a list item, h3, and p to put each data item inside when displaying it
        // structure the HTML fragment, and append it inside the list
        const listItem = document.createElement('li');
        const h3 = document.createElement('h3');
        const para = document.createElement('p');

        listItem.appendChild(h3);
        listItem.appendChild(para);
        idbList.appendChild(listItem);

        // Put the data from the cursor inside the h3 and para
        h3.textContent = cursor.value.mycode;
        para.textContent = cursor.value.mycontent;

        // Store the ID of the data item inside an attribute on the listItem, so we know
        // which item it corresponds to. This will be useful later if we want to delete 
        listItem.setAttribute('FindMeWithThisPtr', cursor.value.everything1);

        // Create a button and place it inside each listItem
        const deleteBtn = document.createElement('button');
        listItem.appendChild(deleteBtn);
        deleteBtn.textContent = 'Delete';

        // Set an event handler so that when the button is clicked, the deleteItemviaWWWList()
        // function is run
        deleteBtn.onclick = deleteItemviaWWWList;

        // Iterate to the next item in the cursor
        cursor.continue();
      } else 
      {
        // Again, if list item is empty, display a 'No notes stored' message
        if(!idbList.firstChild) {
          const listItem = document.createElement('li');
          listItem.textContent = 'No notes stored.'
          idbList.appendChild(listItem);
      }
        // if there are no more cursor items to iterate through, say so
        console.log('Notes all displayed');
    };
  };
};


// Lists from IDB thing for fun
function GetIdbKeys( aCmd ) 
{
  const txn = idbLocal.transaction(idbObjStoName, "readonly");
  const objectStore = txn.objectStore(idbObjStoName);
  currentIdbKeys = [];

  cMore = false;
  if( aCmd != 'nc' ) { console.log( "Local IDB Keys: " ); cMore = true; }

  objectStore.openCursor().onsuccess = (event) => {
    let cursor = event.target.result;
    if (cursor) {
      if( cMore ) { console.log( cursor.key); }
      currentIdbKeys.push( cursor.key );
      cursor.continue();
    }
  }
}
var currentIdbKeys = [];


// Maybe useful dunno
function CloseUsualDb()
{
  // This is it
  idbLocal.close();
}


// Test
function callMe( aThing )
{
  console.log( 'street haircut ' + aThing );
  idbDeleteThisOne( aThing );
}


// Delete a thing by key
function idbDeleteThisOne( daKey ) 
{
  // open a database and delete the thing named by key

  let transaction = idbLocal.transaction( [ idbObjStoName ], 'readwrite' );
  let objectStore = transaction.objectStore( idbObjStoName );
  let request = objectStore.delete( Number( daKey ) );
  moreSeeable = daKey;

  transaction.oncomplete = function() 
  {
    // Deleted
      console.log( 'Well: ' + moreSeeable + ' deleted' );
  };
};
var moreSeeable;

// The delete a thing doer
function deleteItemviaWWWList( e ) 
{
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying it use it with IDB; IDB key
  // values are type-sensitive.
  let noteId = Number(e.target.parentNode.getAttribute( 'FindMeWithThisPtr' ) );

  // open a database and delete the task, finding it using the id we retrieved above
  let transaction = idbLocal.transaction([idbObjStoName], 'readwrite' );
  let objectStore = transaction.objectStore( idbObjStoName );
  let request = objectStore.delete( noteId );

  // report that the data item has been deleted
  transaction.oncomplete = function() 
  {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild( e.target.parentNode );
    console.log( 'Note ' + noteId + ' deleted' );

    // Again, if list item is empty, display a 'No notes stored' message
    if( !idbList.firstChild ) 
    {
      const listItem = document.createElement( 'li' );
      listItem.textContent = 'No notes stored';
      idbList.appendChild( listItem );
    }
  };
};


// Create an onsubmit handler so that when the form is submitted the addData() function is run
//idbForm.onsubmit = addDataCalledViaWwwForm;

// Adding a sort of record
function addDataCalledViaWwwForm(e) 
{
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  let newItem = { mycode: titleInput.value, mycontent: idbInput.value };

  // open a read/write db, ready for adding the data
  let transaction = idbLocal.transaction([idbObjStoName], 'readwrite');

  // call an object store that's already been added to the database
  let objectStore = transaction.objectStore( idbObjStoName );

  // Make a request to add our newItem object to the object store
  var request = objectStore.add(newItem);
  request.onsuccess = function() {
    // Clear the form, ready for adding the next entry
    titleInput.value = '';
    idbInput.value = '';
  };

  // Report on the success of this completing, when everything is done
  transaction.oncomplete = function() {
    console.log('Transaction completed: database modification finished.');

    // Update something named here with what DB has of interest
    workWithEntries( displayKind );
  };

  transaction.onerror = function() {
    console.log('Idb Not opened due to error');
  };
}

// Decide where facts go
function workWithEntries( whatToDo )
{
  // Different ways to use what cursor is pointing to, usually many line items

  // Return as list
  let wAns = wvbi( whatToDo ); 
  let ac = 0;
  ac = ac + 1;
  ac = ac + 1;
  return wAns;
}  


// Interface to 'real program' a little at a time maybe dunno 27Mar21
function idbGetAllDbOneFactObject()
{
  // Way to start

  let ans = startupSavedDb;

  return ans;
};

// Save from external given 28Mar21 #zzzz
function idbPutOneRecordFactObject( aKey, theThing )
{
  // Inserted into the DB

  let newItem = { mycode: theThing.mycode, mycontent: theThing.mycontent };

  // open a read/write db, ready for adding the data
  let transaction = idbLocal.transaction( [ idbObjStoName ], 'readwrite' );

  // call an object store that's already been added to the database
  let objectStore = transaction.objectStore( idbObjStoName );

  // Make request to add our newItem object to the object store
  var request = objectStore.add( newItem );
  request.onsuccess = function() 
  {
    // Say
    console.log( 'Key: ' + aKey + ' Put into db ');
  };

  // Report on the success of this completing, when everything is done
  transaction.oncomplete = function() 
  {
    console.log( 'Insert transaction completed ' );
 };

  transaction.onerror = function() {
    console.log( 'Idb Not opened due to error' );
  };
}

// makeRecordInto
