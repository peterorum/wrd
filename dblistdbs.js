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

                    var adminDb = db.admin();

                    adminDb.listDatabases(function(err, databases)
                    {
                        if (err)
                        {
                            console.log(err);
                        }

                        console.log(databases);

                        client.close();
                    });

                }
            }
        });

    }());
