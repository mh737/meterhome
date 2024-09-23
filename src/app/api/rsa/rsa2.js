import crypto from "crypto";

export async function encrypt(data) {
  console.log((data))
  // console.log(process.env.PUBLICKEY)
  // console.log(process.env.PRIVATEKEY)
   const encrypted = crypto.publicEncrypt(
    {
      key: process.env.PUBLICKEY,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    // We convert the data string to a buffer using `Buffer.from`
    Buffer.from(data)
  );

  return await encrypted.toString('base64');
}
export function decrypt(data) {
  return crypto.privateDecrypt(
    {
      key: process.env.PRIVATEKEY,
      // In order to decrypt the data, we need to specify the
      // same hashing function and padding scheme that we used to
      // encrypt the data in the previous step
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: "sha256",
    },
    data
  );
}


// utils/rsa.js

import NodeRSA from 'node-rsa';

// Generate a new RSA key pair with the specified key size
export function generateKeyPair(keySize = 2048) {
  const key = new NodeRSA({ b: keySize });
  return {
    publicKey: key.exportKey('public'),
    privateKey: key.exportKey('private'),
  };
}

// Encrypt data using the provided public key
export function encryptData(data, publicKey) {
  const key = new NodeRSA(publicKey, 'public');
  key.setOptions({encryptionScheme: 'pkcs1'});
  key.setOptions({ environment: "browser" });
  return key.encrypt(data, 'base64');
}

// Decrypt data using the provided private key
export function decryptData(data, privateKey) {
  const key = new NodeRSA(privateKey, 'private');  //pkcs8 encoding?
  key.setOptions({encryptionScheme: 'pkcs1'});   // encoding too long?
  key.setOptions({ environment: "browser" }); //riginal error: TypeError: RSA_PKCS1_PADDING is no longer supported for private decryption, this can be reverted with --security-revert=CVE-2023-46809
  console.log(key.isPrivate())
  return key.decrypt(data, 'utf8');
  return "hi"
}
