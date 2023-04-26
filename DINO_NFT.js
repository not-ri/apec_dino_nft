/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const NFT_collection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (name, quality, color, rarity) {
    
    const NFT = {
        "name": name,
        "quality": quality,
        "color": color,
        "rarity": rarity
    }

    NFT_collection.push(NFT);
    console.log("Minted: " + name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    for (let i = 0; i < NFT_collection.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFT_collection[i].name);
        console.log("Quality: \t" + NFT_collection[i].quality);
        console.log("Color: \t\t" + NFT_collection[i].color);
        console.log("Rarity: \t" + NFT_collection[i].rarity);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNumber of NFTs: \t" + NFT_collection.length)
}

// call your functions below this line
mintNFT("Cinnamoroll", "Excellent", "White", "SSS");
mintNFT("Pompompurin", "Scrunkly", "Yellow", "S");
mintNFT("Kuromi", "Menace", "Black", "SS");
mintNFT("My Melody", "Angelic", "Pink", "SS");
listNFTs();
getTotalSupply();