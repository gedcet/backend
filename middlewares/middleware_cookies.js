import gen_random_string from "../modules/gen_random_string.js";

const middleware_cookies = function (req, res, next)
{
    if (req.cookies.sessionID === undefined)
    {
        const result1 = gen_random_string(256);
        res.setHeader("Set-Cookie", `sessionID=${result1};Max-Age=300;SameSite=Strict;HttpOnly`);
    }

    next();
}

export default middleware_cookies;