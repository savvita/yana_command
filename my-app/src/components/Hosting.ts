export class Hosting{
    private host: String;

    constructor(){
        this.host = 'localhost:7263';
    }
    getHost(): String{
        return this.host;
    }
     
 }