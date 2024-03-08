class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = ``;
  }

  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += ``;
    });
    document.getElementById("repos").innerHTML = output;
  }
}
