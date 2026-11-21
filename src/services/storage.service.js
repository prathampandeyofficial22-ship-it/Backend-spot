const {ImageKit} = require("@imagekit/nodejs");

const ImageKitClient = new ImageKit({
    privateKey : process.env.IMAGEKIT_URI
});

async function uploadFile(file){
    const result = await ImageKitClient.files.upload({
        file,
        fileName : "music/"+ Date.now(),
        folder : "music/music_app1"
    });

    return result;
}

module.exports = uploadFile;