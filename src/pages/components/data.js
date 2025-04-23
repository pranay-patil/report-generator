const { BorderColor } = require("@mui/icons-material");

export const userData={
    labels:[
        "Monday",
        "Tuesday",
        "Wednsday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"

    ],
    datasets:[
    {
        label:'Sale in 1st Week',
        data:[2000,4500,6000,2300,7555,4000,4555,9000],
        borderColor:"red",
    },
    {
        label:'Sale in 2nd Week',
        data:[4000,3000,4600,2300,2000,4500,7000,8000],
        borderColor:"green",
    },

    ],
};