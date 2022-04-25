export const getSymbol = (chainId) => {
    var symbol = "";
    switch (chainId) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 42: 
            symbol = "ETH";
            break;
        case 250:
        case 4002:
            symbol = "FTM";
            break;  
        case 43113:
        case 43114: 
            symbol = "AVAX";
            break;
        case 56:
        case 97: 
            symbol = "BNB";
            break;
        case 137:
        case 80001:
            symbol = "MATIC";
            break;
        default : break;
    }
    return symbol;
} 