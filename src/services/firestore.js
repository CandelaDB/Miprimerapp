import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyFLYOVqMiynX2bzdnvksKGDiQ-0nUNDA",
    authDomain: "proyectofinalreact-dbc.firebaseapp.com",
    projectId: "proyectofinalreact-dbc",
    storageBucket: "proyectofinalreact-dbc.appspot.com",
    messagingSenderId: "819399327853",
    appId: "1:819399327853:web:3ad97f2716760378beff64"
    };
    
  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Obtiene todos los datos de firestore
export async function getAllProducts() {
  //referencia a la coleccion
    const refColecction = collection(db, "productos");
  //leemos el snapshot de los documentos actualez con getdocs
    const docSnapshot = await getDocs(refColecction);
  //recibimos un array 'docs' dentro de snapshot
    const dataProductos = docSnapshot.docs.map((item) => {
    const productos = {
        ...item.data(),
        id: item.id
    };
    return productos;
    });
    return dataProductos;
}

//Obtiene solo el dato del id pasado
export async function getProduct(id) {
    const refColecction = collection(db, "productos");
    const docRef = doc(refColecction, id);
    const docSnapshot = await getDoc(docRef);
    const producto = {
    ...docSnapshot.data(),
    id: docSnapshot.id
    };

    return producto;
}

//Agregar una orden
export async function createOrder(order) {
    const refColecction = collection(db, "orders");
    const docRef = addDoc(refColecction, order);
    return docRef;
}

export default db;