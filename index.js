let monto = parseInt(prompt("Monto inicial"))
let costo = parseInt(prompt("precio producto"))
let cliente = parseInt(prompt("pago cliente"))

function registrar(a, b) {
    if (a < b) {
        return alert("recarga platita")
    }
    else {
        montoparcial = monto + b;
        vuelto = a - b;

    }
    if (vuelto > 0) {
        montofinal = montoparcial - vuelto
        console.log(montofinal)
    }
    console.log(vuelto)



}
registrar(cliente,costo)

