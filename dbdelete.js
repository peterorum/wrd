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
