(
    function()
    {
        "use strict";

        function addObject(collection, object)
        {
            collection.insert(object, function(err, result)
            {
                if (!err)
                {
                    console.log("Inserted : ");
                    console.log(result);
                }
            });
        }

        var MongoClient = require('mongodb').MongoClient;

        var connection = process.env.MONGOLAB_URI || "mongodb://localhost/wrd";

        MongoClient.connect(connection, function(err, db)
        {
            if (err)
            {
                console.log('db connection failed', err);
            }
            else
            {
                db.dropCollection("users");

                db.createCollection('users', function(err, collection)
                {
                    addObject(collection,
                    {
                        "email": "peter@peterorum.com"
                    });
                });

                setTimeout(function()
                {
                    db.close();
                }, 3000);
            }
        });

    }());
