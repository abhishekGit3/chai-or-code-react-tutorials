import conf from '../conf.js'
import { ID , Databases , Client , Storage , Query } from 'appwrite'

export class Service{
    client = new Client();
    database;
    bucket;
    constructor(){
        this.client
        .setEndpoint( conf.appwriteUrl)
        .setProject( conf.appwriteProjectId)
        
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost ({title , slug , content , featuredImage , status , userId}){
        return await this.database.createDocument( 
             conf.appwriteDatabaseId,
             conf.appwriteProjectId,
             {
                
             }
        )
    }

}


const services = new Service()
export default services