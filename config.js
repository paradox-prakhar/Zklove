// zkLove Configuration
// Fill in your actual API keys and endpoints here

export const config = {
  // =============================================================================
  // MACHINE LEARNING APIs - Add your real API keys here
  // =============================================================================
  ml: {
    faceDetection: {
      // Example: AWS Rekognition, Azure Face API, Google Vision, or custom API
      endpoint: 'https://api.faceapi.com/detect',
      apiKey: 'your_face_api_key_here', // Replace with your actual API key
      model: 'vision-transformer-v1',
      timeout: 30000,
      retryAttempts: 3
    },
    
    documentOcr: {
      // Example: AWS Textract, Azure Form Recognizer, Google Document AI
      endpoint: 'https://api.textract.com/analyze',
      apiKey: 'your_document_api_key_here', // Replace with your actual API key
      model: 'document-ocr-v2',
      timeout: 30000,
      retryAttempts: 3
    },
    
    thresholds: {
      minFaceConfidence: 0.75,
      minLivenessScore: 0.8,
      minDocumentConfidence: 0.8,
      minOverallScore: 0.8,
      faceMatchThreshold: 0.85
    }
  },

  // =============================================================================
  // BLOCKCHAIN CONFIGURATION - Configure your blockchain network
  // =============================================================================
  blockchain: {
    network: 'polygon', // ethereum, polygon, arbitrum
    testnet: true, // Set to false for mainnet
    
    rpcUrls: {
      ethereum: {
        mainnet: 'https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY',
        sepolia: 'https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'
      },
      polygon: {
        mainnet: 'https://polygon-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY',
        mumbai: 'https://polygon-mumbai.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'
      },
      arbitrum: {
        mainnet: 'https://arb-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_KEY',
        sepolia: 'https://arb-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY'
      }
    },
    
    contracts: {
      identityVerification: '0x1234567890123456789012345678901234567890', // Your deployed contract
      merkleTree: '0x2345678901234567890123456789012345678901'
    },
    
    gas: {
      maxGasPrice: '20000000000', // 20 gwei
      gasLimit: '500000'
    }
  },

  // =============================================================================
  // IPFS STORAGE - Configure decentralized storage
  // =============================================================================
  ipfs: {
    // Pinata (Recommended for production)
    pinata: {
      apiUrl: 'https://api.pinata.cloud',
      apiKey: 'your_pinata_api_key_here', // Get from pinata.cloud
      secretKey: 'your_pinata_secret_key_here',
      gatewayUrl: 'https://gateway.pinata.cloud/ipfs/'
    },
    
    // Infura IPFS (Alternative)
    infura: {
      projectId: 'your_infura_project_id',
      secret: 'your_infura_secret',
      apiUrl: 'https://ipfs.infura.io:5001',
      gatewayUrl: 'https://ipfs.infura.io/ipfs/'
    },
    
    publicGateway: 'https://ipfs.io/ipfs/'
  },

  // =============================================================================
  // EXTERNAL SERVICES - Configure your cloud ML providers
  // =============================================================================
  externalServices: {
    // AWS Services
    aws: {
      region: 'us-east-1',
      accessKeyId: 'your_aws_access_key',
      secretAccessKey: 'your_aws_secret_key',
      rekognition: {
        endpoint: 'https://rekognition.us-east-1.amazonaws.com'
      },
      textract: {
        endpoint: 'https://textract.us-east-1.amazonaws.com'
      }
    },
    
    // Azure Cognitive Services
    azure: {
      subscriptionKey: 'your_azure_subscription_key',
      endpoint: 'https://your-region.cognitiveservices.azure.com/',
      faceApi: {
        endpoint: 'https://your-region.cognitiveservices.azure.com/face/v1.0'
      },
      formRecognizer: {
        endpoint: 'https://your-region.cognitiveservices.azure.com/formrecognizer/v2.1'
      }
    },
    
    // Google Cloud Services
    googleCloud: {
      projectId: 'your_google_project_id',
      apiKey: 'your_google_api_key',
      vision: {
        endpoint: 'https://vision.googleapis.com/v1'
      },
      documentAi: {
        endpoint: 'https://documentai.googleapis.com/v1'
      }
    }
  },

  // =============================================================================
  // FEATURE FLAGS - Enable/disable features
  // =============================================================================
  features: {
    enableBlockchainSubmission: true,
    enableIpfsStorage: true,
    enableBiometricMatching: true,
    enableLivenessDetection: true,
    enableDocumentVerification: true,
    enableZkProofs: true,
    enableWalletIntegration: true
  },

  // =============================================================================
  // DEVELOPMENT SETTINGS
  // =============================================================================
  development: {
    debug: {
      enabled: true, // Set to false in production
      logLevel: 'debug',
      enableMockData: true // Falls back to mock data when APIs fail
    }
  },

  // =============================================================================
  // OTHER SETTINGS
  // =============================================================================
  zkProofs: {
    circuits: {
      wasmUrl: 'https://your-cdn.com/identity_verification.wasm',
      zkeyUrl: 'https://your-cdn.com/identity_verification_final.zkey',
      verificationKeyUrl: 'https://your-cdn.com/verification_key.json'
    },
    generation: {
      timeout: 60000,
      maxConstraints: 1000000
    }
  },

  security: {
    encryption: {
      algorithm: 'AES-256-GCM',
      hashAlgorithm: 'SHA256',
      saltRounds: 12
    },
    wallet: {
      encryptionEnabled: true,
      backupEnabled: true,
      mnemonicWords: 12
    }
  },

  cache: {
    ml: {
      enabled: true,
      ttl: 3600
    },
    blockchain: {
      enabled: true,
      ttl: 300
    }
  },

  rateLimits: {
    faceApi: 100,
    documentApi: 50,
    blockchainApi: 200
  }
};

export default config;
