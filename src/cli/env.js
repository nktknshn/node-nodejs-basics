/* 
env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*/
const parseEnv = () => {
    const resultArray = []

    for(const [k, v] of Object.entries(process.env)) {
        if(k.startsWith('RSS_')) {
            resultArray.push(`${k}=${v}`)
        }
    }

    console.log(resultArray.join('; '));
};

parseEnv();