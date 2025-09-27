import 'react-native-get-random-values';
import { Buffer } from 'buffer';
import process from 'process';

if (typeof global !== 'undefined') {
  // Crypto polyfills
  if (!global.crypto) {
    global.crypto = require('react-native-crypto-js');
  }
  
  // Buffer polyfill
  if (!global.Buffer) {
    global.Buffer = Buffer;
  }
  
  // Process polyfill
  if (!global.process) {
    global.process = process;
  }

  // Ensure TextEncoder is available
  if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = require('text-encoder').TextEncoder;
    global.TextDecoder = require('text-encoder').TextDecoder;
  }
}

// Required for ethers.js
global.btoa = global.btoa || require('base-64').encode;
global.atob = global.atob || require('base-64').decode;

console.log('Essential blockchain polyfills loaded successfully');
