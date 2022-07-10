var file=require("fs");
file.truncate('fontend.txt', 0, function() {
    console.log('File Content Deleted')
           });