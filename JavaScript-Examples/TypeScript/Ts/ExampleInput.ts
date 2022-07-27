import * as readLine from 'node:readline';
import { stdin, stdout } from 'process';

const r1 = readLine.createInterface({
   input: stdin,
   output: stdout 
});

r1.question("what's your name ? ", function(answer: string){
    console.log(`Your Name is : ${answer}` );
    console.log("closing the Interface");
    r1.close();
});