class GitHub {
  constructor(){
    this.client_id = '163d15a46ca1cf1cf54d';
    this.client_secret = '47ace7335823375c54edd822be3b170963028744';
    this.repos_count = 10;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await profileRepos.json();

    return {
      profile,
      repos
    }
  }
}