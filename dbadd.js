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

        var MongoClient = require('mongodb').MongoClient,
            Server = require('mongodb').Server;

        var client = new MongoClient(new Server('localhost', 27017));

        client.open(function(err, client)
        {
            if (err)
            {
                console.log('db connection failed', err);
            }
            else
            {
                var db = client.db("wrd");

                if (db)
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
                        client.close();
                    }, 3000);


                }
            }
        });

    }());
