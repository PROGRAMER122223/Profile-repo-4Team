const Manager = require("../lib/Manager");

test("set office number from contructor",()=>{
    const testValue= 1111
    const e= new Manager("Pradi",100,"pratibha.indel@gmail.com",testValue)
    expect(e.officeNumber).toBe(testValue)
})

test("get role from function, it should be intern", ()=>{
    const testValue= "Manager"
    const e= new Manager("Pradi",100,"pratibha.indel@gmail.com",1111)
    expect(e.getRole()).toBe(testValue)
})

test("set office number from function",()=>{
    const testValue= 1111
    const e= new Manager("Pradi",100,"pratibha.indel@gmail.com",testValue)
    expect(e.getOfficeNumber()).toBe(testValue)
})