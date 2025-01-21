const path = require('path')
const  fs = require('fs')

module.exports = dirName => {
  const version = new Date().getTime()
  let isCreatedCarryOut  =  false
  const  coo = setInterval(()=>{
    if(isCreatedCarryOut){
      clearInterval(coo)
      console.log('版本号：',version)
    }else {
      let content = {
        version:version
      }
      //打包之后的地址
      fs.writeFile(path.resolve(__dirname, '../static') + "/version.json", JSON.stringify(content) , function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("The file was saved!");
      });
      isCreatedCarryOut = true

      // if(fs.existsSync(path.join(__dirname,dirName))){
      //   fs.mkdir(path.join(__dirname,))
      //   fs.writeFile(path.join(__dirname, `/`+dirName) + "/version.json", content, function (err) {
      //     if (err) {
      //       return console.log(err);
      //     }
      //     console.log("The file was saved!");
      //   });
      //   isCreatedCarryOut = true
      // }
    }
  },5000)
}
