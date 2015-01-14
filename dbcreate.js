(
    function()
    {
        "use strict";

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
                console.log('connected');

                db.createCollection('users', function(err, collection)
                {
                    if (!err)
                    {
                        console.log('collection created');
                    }
                    else
                    {
                        console.log('Error', err);
                    }

                    db.close();
                });
            }
        });

    }());
