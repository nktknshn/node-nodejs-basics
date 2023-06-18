/*
args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, `prop2Name is value2`
*/
const parseArgs = () => {

    const args = process.argv.slice(2);

    if(args.length < 2) {
        return
    }

    const result = {}

    // properties without values and values without properties will be skipped
    // only pairs `--property-name value` are included 
    for(let i = 0; i < args.length - 1; i++) {
        const k = args[i]
        const v = args[i + 1]

        if(k.startsWith('--')) {
            if(v.startsWith('--')) {
                continue
            }
            result[k.slice(2)] = v
        }
    }

    const resultString = Object.entries(result)
                .map(([k, v]) => `${k} is ${v}`)
                .join(', ')

    console.log(resultString)
};

parseArgs();

