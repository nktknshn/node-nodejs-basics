/* 
env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
*/
const parseEnv = () => {
    const result = Object.keys(process.env)
        .filter(k => k.startsWith('RSS_'))
        .map(k => `${k}=${process.env[k]}`)
        .join('; ')

    console.log(result);
};

parseEnv();