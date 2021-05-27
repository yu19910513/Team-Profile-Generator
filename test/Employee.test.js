const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("initilization", () => {
        it("should return an object", () => {
            const sample = new Employee()
            expect(typeof(sample)).toEqual("object");
        })
    })

    describe("getName", () => {
        it("should return name via contructor", () => {
            const name = 'Sample';
            const sample = new Employee(name)
            expect(sample.name).toEqual(name);
        })
    })

    describe("getDesc", () => {
        it("should return desc via contructor", () => {
            const samplevalue= 'is hungry';
            const sample = new Employee('rex', samplevalue)
            expect(sample.desc).toEqual(samplevalue);
        })
    })

    describe("getEmail", () => {
        it("should return email via contructor", () => {
            const samplevalue = 'Sample@me.com';
            const sample = new Employee('rex', 'boring', samplevalue, 'yu19910513')
            expect(sample.email).toEqual(samplevalue);
        })
    })

    describe("getGithub", () => {
        it("should return github value via contructor", () => {
            const samplevalue = 'rexyu';
            const sample = new Employee('rex', 'boring', 'me@me.com', samplevalue)
            expect(sample.github).toEqual(samplevalue);
        })
    })

    describe("getHTML", () => {
        it("should return a string of html value via contructor", () => {
            const samplevalue =  () => `<div class="col-6">
            <div class="card mb-3 bg-warning shadow-lg" style="width: 100%;">
                <div class="card-body">
                  <h5 class="card-title">rex</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Employee</h6>
                  <p class="card-text">boring</p>
                  <a href="me@me.com" class="card-link">me@me.com</a>
                  <a href="https://github.com/rexyu" class="card-link">GitHub: rexyu</a>
                </div>
              </div>
        </div>`
            const sample = new Employee('rex', 'boring', 'me@me.com', 'rexyu')
            expect(sample.employee()).toEqual(samplevalue());
        })
    })
  })
