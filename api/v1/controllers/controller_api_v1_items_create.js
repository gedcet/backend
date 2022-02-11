import model_item from "../../../models/model_item.js";
import model_user from "../../../models/model_user.js";

const controller_api_v1_items_create = async function (req, res)
{
    try
    {
        //check if client is logged in

        if (req.cookies.sessionID === undefined)
        {
            throw "you must login first";
        }

        const result1 = await model_user.findOne({ "cookie": req.cookies.sessionID });

        if (result1 === null)
        {
            throw "sessionID unknown";
        }

        if (result1.cookie_exp_timestam > Date.now())
        {
            throw "sessionID expired";
        }

        //create new item

        const result2 = await model_item.create({ "name": req.body.name, "type": req.body.type, "price": req.body.price, "count": req.body.count, "created_by": result1.name });
        const result3 = JSON.stringify(result2);

        res.write(result3);
        res.end();
    }
    catch (err)
    {
        res.write(`${err}`);
        res.end();
    }
}

export default controller_api_v1_items_create;