let NETWORKS = [
  {
    NAME: "RinkeBy Network",
    VERSION: 4,
    COIN: "ETH",
    TOKENS: {
      PKS: {
        NAME: "PKS",
        CONTRACT: "0x21A27F1Eb2575527752a34DA35bCBFedD652164C",
      },
    },
    SINGLE_COLLECTIBLE_CONTRACT: "0xCE3E87d525Ba7c5E6008D29E3612dc88Dd9fd139",
    MULTIPLE_COLLECTIBLE_CONTRACT: "0xfF703Ff9E8CCA9840Cc60b9beb88D1b9f37fcbAc",
  },
  {
    NAME: "POLYGON Mumbai",
    VERSION: 80001,
    COIN: "MATIC",
    TOKENS: {
      PKS: {
        NAME: "PKS",
        CONTRACT: "0x0BbacEB66F327E728a8116dA514F82BBB610B5cc",
      },
    },
    SINGLE_COLLECTIBLE_CONTRACT: "0xfF703Ff9E8CCA9840Cc60b9beb88D1b9f37fcbAc",
    MULTIPLE_COLLECTIBLE_CONTRACT: "0xea8478cbDE68d3504419701E1DE307f3B255e342",
  },
];

let PROD_NETWORKS = [
  {
    NAME: "Ethereum Mainnet",
    VERSION: 1,
    COIN: "ETH",
    TOKENS: {
      PKS: {
        NAME: "PKS",
        CONTRACT: "0xccB76558015c7e2D354b5832bFbCF64657160eA0",
      },
    },
    SINGLE_COLLECTIBLE_CONTRACT: "0x4D4e37000fF802a69f69a51FE7158bb467c93861",
    MULTIPLE_COLLECTIBLE_CONTRACT: "0x3ABcF568cFeff89D35e91071A75F859876CF96ea",
  },
  {
    NAME: "POLYGON Mainnet",
    VERSION: 137,
    COIN: "MATIC",
    TOKENS: {
      PKS: {
        NAME: "PKS",
        CONTRACT: "0xccB76558015c7e2D354b5832bFbCF64657160eA0",
      },
    },
    SINGLE_COLLECTIBLE_CONTRACT: "0x4d4e37000ff802a69f69a51fe7158bb467c93861",
    MULTIPLE_COLLECTIBLE_CONTRACT: "0x3ABcF568cFeff89D35e91071A75F859876CF96ea",
  },
];

let key = {};
const env = "prod";
if (env === "prod") {
  console.log("Set Production Config");
  key = {
    baseUrl: "https://api.pikaso.market/",
    frontUrl: "https://pikaso.market/",
    IMG_URL: "https://api.pikaso.market/static/",
    ipfsurl: "https://ipfs.io/ipfs/",
    Digits: 1000000000000000000,
    toFixed: 5,
    network: PROD_NETWORKS,
  };
} else if (env === "test") {
  key = {
    app_name: "PIKASO",
    baseUrl: "http://128.199.129.139:9001/",
    frontUrl: "http://nft-market.ceewen.xyz/",
    IMG_URL: "http://128.199.129.139:9001/static/",
    ipfsurl: "https://ipfs.io/ipfs/",
    Digits: 1000000000000000000,
    toFixed: 5,
    network: NETWORKS,
  };
} else {
  console.log("Set Development Config");
  key = {
    baseUrl: "http://localhost:9001/",
    frontUrl: "http://localhost:3000/",
    IMG_URL: "http://localhost:9001/static/",
    ipfsurl: "https://ipfs.io/ipfs/",
    Digits: 1000000000000000000,
    toFixed: 5,
    network: NETWORKS,
  };
}

export default key;
