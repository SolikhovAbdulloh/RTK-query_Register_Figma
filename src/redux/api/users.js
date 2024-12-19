import { api } from ".";

const Loginapi = api.injectEndpoints({
    endpoints:(build)=>({

        getUsers:build.query({
            query:()=>({
                url:'/users'
            })
        })
    }
)
})
export const  {useGetUsersQuery} = Loginapi