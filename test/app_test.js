const assert = require("assert");
const request = require("supertest");
const app = require("../app");

describe("The express test", () => {
    
    it("handles the get request to /api", (done) => {
        
        request(app)
            .get("/api")
            .end((err, res) => {
                // console.log(res);
                assert(res.body.hi === "there");
                done();
            });

    });
});