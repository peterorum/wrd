(
    function()
    {
        "use strict";

        var MongoClient = require('mongodb').MongoClient;

        // list server, without databsae
        var connection = (process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI.replace("(.*)/.*$", "$1") : "mongodb://localhost/");

        MongoClient.connect(connection, function(err, client)
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
