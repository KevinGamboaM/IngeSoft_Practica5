import get_bisiesto from "./bisiesto.js";

describe("Bisiesto", () =>{
    it("Todos los años divisibles por  400 SON años bisiestos (así, por ejemplo, 2000 fue un año bisiesto)", () => {
      expect(get_bisiesto(2000)).toEqual("SI, es bisiesto");
    });
    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos (por ejemplo, 1700, 1800 y 1900 NO fueron años bisiestos, NI 2100 será un año bisiesto)", () => {
        expect(get_bisiesto(2100)).toEqual("No es bisiesto");
    });
    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos (por ejemplo, 2008, 2012, 2016)", () => {
        expect(get_bisiesto(2012)).toEqual("SI, es bisiesto");
    });
});