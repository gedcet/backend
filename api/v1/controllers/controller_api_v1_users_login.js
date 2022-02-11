import model_user from "../../../models/model_user.js";
import gen_random_string from "../../../modules/gen_random_string.js";

const controller_api_v1_login = async function (req, res)
{
    try
    {
        const result1 = await model_user.findOne({ "name": req.body.name });

        //name not found check

        if (result1 === null)
        {
            throw "name not found";
        }

        //password check

        if (result1.password !== req.body.password)
        {
            throw "wrong password";
        }

        //gen new cookie

        const cookie = gen_random_string(256);
        const cookie_exp_timestamp = Date.now() + (1000 * 300);

        //update cookie in db

        const result2 = await model_user.updateOne({ "name": req.body.name }, { "cookie": cookie, "cookie_exp_timestamp": cookie_exp_timestamp });

        //set-cookie for client

        res.setHeader("Set-Cookie", `sessionID=${cookie};Max-Age=300;SameSite=Strict;HttpOnly`);

        res.statusCode = 200;
        res.write(req.body.name);
        res.end();
    }
    catch (err)
    {
        res.statusCode = 403;
        res.write(err);
        res.end();
    }
}

export default controller_api_v1_login;