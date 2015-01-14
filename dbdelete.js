(
    function()
    {
        "use strict";

        var MongoClient = require('mongodb').MongoClient;

        var connection = process.env.MONGOLAB_URI || "mongodb://localhost/";

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

                    db.dropDatabase('users', function(err, results)
                    {
                        console.log(err || '');

                        if (!err)
                        {
                            console.log('db deleted');
                        }

                        client.close();
                    });
                }
            }
        });

    }());
