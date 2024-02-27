import get_bisiesto from "./bisiesto.js";

describe("Bisiesto", () =>{
    it("Todos los años divisibles por  400 SON años bisiestos (así, por ejemplo, 2000 fue un año bisiesto)", () => {
      expect(get_bisiesto(2000)).toEqual("SI, es bisiesto");
    });
});