import 'jest/setUpEnzyme';
import crypto from 'crypto';

const getRandomString = (length = 20) => {
  return crypto.randomBytes(length).toString('hex');
}

const getRandomNumber = (min = 0, max = 9999999) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

export default {
  getRandomString,
  getRandomNumber,
};
