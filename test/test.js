var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("http://localhost:3000");

// Unit test

describe("SAMPLE Unit test", function() {
    // #1 should return home page
    it("should return home page", function(done) {
        server
            .get('/')
            .expect("Content-type", /text/)
            .expect(200)
            .end(function(err, res){
                res.status.should.equal(200);
                done();
            });
    });

    // #2 should return json welcome message
    it("should return json welcome message", function(done) {
        server
            .get('/hello')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function(err, res){
                res.status.should.equal(200);
                done();
            });
    });

});
