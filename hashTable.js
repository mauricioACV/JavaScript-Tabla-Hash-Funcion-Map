class Contact {
  constructor(name, age, phone) {
    (this.name = name), (this.age = age), (this.phone = phone);
  }
}

const contacts = new Map();

contacts.set("Mauro", new Contact("Mauricio Campusano", 18, "1234567"));
contacts.set("Javi", new Contact("Javiera Campusano", 4, "3333333"));
contacts.set("Conny", new Contact("Constanza Campusano", 21, "7654321"));

//Iterar tabla hash
contacts.forEach((contact) => {
  console.log("iteración:", contact.name);
});

//Obtener contacto específico
console.log("Item específico:", contacts.get("Javi").name);
console.log("Item específico:", contacts.get("Javi").age);
console.log("Item específico:", contacts.get("Javi").phone);

//Verificar si una KEY existe
if (!contacts.has("Juan")) {
  console.log("Busco key JUAN pero no existe");
}

if (contacts.has("Mauro")) {
  console.log("Busco key MAURO y si existe");
  console.log("Datos de mauro::", contacts.get("Mauro").name);
  console.log("Datos de mauro::", contacts.get("Mauro").age);
  console.log("Datos de mauro::", contacts.get("Mauro").phone);
}

//Remover un item
contacts.delete("Mauro");
contacts.forEach((contact) => {
  console.log("Mauro fue borrado:", contact.name);
});

//Remover todos los items
contacts.clear();
console.log("Nada en la tabla:", contacts);

//Constructor de Map puede almacenar array of arrays. Cada child array es un par de llave - valor
const usoAmplio = new Map([
  [1, "JavaScript"],
  [2, "C#"],
  [3, "Python"],
]);
//Tamaño de tabla
console.log("Tamaño Map", usoAmplio.size);

//Iterar keys
const keys = usoAmplio.keys();
for (let key of keys) {
  console.log("keys:", key);
}

//Iterar values
const values = usoAmplio.values();
for (let value of values) {
  console.log("values:", value);
}

//Iterar entries
const entries = usoAmplio.entries();
for (let entry of entries) {
  console.log("key:", entry[0], "value:", entry[1]);
}
