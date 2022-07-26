const Authorized = artifacts.require("./Authorized.sol");
const Amazon = artifacts.require("./Amazon.sol");

contract("Amazon", (accounts) => {
  let contractInstance;
  const item1_USD_Price = 12.98;
  const item1BNBPrice = item1_USD_Price * 0.0005;
  const item1BNBPriceToWei = item1BNBPrice * 10 ** 18;

  before(async () => {
    await Authorized.deployed().then(async () => {
      await Amazon.deployed().then((instance) => {
        contractInstance = instance;
      });
    });
  });

  it("deploys successfully", async () => {
    const address = await contractInstance.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("add Items To Stoke from account other than the Staff ", async () => {
    await contractInstance
      .addItemsToStoke(["item1"], [item1BNBPriceToWei], { from: accounts[1] })
      .then(assert.fail)
      .catch(function (error) {
        assert(
          error.message.indexOf(
            "revert" >= 0,
            "must be Staff to add Items To Stoke"
          )
        );
      });
  });

  it("add Items To Stoke as Staff", async () => {
    let priceOfItem1 = await contractInstance.itemsInStoke("item1");
    assert.equal(priceOfItem1, 0);
    // add new staff
    await contractInstance.addStaff([accounts[1]], { from: accounts[0] });
    await contractInstance.addItemsToStoke(["item1"], [item1BNBPriceToWei], {
      from: accounts[1],
    });
    priceOfItem1 = await contractInstance.itemsInStoke("item1");
    assert.equal(priceOfItem1, item1BNBPriceToWei);
  });

  it("remove Items from Stoke from account other than the Staff ", async () => {
    await contractInstance
      .removeItemFromStoke("item1", { from: accounts[2] })
      .then(assert.fail)
      .catch(function (error) {
        assert(
          error.message.indexOf(
            "revert" >= 0,
            "must be Staff to remove Items from Stoke"
          )
        );
      });
  });

  it("remove Item From Stoke as Staff", async () => {
    let priceOfItem1 = await contractInstance.itemsInStoke("item1");
    assert.equal(priceOfItem1, item1BNBPriceToWei);

    await contractInstance.removeItemFromStoke("item1", {
      from: accounts[0],
    });
    priceOfItem1 = await contractInstance.itemsInStoke("item1");
    assert.equal(priceOfItem1, 0);
  });

  it("add Item To Cart with item not available in the stoke ", async () => {
    await contractInstance.addItemsToCart("item2", 2, true, {
      from: accounts[3],
    });
    const userCart = await contractInstance.getCartItemsOfOwner(accounts[3]);
    assert.equal(userCart[0].itemName, "item2");
    assert.equal(userCart[0].Quantity, 2);
    assert.equal(userCart[0].inStoke, false);
    assert.equal(userCart[0].isGeft, true);
  });
  it("add Item To Cart with item available in the stoke ", async () => {
    await contractInstance.addItemsToStoke(["item1"], [item1BNBPriceToWei], {
      from: accounts[1],
    });
    await contractInstance.addItemsToCart("item1", 2, false, {
      from: accounts[3],
    });
    const userCart = await contractInstance.getCartItemsOfOwner(accounts[3]);
    assert.equal(userCart[1].itemName, "item1");
    assert.equal(userCart[1].Quantity, 2);
    assert.equal(userCart[1].inStoke, true);
    assert.equal(userCart[1].isGeft, false);
    const hasItemsInCart = await contractInstance.isUsersHasItemsInCart(
      accounts[3]
    );
    assert(hasItemsInCart);
  });

  it("change Quantity and set Gift Item", async () => {
    await contractInstance.changeQuantity("item2", 5, {
      from: accounts[3],
    });
    await contractInstance.setGift("item2", false, {
      from: accounts[3],
    });
    const userCart = await contractInstance.getCartItemsOfOwner(accounts[3]);
    assert.equal(userCart[0].Quantity, 5);
    assert.equal(userCart[0].isGeft, false);
  });

  it("remove Item To Cart", async () => {
    // remove oll items
    await contractInstance.removetemsFromCart("item2", {
      from: accounts[3],
    });
    await contractInstance.removetemsFromCart("item1", {
      from: accounts[3],
    });
    const userCart = await contractInstance.getCartItemsOfOwner(accounts[3]);
    assert.equal(userCart.length, 0);
    const hasItemsInCart = await contractInstance.isUsersHasItemsInCart(
      accounts[3]
    );
    assert(!hasItemsInCart);
  });

  it("buy Item", async () => {
    await contractInstance.buyItem(
      "item1",
      "Delivery Address",
      "same message",
      2,
      true,
      {
        from: accounts[4],
        value: item1BNBPriceToWei * 2,
      }
    );

    const UsersOrders = await contractInstance.getUsersOrders(accounts[4]);
   const HasOrders = await contractInstance.isUsersHasOrders(accounts[4])
    assert(HasOrders);
    assert.equal(UsersOrders.length, 1);

    assert.equal(UsersOrders[0].itemName, "item1");
    assert.equal(UsersOrders[0].Quantity, 2);
    assert.equal(UsersOrders[0].addressTo, "Delivery Address");
    assert.equal(UsersOrders[0].message, "same message");
    assert.equal(UsersOrders[0].isGeft, true);

  });
  it("request Sent", async () => {
    await contractInstance.requestSent(accounts[4], "item1", {
      from: accounts[1],
    });
    const UsersOrders = await contractInstance.getUsersOrders(accounts[4]);
   const HasOrders = await contractInstance.isUsersHasOrders(accounts[4])
    assert(!HasOrders);

    assert.equal(UsersOrders.length, 0);
  });

  it("get Profits from account other than the Staff ", async () => {
    await contractInstance
      .getProfits({
        from: accounts[1],
      })
      .then(assert.fail)
      .catch(function (error) {
        assert(
          error.message.indexOf(
            "revert" >= 0,
            "must be Staff to remove Items from Stoke"
          )
        );
      });
  });

  it("get Profits as admin", async () => {
    const old_Admin_balance = await web3.eth.getBalance(accounts[0]);
    const old_Contract_balance = await web3.eth.getBalance(
      contractInstance.address
    );


    await contractInstance.getProfits({
      from: accounts[0],
    });

    const new_Admin_balance = await web3.eth.getBalance(accounts[0]);
    const new_Contract_balance = await web3.eth.getBalance(
      contractInstance.address
    );
    assert(Number(old_Admin_balance) < Number(new_Admin_balance));
    assert(Number(new_Contract_balance) < Number(old_Contract_balance));
    assert.equal(Number(new_Contract_balance), 0);



  });
});
