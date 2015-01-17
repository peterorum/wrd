(
    function()
    {
        "use strict";

        var mongoose = require('mongoose');

        var connection = process.env.MONGOLAB_URI || "mongodb://localhost/wrd";

        var db = mongoose.connect(connection);

        var wrdSchema = require('./mgschema.js').wrdSchema;

        var User = mongoose.model('users', wrdSchema);

        mongoose.connection.once('open', function()
        {
            var user1 = new User({
                email: "peter@street.pics"
            });

            console.log("new?", user1.isNew);

            user1.save(function(err, doc){
                console.log('saved', doc);
            });

            var user2 = new User({
                email: "peter.orum@gmail.com"
            });

            var user3 = new User({
                email: "peter@seraline.com"
            });

            User.create([user2, user3], function(err)
            {
                for (var i = 1; i < arguments.length; i++)
                {
                    console.log("\nCreated document: " + arguments[i]);
                }

                mongoose.disconnect();
            });
        });

    }());

