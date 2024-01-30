// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;

import { Test } from "forge-std/Test.sol";

import { Token } from "src/Token.sol";

contract TokenTest is Test {
    Token t;

    function setUp() public {
        t = new Token();
    }

    function testName() public {
        assertEq(t.name(), "Token");
    }
}
