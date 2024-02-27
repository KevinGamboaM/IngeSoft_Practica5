import get_bisiesto from "./bisiesto.js";

describe("Bisiesto", () =>{
    it("Todos los años divisibles por  400 SON años bisiestos (así, por ejemplo, 2000 fue un año bisiesto)", () => {
      expect(get_bisiesto(2000)).toEqual("SI, es bisiesto");
    });
    it("Todos los años divisibles por 100 pero no por 400 NO son años bisiestos (por ejemplo, 1700, 1800 y 1900 NO fueron años bisiestos, NI 2100 será un año bisiesto)", () => {
        expect(get_bisiesto(1900)).toEqual("No es bisiesto");
      });
});