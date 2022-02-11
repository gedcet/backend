import model_user from "../../../models/model_user.js";

const controller_api_v1_users_create = async function (req, res)
{
    console.log("---controller_api_v1_users_create---")
    try
    {
        const result1 = await model_user.create({ "name": req.body.name, "password": req.body.password, "role": req.body.role });
        const result2 = JSON.stringify(result1);

        res.write(result2);
        res.end();
    }
    catch (err)
    {
        res.write(`${err}`);
        res.end();
    }
}

export default controller_api_v1_users_create;