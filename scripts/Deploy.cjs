async function Main(){
    const MyNFT=await ethers.getContractFactory("MyNFT");
    const Instance=await MyNFT.deploy();
    console.log("Contrac Adress is ",Instance.address);
}

Main().then(()=>process.exit(0))
.catch((Err)=>{
    console.log(Err);
    process.exit(1);
})