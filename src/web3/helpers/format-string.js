export const formatAddress = (address) => {
    var addr = address.slice(0, 6) + "..." + address.slice(-4);
    return addr;
}

export const trim = (str, length) => {
    var trimmedStr = str.slice(0, length);
    return trimmedStr;
}