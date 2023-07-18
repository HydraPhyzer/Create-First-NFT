// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <=0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private TokenID;

    constructor() ERC721("Zubair Gujjar", "ZG") {}

    function MintNFT(address Receiver,string memory TokenURI) public onlyOwner returns(uint256){
        TokenID.increment();

        uint256 NewItemID=TokenID.current();
        _mint(Receiver, NewItemID);
        _setTokenURI(NewItemID, TokenURI);

        return NewItemID;
    }
}
//0xceB898946c5107723941BC81F33BAcb4c4F08DA6