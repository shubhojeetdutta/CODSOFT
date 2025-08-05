let expr = "";
    const display = document.getElementById("display");

    function press(ch) {
      if (expr === "" && ch === "0") return;
      expr += ch;
      update();
    }

    function update() {
      display.value = expr || "0";
    }

    function clearAll() {
      expr = "";
      update();
    }

    function backspace() {
      expr = expr.slice(0, -1);
      update();
    }

    function calculate() {
      try {
        // safe eval: only basic arithmetic
        const result = Function('"use strict";return (' + expr + ')')();
        expr = String(result);
      } catch {
        expr = "Error";
      }
      update();
    }