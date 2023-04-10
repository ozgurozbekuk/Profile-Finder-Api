class Profile{
    constructor(){
        this.clientid = ''
        this.clientSecret = ''
    }

    async getProfile(username){
        
        const profileRes = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
        const profile = await profileRes.json()

        const todoRes = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo = await todoRes.json()

        return {
            profile,
            todo
        }

    }

}