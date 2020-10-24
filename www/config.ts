let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://wallet.spawncoin.org/api/',
	mainnetExplorerUrl: "http://78.141.213.139/",
	mainnetExplorerUrlHash: "http://78.141.213.139/?hash={ID}#blockchain_transaction",
	mainnetExplorerUrlBlock: "http://78.141.213.139/?hash={ID}#blockchain_block",
	testnetExplorerUrl: "http://78.141.213.139/",
	testnetExplorerUrlHash: "http://78.141.213.139/?hash={ID}#blockchain_transaction",
	testnetExplorerUrlBlock: "http://78.141.213.139/?hash={ID}#blockchain_block",
	testnet: false,
    coinUnitPlaces: 8,
    coinDisplayUnitPlaces: 2,
	txMinConfirms: 20,
	txCoinbaseMinConfirms: 20,
	addressPrefix: 25751,
	integratedAddressPrefix: 0,
	addressPrefixTestnet: 0,
	integratedAddressPrefixTestnet: 0,
	subAddressPrefix: 0,
	subAddressPrefixTestnet: 0,
	coinFee: new JSBigInt('1000000'),
	feePerKB: new JSBigInt('1000000'), //for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('10000'),//used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 0, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'SPWN',
	openAliasPrefix: 'spwn',
	coinName: 'Spawncoin',
	coinUriPrefix: 'spawncoin:',
	avgBlockTime: 120,
	maxBlockNumber: 500000000,
};
