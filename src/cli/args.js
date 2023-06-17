import { parseArgs as nodeParseArgs } from "node:util";

/*
args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, `prop2Name is value2`
*/
const parseArgs = () => {
    const { values } = nodeParseArgs({
        options: {
            propName: {
                type: "string"
            },
            prop2Name: {
                type: "string"
            }
        }
    })

    console.log(`propName is ${values.propName}, prop2Name is ${values.prop2Name}`);
};

parseArgs();