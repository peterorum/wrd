(
    function()
    {
        "use strict";

        var mongoose = require('mongoose');

        var connection = process.env.MONGOLAB_URI || "mongodb://localhost/wrd";

        mongoose.connect(connection);

        mongoose.connection.on('open', function()
        {
            console.log(mongoose.connection.collection);

            mongoose.connection.db.collectionNames(function(err, names)
            {
                console.log(names);
                mongoose.disconnect();
            });
        });

    }());
