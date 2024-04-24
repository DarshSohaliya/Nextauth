
import CredentialsProvider from "next-auth/providers/credentials";

export const NEXT_AUTH = {
    providers:[
        CredentialsProvider({
            name:'Email',
            credentials: {
                 username:{ label: 'email' , type:'text', placeholder:'Email'},
                 password:{ label:'passwoerd', type:'password' ,placeholder:'Password'}
            },
            async authorize(credentials: any){
                console.log(credentials);
    
                
                return {
                    id:"user1",
                    name:"gopal sohaliya",
                    email:"gopal@gmail.com"
                }
            }
        })
       ],
       secret:process.env.NEXTAUTH_SECRET,
       callbacks:{
        
        session:({session , token , user}:any) => {
            console.log(session);
            if (session && session.user) {
                session.user.id  = token.sub;
            }
            return session
            
        }
       }
}