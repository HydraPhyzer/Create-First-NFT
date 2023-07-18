### This is Complete Details About How I Create NFT

## Technologies Used

* Pinnata IPFS
* ERC721 Token
* Hardhat
* Web3
* Alchemy WEB3
* Sepolia Test Net

## Step-By-Step Procedure


```js
npm init -y
npm install hardhat
npx hardhat // (Select Basic Sample Project)
npm install @openzeppelin/contracts
npm install dotenv
npm install @alch/alchemy-web3

```

After Doing the Above Steps. Move Forward to Tese Steps

* Now Write Contract Iside Contract Folder By IMporting OpenZeppelin Provided Libraries such as ERC721 OR Counter etc

* This Contract Should Contain MintNFT Function

* Create .ENV File Which Will Contains The Private Key of Metamask Account and Also Public Key of Account and Alchemy HTTP API Of Your Project

* Now Configure Your `hardhat.config.js` File For Your Sepolia Test Network. Refer My File For More Info

* Create `Deploy.js` File inside Scripts Folder and Write `Main` Function Script , To Deploy Contract on Alchemy.

Then Run the Following Scripts on Terminal

```js
npx hardhat compile
npx run scripts/Deploy.js --network sepolia

```

After Deploying You Can See You Contract on `sepolia.etherscan.io`

* Now Afetr Doing This, Create `MintNFT.js` File Inside Your Scripts Folder, and Write The Necessary Code That I Have In My `scripts/MintNFT.js` File

* But Before Doing the Above Step Go and Upload Your NFT Image to Pinnata IPFS

* After This Create `NFT-Metadata.json` File In Root Folder and Write Basic Info About Your NFT as I Have In `Metadata.json` File

* Also Upload `NFT-Metadata.json` File to Pinnata IPFS.

* After This Run in Terminal `node MintNFT.js`, This Will Run and Will Give you The Hash of Your NFT. With This Hash You Can Now Go to `etherscan.io` To Verify You NFT.

* Now You Can Add This NFT In Your Metamask by Copying Interacted To Adress From `etherscan.io` of Your NFT

