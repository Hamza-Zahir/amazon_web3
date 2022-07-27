import Web3 from "web3";
import dataCcontract from "../build/contracts/Amazon.json";
// import Products from "../json/Products.json";

const AbiCcontract = dataCcontract.abi;

const contractAddress = {
  97: "0x5822bE3556a5acDB859e0dC25Dff59f2eB38b492", //tbnb
  3: "0x54F44D0E621935b9EEC056a3dfB463977827e861", // ropsten
  42: "0xBC5299De1A31b2aC1B486747DC90eA8Fa561Eb6E", // kovan
  4: "0x3316C6a5AD63B323d554f5B97fc604eF7b3ddfD0", // rinkeby
};

export default {
  async getUserItemsCart(_chainId, _CurrentAccount) {
    try {
      let _itemsOfUser;
      let _numberOfAllitems = 0;
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );

      await AmazonContract.methods
        .getCartItemsOfOwner(_CurrentAccount).call().then(
          (resalt) => {
            if (resalt.length) {
              _itemsOfUser = resalt;
              resalt.map(e => {
                _numberOfAllitems = _numberOfAllitems + Number(e.Quantity);

              })

            }
          }
        )
      return { itemsOfUser: _itemsOfUser, numberOfAllitems: _numberOfAllitems }
    } catch (error) {
      console.log(error);
    }
  },


  async addItemsToCart(
    _chainId,
    _CurrentAccount,
    _itemName,
    _Quantity,
    _isGeft
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods
        .addItemsToCart(_itemName, _Quantity, _isGeft)
        .send({
          from: _CurrentAccount,
        });
    } catch (error) {
      console.log(error);
    }
  },
  async removetemsFromCart(
    _chainId,
    _CurrentAccount,
    _itemName,
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods
        .removetemsFromCart(_itemName)
        .send({
          from: _CurrentAccount,
        });
    } catch (error) {
      console.log(error);
    }
  },
  async setGift(
    _chainId,
    _CurrentAccount,
    _itemName,
    _isGeft
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods
        .setGift(_itemName, _isGeft)
        .send({
          from: _CurrentAccount,
        });
    } catch (error) {
      console.log(error);
    }
  },
  async changeQuantity(
    _chainId,
    _CurrentAccount,
    _itemName,
    _Quantity
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      await AmazonContract.methods
        .changeQuantity(_itemName, _Quantity)
        .send({
          from: _CurrentAccount,
        });
    } catch (error) {
      console.log(error);
    }
  },
  async buyItem(
    _chainId,
    _CurrentAccount,
    _itemName,
    _DeliveryAddress,
    _message,
    _Quantity,
    _isGeft,
    _current_price
  ) {
    try {
      const ethereum = await window.ethereum;
      const web3 = new Web3(Web3.givenProvider || ethereum);
      const AmazonContract = new web3.eth.Contract(
        AbiCcontract,
        contractAddress[_chainId]
      );
      const item_USD_Price = _current_price;
      const itemBNBPrice = item_USD_Price * 0.00005;
      const _itemBNBPriceToWei = (itemBNBPrice * 10 ** 18).toFixed(0);
      const _amount = _itemBNBPriceToWei * _Quantity;

      await AmazonContract.methods
        .buyItem(_itemName, _DeliveryAddress, _message, _Quantity, _isGeft)
        .send({
          from: _CurrentAccount,
          value: _amount,
        });
    } catch (error) {
      console.log(error);
    }
  },


};
