class Employee {
    constructor (name, desc, email, github) {
        this.name = name;
        this.desc = desc;
        this.email = email;
        this.github = github
        this.employee = () =>
        `<div class="col-6">
            <div class="card mb-3 bg-warning shadow-lg" style="width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">${this.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
                  <p class="card-text">${this.desc}</p>
                  <a href="${this.email}" class="card-link">${this.email}</a>
                  <a href="https://github.com/${this.github}" class="card-link">GitHub: ${this.github}</a>
                </div>
              </div>
        </div>`
    }

    getName() {
        return this.name;
    }
    getDesc() {
        return this.desc;
    }
    getEmail() {
        return this.email;
    }
    getGithub() {
        return this.github;
    }

    getHTML() {
        return this.employee()
    }
}


module.exports = Employee;
