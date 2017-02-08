"use strict";

var AWS = require('aws-sdk');

// we need to make sure Polly is supported in region
var polly = new AWS.Polly(
    {   
        apiVersion: '2016-06-10',
        region:'us-east-1'
    }
);

console.log("GB Voices");
console.log("=======================");

var params = {
  LanguageCode: "en-GB"
 };

 polly.describeVoices(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    Voices: [
       {
      Gender: "Female", 
      Id: "Emma", 
      LanguageCode: "en-GB", 
      LanguageName: "British English", 
      Name: "Emma"
     }, 
       {
      Gender: "Male", 
      Id: "Brian", 
      LanguageCode: "en-GB", 
      LanguageName: "British English", 
      Name: "Brian"
     }, 
       {
      Gender: "Female", 
      Id: "Amy", 
      LanguageCode: "en-GB", 
      LanguageName: "British English", 
      Name: "Amy"
     }
    ]
   }
   */
 });