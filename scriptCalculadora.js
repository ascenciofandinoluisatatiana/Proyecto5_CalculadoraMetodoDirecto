
const operacion = document.getElementById("operacion");
const resultado = document.getElementById("resultado");

const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");

let expresion = "0";

function actualizarDisplay() {
    resultado.textContent = expresion;
}

botonesNumeros.forEach(boton => {

    boton.addEventListener("click", () => {

        const valor = boton.textContent.trim();

        if (expresion === "0" && valor !== ".") {
            expresion = valor;
        }

        else if (expresion === "0" && valor === ".") {
            expresion = "0.";
        }

        else if (valor === ".") {

            const partes = expresion.split(/[+\-*/]/);
            const ultimoNumero = partes[partes.length - 1];

            if (!ultimoNumero.includes(".")) {
                expresion += ".";
            }

        } else {
            expresion += valor;
        }

        actualizarDisplay();

    });

});

const operadoresValidos = ["+", "-", "x", "÷"];

botonesOperadores.forEach(boton => {

    boton.addEventListener("click", () => {

        const valor = boton.textContent.trim();

        if (valor === "C") {
            expresion = "0";
            operacion.textContent = "";
            actualizarDisplay();
            return;
        }

        if (valor === "⌫") {

            expresion = expresion.slice(0, -1);

            if (expresion === "") {
                expresion = "0";
            }

            actualizarDisplay();
            return;
        }

        if (valor === "%") {

            expresion = String(Number(expresion) / 100);

            actualizarDisplay();
            return;
        }

        if (valor === "=") {

            try {

                let expresionEval = expresion
                    .replaceAll("x", "*")
                    .replaceAll("÷", "/");

                // División por cero
                if (expresionEval.includes("/0")) {
                    throw new Error("Division por cero");
                }

                let respuesta = eval(expresionEval);

                if (!isFinite(respuesta)) {
                    throw new Error("Resultado invalido");
                }

                operacion.textContent = expresion + " =";
                expresion = String(respuesta);

                actualizarDisplay();

                setTimeout(() => {

                    expresion = "0";
                    operacion.textContent = "";
                    actualizarDisplay();

                }, 3000);

            } catch (error) {

                expresion = "Error";
                actualizarDisplay();

                setTimeout(() => {

                    expresion = "0";
                    actualizarDisplay();

                }, 2000);

            }

            return;
        }

        if (operadoresValidos.includes(valor)) {

            if (expresion === "0") {
                alert("El formato usado no es válido!");
                return;
            }

            const ultimoCaracter = expresion.slice(-1);

            if (operadoresValidos.includes(ultimoCaracter)) {
                return;
            }

            expresion += valor;
            actualizarDisplay();
        }

    });

});