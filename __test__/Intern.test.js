const Intern = require("../lib/Intern")

test("set school from contructor",()=>{
    const testValue= "UNH"
    const e= new Intern("Pradi",100,"pratibha.indel@gmail.com",testValue)
    expect(e.school).toBe(testValue)
})

test("get role from function, it should be intern", ()=>{
    const testValue= "Intern"
    const e= new Intern("Pradi",100,"pratibha.indel@gmail.com","UNH")
    expect(e.getRole()).toBe(testValue)
})

test("get school from function", ()=>{
    const testValue= "UNH"
    const e= new Intern("Pradi",100,"pratibha.indel@gmail.com",testValue)
    expect(e.getSchool()).toBe(testValue)
})