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

    describe("getDesc", () => {
        it("should return desc via contructor", () => {
            const samplevalue= 'is hungry';
            const sample = new Intern('rex', samplevalue)
            expect(sample.desc).toEqual(samplevalue);
        })
    })

    describe("getEmail", () => {
        it("should return email via contructor", () => {
            const samplevalue = 'Sample@me.com';
            const sample = new Intern('rex', 'boring', samplevalue, 'yu19910513')
            expect(sample.email).toEqual(samplevalue);
        })
    })

    describe("getGithub", () => {
        it("should return github value via contructor", () => {
            const samplevalue = 'rexyu';
            const sample = new Intern('rex', 'boring', 'me@me.com', samplevalue)
            expect(sample.github).toEqual(samplevalue);
        })
    })

    describe("getHTML", () => {
        it("should return a string of html value via contructor", () => {
            const samplevalue =  () => `<div class="col-6">
    <div class="card mb-3 bg-info shadow-lg" style="width: 100%;">
        <div class="card-body">
        <h5 class="card-title">rex</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        <p class="card-text">emotional</p>
        <a href="me@mw.me" class="card-link">me@mw.me</a>
        <a href="https://github.com/rexisgood" class="card-link">GitHub: rexisgood</a>
        </div>
    </div>
    </div>`
            const sample = new Intern('rex', 'emotional', 'me@mw.me', 'rexisgood')
            expect(sample.intern()).toEqual(samplevalue());
        })
    })
  })
