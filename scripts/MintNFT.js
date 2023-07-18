require("dotenv").config();
const {createAlchemyWeb3} = require("@alch/alchemy-web3");
const WEB3=createAlchemyWeb3(`https://eth-sepolia.g.alchemy.com/v2/${process.env.API_KEY}`)

const Contract=require("../artifacts/Contracts/MyNFT.sol/MyNFT.json")


let ContractAddress="0xceB898946c5107723941BC81F33BAcb4c4F08DA6"
const NFTContract=new WEB3.eth.Contract(Contract.abi,ContractAddress)

async function MintNFT(TokenURI){
    const Nonce=await WEB3.eth.getTransactionCount(process.env.PUBLIC_KEY,"latest")

    const Tx={
        'from':process.env.PUBLIC_KEY,
        'to':ContractAddress,
        'none':Nonce,
        'gas':500000,
        'data':NFTContract.methods.MintNFT(process.env.PUBLIC_KEY,TokenURI).encodeABI()
    }

    const SignPromise=WEB3.eth.accounts.signTransaction(Tx,process.env.PRIVATE_KEY)
    SignPromise.then((SignedTx)=>{
        WEB3.eth.sendSignedTransaction(
            SignedTx.rawTransaction,
            function(Err,Hash){
                if(!Err){
                    console.log("The Hash of the Transaction is: ",Hash);
                }else{
                    console.log("Something Went Wrong")
                }
            }
        )
    }).catch((Err)=>{
        console.log("Something Went Wrong")
    })
}
MintNFT("https://gateway.pinata.cloud/ipfs/QmTbTp7fR4FEKZSA7GNm75zGQq94n7J9C4rV5wHsga2Zao")

//Transaction Hash is : 0x7de1db508c8e740bf7c8aca6ea3f5329d4a24206907c48dad242f0ad3e75c026
//At Ethercan io : https://sepolia.etherscan.io/tx/0x7de1db508c8e740bf7c8aca6ea3f5329d4a24206907c48dad242f0ad3e75c026
//Contract Details: https://sepolia.etherscan.io/tx/0xf197f52760fb2c144fec453f03c75ecb9433ed59942b8fc666dff60a86aef908