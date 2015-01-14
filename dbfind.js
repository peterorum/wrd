(
    function()
    {
        "use strict";

        var log = function(msg){

            if (msg)
            {
                console.log(msg);
            }
        };
        var MongoClient = require('mongodb').MongoClient;

        var connection = process.env.MONGOLAB_URI || "mongodb://localhost/";

        MongoClient.connect(connection, function(err, db)
        {
            if (err)
            {
                console.log('db connection failed', err);
            }
            else
            {
                db.collection("users", function(err, users)
                {
                    log(err);

                    users.find(function(err, items)
                    {
                        items.toArray(function(err, itemArr)
                        {
                            log(err);

                            console.log("Document Array: ");
                            console.log(itemArr);
                        });
                    });

                    users.find(function(err, items)
                    {
                        items.each(function(err, item)
                        {
                            if (item)
                            {
                                console.log("Singular Document: ");
                                console.log(item);
                            }
                        });
                    });

                    users.findOne(
                    {
                        email: 'peter@peterorum.com'
                    }, function(err, item)
                    {
                        console.log("Found One: ");
                        console.log(item);
                    });
                });

                setTimeout(function()
                {
                    db.close();
                }, 3000);
            }
        });

    }());
