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
        try{
            return await this.database.createDocument( 
                conf.appwriteDatabaseId,
                conf.  appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredImage,
                   status,
                   userId
                }
           )
        } catch(error){
            throw error;
        }
       
    }

    async updatePost (slug , {title , content, featuredImage , status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status                 
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost(slug){
        try {
             await this.database.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug   
            )
            return true;
        } catch (error) {
            console.log("apprite : delete post : error",error);
            return false;
        }
       
    }

}


const services = new Service()
export default services