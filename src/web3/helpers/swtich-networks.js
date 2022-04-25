
const switchRequest = (chainId) => {
    return window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId }],
    });
};

const addChainRequest = (chainId) => {

    if( chainId == "0x01" ) {
        return window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x01",
                    chainName: "Ethereum Mainnet",
                    rpcUrls: ["https://mainnet.infura.io/v3/"],
                    blockExplorerUrls: ["https://etherscan.io"],
                    nativeCurrency: {
                        name: "ETH",
                        symbol: "ETH",
                        decimals: 18,
                    },
                },
            ],
        });
    }
    else if( chainId == "0x89" ) {
        return window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x89",
                    chainName: "Polygon Mainnet",
                    rpcUrls: ["https://polygon-rpc.com/"],
                    blockExplorerUrls: ["https://polygonscan.com"],
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18,
                    },
                },
            ],
        });
    }
};

export const switchNetwork = async (chainId) => {
    if (window.ethereum) {
        try {
            await switchRequest(chainId);
        } catch (error) {
            if (error.code === 4902) {
                try {
                    await addChainRequest(chainId);
                    await switchRequest(chainId);
                } catch (addError) {
                    console.log(error);
                }
            }
            console.log(error);
        }
    }
};
