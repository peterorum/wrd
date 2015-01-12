(
    function()
    {
        "use strict";

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
                    console.log('connected');

                    db.createCollection('users', function(err, collection)
                    {
                        if (!err)
                        {
                            console.log('collection & db created');
                        }

                        client.close();
                    });
                }
            }
        });

    }());
