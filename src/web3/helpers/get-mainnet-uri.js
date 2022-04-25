export const getURI = (chainId) => {
    var uri = "";
    switch (chainId) {
        case 1 : 
            uri = "https://mainnet.infura.io/v3/";
            break;
        case 3 : 
            uri = "https://ropsten.infura.io/v3/";
            break;
        case 4 : 
            uri = "https://rinkeby.infura.io/v3/";
            break;
        case 5 : 
            uri = "https://goerli.infura.io/v3/";
            break;
        case 42 : 
            uri = "https://kovan.infura.io/v3/";
            break;
        case 250 : 
            uri = "https://rpc.ftm.tools";
            break;
        case 4002 : 
            uri = "https://rpc.testnet.fantom.network";
            break;
        case 43113 : 
            uri = "https://api.avax-test.network/ext/bc/C/rpc";
            break;
        case 43114 : 
            uri = "https://api.avax.network/ext/bc/C/rpc";
            break;
        case 56 : 
            uri = "https://bsc-dataseed1.binance.org";
            break;
        case 97 : 
            uri = "https://data-seed-prebsc-1-s1.binance.org:8545";
            break;
        case 137:
            uri = "https://polygon-rpc.com/";
            break;
        case 80001: 
            uri = "https://matic-mumbai.chainstacklabs.com";
            break;
        default : break;
    }
    return uri;
} 