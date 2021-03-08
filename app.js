  
var  http  =  require ( "http" ) ;

var  express  =  require ( "express" ) ;
var  apiServer  =  express ( ) ;

var  port  =  3000 ;

apiServer . ascolta ( port ,  ( )  =>  {
    console . log ( "server in esecuzione sulla porta" ,  porta ) ;
} ) ;

apiServer . get ( "/ nome" ,  ( req ,  res )  => {
    console . log ( "ho ricevuto una get su nome" ) ;
    res . send ( "ciao, il nome del server è: NODEPOGLIANI" ) ;
} ) ;

apiServer . get ( "/" ,  function ( req ,  res ) {
    res . invia ( "sei in casa" ) ;
} )