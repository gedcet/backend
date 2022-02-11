const gen_random_string = function (length)
{
    let temp = "";

    for (let i = 0; i < length; i++)
    {
        //ascii small alpha
        const ascii = 97 + Math.round(Math.random() * 25);
        temp += String.fromCharCode(ascii);
    }

    return temp;
}

export default gen_random_string;