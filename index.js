 import os from "os"
// console.log(os.homedir())
// console.log(os.hostname())
// console.log(os.version())
// console.log(os.type());
let a = os.type()
 export default function type(){
   return `Привет, юзер. Вижу ты зашел с ${a}`
 }