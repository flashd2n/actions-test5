const fs = require('fs');

const run = async () => {

    const bucket = process.env.INPUT_BUCKET;
    const bucketRegion = process.env["INPUT_BUCKET-REGION"];
    const distFolder = process.env["INPUT_DIST-FOLDER"];

    console.log("does it work?")
    console.log(bucket);
    console.log(bucketRegion);
    console.log(distFolder);

    const websiteUrl = "ulalla";

    fs.readdirSync(process.env["DIR_LOC"]).forEach(file => {
        console.log(file);
    });

    const output = process.env['GITHUB_OUTPUT']
    fs.appendFileSync(output, `website-url=${websiteUrl}`);
};

run();