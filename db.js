class DBConnetcion {
    conn;
    constructor(url,maxPoolSize){
        this.url = url;
        this.maxPoolSize = maxPoolSize;
        DBConnetcion.pool++;
        DBConnetcion.connected= true;
    }
    static connect(){
        if(!DBConnetcion.connected){
            if(DBConnetcion.pool < DBConnetcion.maxPoolSize){
                conn = new DBConnetcion(url);
                DBConnetcion.pool++;
            }else{
                console.log('Unable to connect: Connection pool maxed out');
            }
        }
    }
    static disconnect(){
        if(DBConnetcion.connected){
            conn = null;
            DBConnetcion.pool--;
        }
    }
}

DBConnetcion.pool = 0;
DBConnetcion.connected = false;





// classname ^ dbconectipn
// url
// connectionhub : coun of devices
// connect()
// if a clinet is already connected, dont do anything, otherwise connect him to url
// disconnet()
//if a client is not connected, do nothing , otherwise disconnect him