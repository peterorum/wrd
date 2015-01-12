(
    function()
    {
        "use strict";

        var http = require('http');

        http.createServer(function(request, response)
        {
            // html

            response.setHeader("Content-Type", "text/html");
            response.writeHead(200);

            response.write('<html>\n');

            // head
            response.write('<head>\n');
            response.write('<title>Wrd of the Day</title>\n');
            response.write('<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet" type="text/css" />\n');
            response.write('</head>\n');

            // body
            response.write('<body ng-app="wrdApp">\n');

            response.write('<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.6/angular.min.js"></script>\n');

            response.write('<script src="app/app.js"></script>\n');

            response.write('</body>\n');

            // end
            response.end('</html>\n');
        }).listen(process.env.PORT || 8888);
    }());
