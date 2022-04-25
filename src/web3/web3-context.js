import React, { useState , useContext, useMemo, useCallback } from "react";
import Web3Modal from "web3modal";
import {  Web3Provider } from "@ethersproject/providers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { MAINNET_URI } from "../constant";
import Web3 from "web3";
import { getSymbol } from "./helpers/get-symbol";
import { switchNetwork } from "./helpers/swtich-networks";

const Web3Context = React.createContext();

export const useWeb3Context = () => {
    const web3Context = useContext(Web3Context);
    if (!web3Context) {
        throw new Error("useWeb3Context() can only be used inside of <Web3ContextProvider />, " + "please declare it at a higher level.");
    }
    const { onChainProvider } = web3Context;
    return useMemo(() => {
        return { ...onChainProvider };
    }, [web3Context]);
};

export const useAddress = () => {
    const { address } = useWeb3Context();
    return address;
};

export const Web3ContextProvider = ({ children }) => {

    const [connected, setConnected] = useState(false);
    const [chainID, setChainID] = useState(1);
    const [providerChainID, setProviderChainID] = useState();
    const [address, setAddress] = useState("");
    const [symbol, setSymbol] = useState("");
    const [balance, setBalance] = useState("0");

    const [provider, setProvider] = useState(MAINNET_URI.ETH);

    const web3Modal = 
        new Web3Modal({
            cacheProvider: true,
            providerOptions: {
                injected : {
                },
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
                    },
                },
            },
        });

    const hasCachedProvider = () => {
        if (!web3Modal) return false;
        if (!web3Modal.cachedProvider) return false;
        return true;
    };

    const _initListeners = useCallback(
        (rawProvider) => {
            if (!rawProvider.on) {
                return;
            }

            rawProvider.on("accountsChanged", () => setTimeout(() => window.location.reload(), 1));

            rawProvider.on("chainChanged", async (chain) => {
                changeNetwork(chain);
            });

            rawProvider.on("network", (_newNetwork, oldNetwork) => {
                if (!oldNetwork) return;
                window.location.reload();
            });
        },
        [provider],
    );

    const changeNetwork = async (otherChainID) => {
        const network = Number(otherChainID);
        setProviderChainID(network);
    };

    const connect = useCallback(async () => {
        
        try {
            const rawProvider = await web3Modal.connect();
            _initListeners(rawProvider);
            const connectedProvider = new Web3Provider(rawProvider, "any");
            const chainId = await connectedProvider.getNetwork().then(network => Number(network.chainId));
            const connectedAddress = await connectedProvider.getSigner().getAddress();
            
            if( chainId != null  ) {
                const web3 = new Web3(Web3.givenProvider);
                console.log(Web3.givenProvider)
                const userBalance = await web3.eth.getBalance(connectedAddress) / Math.pow(10,18);
                setBalance(userBalance);
            } 
            
            setAddress(connectedAddress);
            setProviderChainID(chainId);
            setSymbol(getSymbol(chainId));     
            setChainID(chainId);          
            setProvider(connectedProvider);    
            setConnected(true);
            return connectedProvider;

        } catch(error) {
            console.log(error);
        }
  
    }, [provider, web3Modal, connected]);

    const checkWrongNetwork =  () => {

        if (providerChainID == 1 || providerChainID == 137) {   
            return false;
        }
        return true;
    };

    const disconnect = useCallback(async () => {
        web3Modal.clearCachedProvider();
        setConnected(false);
        setTimeout(() => {
            window.location.reload();
        }, 1);
    }, [provider, web3Modal, connected]);

    const onChainProvider = useMemo(
        () => ({
            connect,
            disconnect,
            switchNetwork,
            hasCachedProvider,
            provider,
            connected,
            address,
            symbol,
            balance,
            chainID,
            web3Modal,
            providerChainID,
            checkWrongNetwork,
        }),
        [connect, disconnect, hasCachedProvider, provider, connected, address, symbol, balance, chainID, web3Modal, providerChainID],
    );
    //@ts-ignore
    return <Web3Context.Provider value={{onChainProvider}}>{children}</Web3Context.Provider>;
};

export default Web3ContextProvider;