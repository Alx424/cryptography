const { generateKeyPair } = require('crypto');

const { privateKey, publicKey } = generateKeyPair('rsa', {
    modulusLength: 2048, // length of key in bits
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: ' pkcs8',
        format: 'pem',
    },
});
