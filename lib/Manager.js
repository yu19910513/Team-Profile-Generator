class Manager {
constructor(name, id, email, github, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = role;
    this.manager = () =>
    `<div class="col-6">
    <div class="card mb-3 bg-danger text-light shadow-lg" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <h6 class="card-subtitle mb-2">Manager</h6>
          <p class="card-text">${this.id}</p>
          <a href="${this.email}" class="card-link">${this.email}</a>
          <a href="https://github.com/${this.github}" class="card-link">GitHub: ${this.github}</a>
        </div>
      </div>
    </div>`
}
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getGithub() {
    return this.github;
}
getRole(){
    return this.role;
}
getHTML() {
    return this.manager()
}
}


module.exports = Manager;
