(
    function()
    {
        "use strict";

        var mongoose = require('mongoose');

        var connection = process.env.MONGOLAB_URI || "mongodb://localhost/wrd";

        var db = mongoose.connect(connection);

        var wrdSchema = require('./mgschema.js').wrdSchema;

        var Users = mongoose.model('users', wrdSchema);

        setTimeout(function()
        {
            mongoose.disconnect();
        }, 3000);

        mongoose.connection.once('open', function()
        {
            var query = Users.count().where(
            {
                email: "peter@street.pics"
            });

            query.exec(function(err, count)
            {
                console.log("count", count);
            });
        });

    }());

