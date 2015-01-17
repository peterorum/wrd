(
    function()
    {
        "use strict";

        var mongoose = require('mongoose');

        var Schema = mongoose.Schema;

        var wrdSchema = new Schema(
        {
            email:
            {
                type: String,
                index: 1,
                required: true,
                unique: true
            }
        });

        exports.wrdSchema = wrdSchema;

    }());
