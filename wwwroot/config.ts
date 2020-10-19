let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
    //apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) + 'api/' : 'http://45.76.86.139:8080/',
    //apiUrl: typeof window !== 'undefined' && window.location ? window.location.href.substr(0, window.location.href.lastIndexOf('/') + 1) : 'http://45.76.86.139:8080/',
    apiUrl: "http://127.0.0.1:11898/",
    mainnetExplorerUrl: "http://78.141.213.139/",
    testnetExplorerUrl: "http://78.141.213.139/",
    testnet: false,
    coinUnitPlaces: 8,
    txMinConfirms: 60,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 120, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    addressPrefix: 25751,
    integratedAddressPrefix: 0,
    addressPrefixTestnet: 0,
    integratedAddressPrefixTestnet: 0,
    subAddressPrefix: 0,
    subAddressPrefixTestnet: 0,
    feePerKB: new JSBigInt('100'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('1'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    defaultMixin: 0, // default value mixin
    idleTimeout: 30,
    idleWarningDuration: 20,

    coinSymbol: 'SPWN',
    openAliasPrefix: "spwn",
    coinName: 'SpawnCoin',
    coinUriPrefix: 'spawncoin:',
    avgBlockTime: 120,
    maxBlockNumber: 500000000,
};
