const fs = require('fs');
const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const { TRANSLATION_KEYS } = require('./translation-keys');
const translationDirectory = path.join(__dirname, '../src/shared/translation');
const fileName = 'translation.json';

(function () {
  main().then(
    () => {
      console.log(`${fileName} file was generated successfully!`);
    },
    (err) => {
      console.log('Error:', err);
      if (err.response && err.response.status === 404) process.exit(1);
    }
  );
})();

async function main() {
  console.log(
    `Start generating ${fileName} file for ${process.env.REACT_APP_CPC_COUNTRY}`
  );
  const data = {};
  await asyncForEach(TRANSLATION_KEYS, async (key, i) => {
    data[key] = (await getTranslationByKey(key)).data;
    if (i === TRANSLATION_KEYS.length - 1) {
      const path = createPath();
      writeFile(path, data);
    }
  });
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

function getTranslationByKey(key) {
  const endpoint = `${process.env.TRANSLATION_ENDPOINT}?country=${process.env.REACT_APP_CPC_COUNTRY}&key=${key}`;
  console.log(endpoint);
  return axios.get(endpoint);
}

function createPath() {
  if (!fs.existsSync(translationDirectory)) {
    fs.mkdirSync(translationDirectory);
  }
  return path.join(translationDirectory, fileName);
}

function writeFile(path, data) {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
}
