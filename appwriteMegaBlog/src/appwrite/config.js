import conf from '../conf.js'
import {Databases , Client , Storage , Query} from 'appwrite'

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


    async getPost (slug){
        try {
            return await this.database.getDocument(
                donf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug        
            )
          
        } catch (error) {
            console.log("apprite : get post : error",error);
            return false;
        }
    }

    async getPosts (){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    
                    Query.equal['status','active']
                ]
            )
        } catch (error) {
            console.log("apprite : list post : error",error);
            return false;
        }
    }

    // file upload service

    
}

const services = new Service()
export default services