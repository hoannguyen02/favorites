const HTMLParser = require('node-html-parser');
const fs = require('fs');
const path = require('path');


const main = async () => {
    console.log('Splitting index.html into head.html and body.html.');
    const projectFolder = path.join(__dirname, "../");
    const buildFolder = path.join(projectFolder, './build');
    const outputIndexHTMLFile = path.join(buildFolder, './index.html');
    const outputHeadHTMLFile = path.join(buildFolder, './head.html');
    const outputBodyHTMLFile = path.join(buildFolder, './body.html');

    const indexHtml = fs.readFileSync(outputIndexHTMLFile, { encoding: 'utf-8' });

    let root = HTMLParser.parse(indexHtml, {
        lowerCaseTagName: false,
        script: true,
        style: true,
        pre: true
    });

    const head = root.querySelector('head');
    const newHead = Array.from(head.childNodes)
        .filter(x => x.tagName === 'link' && (x.toString().indexOf('rel="stylesheet"') >= 0) && (x.toString().indexOf("index.css") < 0))
        .reduce((acc, crt) => `${acc}${crt}`, "");
    fs.writeFileSync(outputHeadHTMLFile, newHead);

    const body = root.querySelector("body");
    const newBody = Array.from(body.childNodes)
        .filter(x => x.tagName === "script")
        .reduce((acc, crt) => `${acc}${crt}`, "");
    fs.writeFileSync(outputBodyHTMLFile, newBody);
};

main().then(() => process.exit(0), exception => console.error(exception) || process.exit(1));
