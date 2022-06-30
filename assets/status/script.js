//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/play.spookymc.xyz";
 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('<div style="color: red">Server Offline</div>');
   return false;
 } 
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  } 
  $('#rest').html('<div style="color: green">Server Online</div><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});