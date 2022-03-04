const Engineer= require("../lib/Engineer")

test("set Github from constructor", () => {
    const testValue = "pradi123";
    const e = new Engineer("Pradi",100,"pratibha.indel@gmail.com", testValue);
    expect(e.github).toBe(testValue);
  });

test("get Github from function", ()=>{
    const testValue= "Engineer"
    const e= new Engineer("Pradi",100,"pratibha.indel@gmail.com", testValue)
    expect(e.getRole()).toBe(testValue)
})

test("get role from function, should be engineer", ()=>{
    const testValue= "Engineer"
    const e= new Engineer("Pradi",100,"pratibha.indel@gmail.com", testValue)
    expect(e.getGithub()).toBe(testValue)
})