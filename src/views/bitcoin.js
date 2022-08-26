import  BtcXpubAddress from 'btc-xpub-address'
const xpub = 'xpub6C9XWiHJHq3ugBVeo16ixAErjdDWBQpk7TbqSWtXhuL2GBoJ9EnqxuShdW3zH44jn4fE5F5ne1xDrZawwVDQ4sWQSPzRHqTZ8F9e7MFoqK8';
const address = BtcXpubAddress.getAddress(xpub);
console.log(address);