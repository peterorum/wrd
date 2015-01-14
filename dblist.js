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
                    db.collection("users", function(err, users)
                    {
                        users.find(function(err, items)
                        {
                            items.toArray(function(err, itemArr)
                            {
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
                        client.close();
                    }, 3000);


                }
            }
        });

    }());
