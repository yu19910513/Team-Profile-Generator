const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("initilization", () => {
        it("should return an object", () => {
            const sample = new Intern()
            expect(typeof(sample)).toEqual("object");
        })
    })

    describe("getName", () => {
        it("should return name via contructor", () => {
            const name = 'Sample';
            const sample = new Intern(name)
            expect(sample.name).toEqual(name);
        })
    })

    describe("getId", () => {
        it("should return id via contructor", () => {
            const samplevalue= 10;
            const sample = new Intern('rex', samplevalue)
            expect(sample.id).toEqual(samplevalue);
        })
    })

    describe("getEmail", () => {
        it("should return email via contructor", () => {
            const samplevalue = 'Sample@me.com';
            const sample = new Intern('rex', 10, samplevalue, 'yu19910513')
            expect(sample.email).toEqual(samplevalue);
        })
    })

    describe("getGithub", () => {
        it("should return github value via contructor", () => {
            const samplevalue = 'rexyu';
            const sample = new Intern('rex', 10, 'me@me.com', samplevalue)
            expect(sample.github).toEqual(samplevalue);
        })
    })

    describe("getSchool", () => {
        it("should return school value via contructor", () => {
            const samplevalue = 'Washington State University';
            const sample = new Intern('rex', 10, 'me@me.com', 'rexyu', samplevalue)
            expect(sample.school).toEqual(samplevalue);
        })
    })

    describe("getRole", () => {
        it("should return role value via contructor", () => {
            const samplevalue = 'student';
            const sample = new Intern('rex', 10, 'me@me.com', 'rexyu', 'WSU', samplevalue)
            expect(sample.role).toEqual(samplevalue);
        })
    })

    describe("getHTML", () => {
        it("should return a string of html value via contructor", () => {
            const samplevalue =  () => `<div class="col-6">
    <div class="card mb-3 bg-info shadow-lg" style="width: 100%;">
        <div class="card-body">
        <h5 class="card-title">rex</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern/ WSU</h6>
        <p class="card-text">10</p>
        <a href="me@mw.me" class="card-link">me@mw.me</a>
        <a href="https://github.com/rexisgood" class="card-link">GitHub: rexisgood</a>
        </div>
    </div>
    </div>`
            const sample = new Intern('rex', 10, 'me@mw.me', 'rexisgood', 'WSU')
            expect(sample.intern()).toEqual(samplevalue());
        })
    })
  })
