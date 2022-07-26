const Authorized = artifacts.require("./Authorized.sol");

contract("Authorized", (accounts) => {
  let contractInstance;
  before(async () => {
    await Authorized.deployed().then((instance) => {
      contractInstance = instance;
    });
  });

  it("deploys successfully", async () => {
    const address = await contractInstance.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });

  it("initializes the contract with the correct values", async () => {
    const admin = await contractInstance.admin();
    const staff1 = await contractInstance.staff(accounts[0]);
    const staff2 = await contractInstance.staff(accounts[1]);
  const price = await contractInstance.price();
  assert.equal(price, 50000000000000);
    assert.equal(admin, accounts[0]);
    assert(staff1);
    assert(!staff2);
  });
  it("change Admin from account other than the Admin ", async () => {
    await contractInstance
    .changeAdmin(accounts[2], { from: accounts[1] })
    .then(assert.fail)
    .catch(function (error) {
      assert(
        error.message.indexOf(
          "revert" >= 0,
          "must be Admin to change Admin"
        )
      );
    });
  });
  it("change Admin as Admin", async () => {
    const oldAdmin = await contractInstance.admin();
    await contractInstance.changeAdmin(accounts[1], { from: accounts[0] });
    const newAdmin = await contractInstance.admin();
    const AdminInStaff = await contractInstance.staff(accounts[1]);
    assert.equal(oldAdmin, accounts[0]);
    assert.equal(newAdmin, accounts[1]);
    assert(AdminInStaff);

  });
  it("add staff from account other than the Admin ", async () => {
    await contractInstance
    .addStaff([accounts[3]], { from: accounts[0] })
    .then(assert.fail)
    .catch(function (error) {
      assert(
        error.message.indexOf(
          "revert" >= 0,
          "must be Admin to add staff"
        )
      );
    });
  });
  it("add staff as Admin", async () => {
    const staffbeforAdded = await contractInstance.staff(accounts[3]);
    assert(!staffbeforAdded);
    await contractInstance.addStaff([accounts[3]], { from: accounts[1] });
    const staffAfterAdded = await contractInstance.staff(accounts[3]);
    assert(staffAfterAdded);
  });
  it("remove staff from account other than the Admin ", async () => {
    await contractInstance
    .removeStaff(accounts[3], { from: accounts[0] })
    .then(assert.fail)
    .catch(function (error) {
      assert(
        error.message.indexOf(
          "revert" >= 0,
          "must be Admin to remove staff"
        )
      );
    });
  });
  it("remove staff as Admin", async () => {
    const staffbeforRemoved = await contractInstance.staff(accounts[3]);
    assert(staffbeforRemoved);
    await contractInstance.removeStaff(accounts[3], { from: accounts[1] });
    const staffAfterRemoved = await contractInstance.staff(accounts[3]);
    assert(!staffAfterRemoved);
  })


});
