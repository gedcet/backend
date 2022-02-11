const middleware_request_cout = function (req, res, next)
{
    //console log request

    console.log("---request---");
    console.log(req.socket.remoteAddress);
    console.log(req.method, req.url);
    console.log("---query:");
    console.log(req.query);
    console.log("headers:");
    console.log(req.headers);
    console.log("---cookies:");
    console.log(req.cookies);
    console.log("body:");
    console.log(req.body);
    console.log("---request end---");

    next();
};

export default middleware_request_cout;