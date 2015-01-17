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

                db.close();
            }
        });

    }());
