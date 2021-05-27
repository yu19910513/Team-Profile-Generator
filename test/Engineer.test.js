const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("initilization", () => {
        it("should return an object", () => {
            const sample = new Engineer()
            expect(typeof(sample)).toEqual("object");
        })
    })

    describe("getName", () => {
        it("should return name via contructor", () => {
            const name = 'Sample';
            const sample = new Engineer(name)
            expect(sample.name).toEqual(name);
        })
    })

    describe("getId", () => {
        it("should return id via contructor", () => {
            const samplevalue= 10;
            const sample = new Engineer('rex', samplevalue)
            expect(sample.id).toEqual(samplevalue);
        })
    })

    describe("getEmail", () => {
        it("should return email via contructor", () => {
            const samplevalue = 'Sample@me.com';
            const sample = new Engineer('rex', 10, samplevalue, 'yu19910513')
            expect(sample.email).toEqual(samplevalue);
        })
    })

    describe("getGithub", () => {
        it("should return github value via contructor", () => {
            const samplevalue = 'rexyu';
            const sample = new Engineer('rex', 10, 'me@me.com', samplevalue)
            expect(sample.github).toEqual(samplevalue);
        })
    })

    describe("getRole", () => {
        it("should return role value via contructor", () => {
            const samplevalue = 'engineer';
            const sample = new Engineer('rex', 10, 'me@me.com', 'rexyu', samplevalue)
            expect(sample.role).toEqual(samplevalue);
        })
    })

    describe("getHTML", () => {
        it("should return a string of html value via contructor", () => {
            const samplevalue =  () => `<div class="col-6">
            <div class="card mb-3 bg-light shadow-lg" style="width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">rex</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                  <p class="card-text">10</p>
                  <a href="me@me.me" class="card-link">me@me.me</a>
                  <a href="https://github.com/yu19910513" class="card-link">GitHub: yu19910513</a>
                </div>
              </div>
      </div>`
            const sample = new Engineer('rex', 10, 'me@me.me', 'yu19910513')
            expect(sample.engineer()).toEqual(samplevalue());
        })
    })
  })
