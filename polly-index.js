"use strict";

var AWS = require('aws-sdk');
var fs = require('fs');

// switch to supported region
var polly = new AWS.Polly(
    {   
        apiVersion: '2016-06-10',
        region:'us-east-1'
    }
);

// what to say 
 var params = {
  OutputFormat: "mp3", 
  SampleRate: "8000", 
  Text: "So you still think Siri is cool. Seriously people!", 
  TextType: "text", 
  VoiceId: "Joanna"
 };

// output file
var targetFileName = "jshello.mp3";


 // generate speach
 polly.synthesizeSpeech(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else   {
        //
        // successful response write to file
        // 
        var wstream = fs.createWriteStream(targetFileName);

        wstream.on('finish', function () {
            console.log("Output completed to: ", targetFileName);
        });

        wstream.write(data.AudioStream);
        wstream.end();

   }    

   /* returned from aws example
   data = {
    AudioStream: <Binary String>, 
    ContentType: "audio/mpeg", 
    RequestCharacters: 85
   }
   */
 });