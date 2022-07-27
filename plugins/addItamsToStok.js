// import Web3 from "web3";
// import dataCcontract from "../build/contracts/Amazon.json";

// // import Products from "../json/Products.json";
// // import Products from "../json/Products_copy.json";
// import Products from "../json/Products_copy_2.json";

// const AbiCcontract = dataCcontract.abi;

// const contractAddress = {
//   97: "0x5822bE3556a5acDB859e0dC25Dff59f2eB38b492", //tbnb
//   3: "0x54F44D0E621935b9EEC056a3dfB463977827e861", // ropsten
//   42: "0xBC5299De1A31b2aC1B486747DC90eA8Fa561Eb6E", // kovan
//   4: "0x3316C6a5AD63B323d554f5B97fc604eF7b3ddfD0", // rinkeby
// };

// export default {
//   getNames(array, itemName) {
//     let _names = [];
//     let _prices = [];
//     array.map((e) => {
//       _names.push(`${itemName}>${e.position}`);

//       const item_USD_Price = e.current_price;
//       const itemBNBPrice = item_USD_Price * 0.00005;
//       const itemBNBPriceToWei = itemBNBPrice * 10 ** 18;
//       _prices.push(itemBNBPriceToWei.toFixed(0));
//     });

//     // console.log({names:_names, prices:_prices });
//     return { names: _names, prices: _prices };
//   },

//   handelParams(_itemName) {
//     const itemsName = _itemName.split(">")[0];
//     const index = _itemName.split(">")[1];
//     let _items;
//     if (itemsName.split("+")[1]) {
//       _items = Products[itemsName.split("+")[0]][itemsName.split("+")[1]];
//     } else {
//       _items = Products[itemsName];
//     }
//     return _items[index - 1];
//   },

//   async setItemsToStoke() {
//     try {
//       let _names = [];
//       let _prices = [];

//       const GamingProdact = Object.keys(Products.Gaming);
//       GamingProdact.map((e) => {
//         _names = [
//           ..._names,
//           ...this.getNames(Products.Gaming[e], `Gaming+${e}`).names,
//         ];
//         _prices = [
//           ..._prices,
//           ...this.getNames(Products.Gaming[e], `Gaming+${e}`).prices,
//         ];
//       });
//       const GamingProdact2 = Object.keys(Products.Clothes);
//       GamingProdact2.map((e) => {
//         _names = [
//           ..._names,
//           ...this.getNames(Products.Clothes[e], `Clothes+${e}`).names,
//         ];
//         _prices = [
//           ..._prices,
//           ...this.getNames(Products.Clothes[e], `Clothes+${e}`).prices,
//         ];
//       });
//       // ////////////////////////////////////
//       // Make sure the price is correct
//       //     _prices.map((e) => {
//       //  let  _e = e * 10 ** -18;
//       //   _e =  _e / 0.00005;
//       //   _e = _e.toFixed(2);
//       //   console.log(_e)
//       // });
//       // ///////////////////////////
//       // console.log(_names);
//       // console.log(_prices);

//       const ethereum = await window.ethereum;
//       const web3 = new Web3(Web3.givenProvider || ethereum);
//       const AmazonContract = new web3.eth.Contract(
//         AbiCcontract,
//         contractAddress[42]
//       );
//       //   42:  kovan
//       //   4:  rinkeby
//       //   3: ropsten
//       // 97: tbnb

//       await AmazonContract.methods
//         .addItemsToStoke(_names, _prices)
//         .send({
//           from: "0x780c37F286DF1b1309c94828b53f50987635Ad31",
//         })
//         .then(async () => {
//           // Make sure the price is correct
//           _names.map(async (e, i) => {
//             await AmazonContract.methods
//               .itemsInStoke(e)
//               .call()
//               .then(async (res) => {
//                 let _res = res * 10 ** -18;
//                 _res = _res / 0.00005;
//                 const prodact = this.handelParams(e);
//                 console.log(prodact.current_price == _res.toFixed(2));
//               });
//           });
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   },
// };
