
class BillingAdrdess {
    constructor(firstName,lastName,username,email,address,address2,addressBill,saveI){
        this.firstName = firstName || false;
        this.lastName = lastName || false;
        this.email = email || false;
        this.username = username || false;
        this.address = address || false;
        this.address2 = address2 || false;
        this.addressBill = addressBill || false;
        this.saveI = saveI ||fasle;
    }

    check(){
        if(!this.firstName && !this.lastName){
            prompt("Por favor ingrese nombre completo")
        }
    }

    
}

class Payment {
    constructor(armado,pintado,material,pintura){
        this.credit = credit || false;
        this.debit = debit ||false;
        this.paypal = paypal ||false;
        this.nameC = nameC || false;
        this.number = number || false;
        this.expiration = expiration || false;
        this.cvv = cvv || false;
    }

    look(){
        
    }
}

class Cart {
    constructor(nombre){
        this.nombre = nombre
        this.products = [] 
        this.total = 0
    }

    add(product){
        let can = this.products.length
        let cont = 0
        let i = 0
       while(cont==0){
               var element = this.products[i];
               if(element == product){
                element[2]++
                console.log(element[2])
                   let precio = product[1]
                   this.total += precio;
                   this.products[i]=element
                   console.log('Se ha agregado ' + element[0])
                   cont++
                }
                if(i==can){
                    this.products.push(product)
                   let precio = product[1]
                   this.total += precio;
                   console.log('Se ha agregado ' + product[0])
                   cont++
                }
           i++
       }
    }

  remove(product){
         let can = this.products.length
         let cont = 0
         let i = 0
        while(cont==0){
                var element = this.products[i];
                if(element == product){
                    product[2]--
                    let precio = product[1]
                    this.total -= precio;
                   this.products[i]=element
                    console.log('Se ha eliminado ' + element[0])
                    cont++
                    if(element[2] ==0){
                        this.products.splice(i, 1)
                    }
                 }
                 if(i==can)
                    cont++
            i++
        }
    }


    empty(){
        let can = this.products.length
        for (let i = can-1; i >= 0; i--) {
                const element = this.products[i];
                this.total -= element[1]
                this.products.splice(i, 1)
            }
            console.log("Se ha vaciado el carrito")
        }

    bill(codigo){
        if(this.total == 0){
            this.total=0
            console.log("No hay nada en el carrito")
        }
        else {
            if(codigo == "porfavor"){
            this.total=this.total-20
            console.log("Promoción aplicada")
            }
         }
         console.log("El total a pagar es " + this.total)
    }
}


    const Libro1 = ["Gen1", 120, 1];
    const Libro2 = ["Gen2", 80, 1];
    const Libro3 = ["Gen3", 100, 1];
    const LibroF1 = ["Fan1", 120, 1];
    const LibroF2 = ["Fan2", 80, 1];
    const LibroF3 = ["Fan3", 100, 1];
    const LibroT1 = ["Ter1", 120, 1];
    const LibroT2 = ["Ter2", 80, 1];
    const LibroT3 = ["Ter3", 100, 1];    
    carrito = new Cart("Pablo");
    //document.getElementById("Carrito").innerHTML = Libro1[0];
    /* document.getElementById("Carrito1").innerHTML = Libro1[0];
    document.getElementById("Carrito1").innerHTML = Libro1[0]; */
    async function Tendencias() {
        let url = "https://api.mercadolibre.com/trends/MLM/MLM1196";
        let resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
    }
    async function Tendencias() {
        let url = "https://api.mercadolibre.com/categories/MLM1196/";
        let resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
    }
    Tendencias();