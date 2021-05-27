class Intern {
    constructor (name, id, email, github, school, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.school = school;
    this.role = role;
    this.intern = () =>
    `<div class="col-6">
    <div class="card mb-3 bg-info shadow-lg" style="width: 100%;">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern/ ${this.school}</h6>
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

    getSchool() {
        return this.school;
    }
    getRole(){
        return this.role;
    }

    getHTML() {
        return this.intern()
    }
}


module.exports = Intern;
