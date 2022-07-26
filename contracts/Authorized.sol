// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Authorized {
    address public admin;
    uint256 public price;

    mapping(address => bool) public staff;

    constructor() {
        admin = msg.sender;
        staff[msg.sender] = true;
        price = 50000000000000;  // 50000000000000 BNB or ETH to Wei = 1 USD , This is only an assumption
    }

    modifier onlyAdmin() {
        require(
            msg.sender == admin,
            "This function is restricted to the contract's admin"
        );
        _;
    }

    modifier onlyStaff() {
        require(
            staff[msg.sender],
            "This function is restricted to the contract's Staff"
        );
        _;
    }

    function changeAdmin(address _newAdmin) public onlyAdmin {
        admin = _newAdmin;
        staff[_newAdmin] = true;
    }

    function addStaff(address[] calldata _newStaff) public onlyAdmin {
        for (uint256 i = 0; i < _newStaff.length; i++) {
            staff[_newStaff[i]] = true;
        }
    }

    function removeStaff(address _Staff) public onlyAdmin {
        delete staff[_Staff];
    }



}
