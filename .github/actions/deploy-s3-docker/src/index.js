const run = async () => {

    const bucket = process.env.INPUT_BUCKET;
    const bucketRegion = process.env["INPUT_BUCKET-REGION"];
    const distFolder = process.env["INPUT_DIST-FOLDER"];

    console.log("does it work?")
    console.log(bucket);
    console.log(bucketRegion);
    console.log(distFolder);

    const websiteUrl = "ulalla";

    console.log(`website-url=${websiteUrl} >> $GITHUB_OUTPUT`);

};

run();