class Github{
    constructor(){
        this.client_id = '87c3ba2a547eef78f33f';
        this.client_secret = '6aea460c53cd417bcac217201d6ad8708c8819bc';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResposne = await fetch(`https://api.github.com/users/${user}?cient_id=${this.client_id}&client_secret${this.client_secret}`);

        const repoResposne = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&cient_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResposne.json();
        const repos = await repoResposne.json();

        return{
            profile,
            repos
        }
    }
}