import Web3 from "web3";

export async function connection() {
  var connect = {
    web3Conn: "",
    address: "",
    isMeta: false,
    network: 0,
  };

  if (window.ethereum) {
    var web3 = new Web3(window.ethereum);
    try {
      if (typeof web3 !== "undefined") {
        await window.ethereum.enable();
        connect.web3Conn = web3;
        var network = await web3.eth.net.getId();
        connect.network = network;

        const isMeta = window.web3.currentProvider.isMetaMask;

        if (isMeta) {
          connect.isMeta = true;
          var result = await web3.eth.getAccounts();
          var currAddr = result[0];
          connect.address = currAddr;
        }
      }
    } catch (err) {}
  }

  return connect;
}
