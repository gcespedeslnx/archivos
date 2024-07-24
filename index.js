//import { existsSync } from 'node:fs';
const argv = process.argv;
const fs = require("fs");

let _nombre = argv[3];
let comando = argv[2];
let nombres = {nombre: [_nombre] };


switch (comando) {
    case "add":
            if(fs.existsSync('./koders.json')){
            const appe = fs.appendFileSync("koders.json", JSON.stringify(nombres), "utf8")
      }else{
          console.log("Se crea el archivo");
          fs.writeFileSync("koders.json",JSON.stringify(nombres),{encoding:"utf8" })

      }
      break;
    case "rm":
          if(_nombre){
             console.log("Hacer las instrucciones")

          }else{
             console.log("No es un nommbre valido");
             process.exit(1)
          }
        break;
    case "ls":
         const data = fs.readFileSync("koders.json","utf8");
          console.log(JSON.stringify(data))
      
            break;
    case "reset":
      fs.writeFileSync("koders.json","",{encoding:"utf8" })
              console.log('comando reset');
              break;
              
              
     default:
      console.log(`Comando invalido`);
  }