import conf from '../conf.config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
        .setEndpoint( appwriteUrl)
        .setProject( appwriteProjectId)

       this.account = new Account(this.client);

    }
}

const authService = new AuthService()
export default authService;