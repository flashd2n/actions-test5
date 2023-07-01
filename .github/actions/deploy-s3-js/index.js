const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const run = async () => {
    const bucket = core.getInput("bucket", { required: false });
    const bucketRegion = core.getInput("bucket-region", { required: false });
    const distFolder = core.getInput("dist-folder", { required: false });
    const collection = core.getInput("collection", { required: true });

    console.log(collection);
    console.log(typeof collection);
    console.log(JSON.parse(collection));

    // await exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion} --delete`);

    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput("website-url", websiteUrl);

    core.notice("hello from the custom JS action");
};

run();