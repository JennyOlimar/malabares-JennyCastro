import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, where, limit } from "firebase/firestore";
import { db } from './firebase';

const collectionName = 'orders';
const itemsCollection = collection(db, collectionName);

// CREATE
export const createItem= (obj) => {
    return addDoc(itemsCollection, obj).id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    await updateDoc(doc(db, collectionName, id), obj)
}

// READ
export const getItems= async ()  => {
    const result = await getDocs(query(itemsCollection));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const result = await getDocs(query(itemsCollection, where('age', '>', value)));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

export const getItemByName = async (name) => {
    const result = await getDocs(query(itemsCollection, where('nombre', '==', name), limit(1)));
    const doc = result.docs[0];
    return result.size !== 0 ? { ...doc.data(), id: doc.id} : {};
}

export const getItemByCategory = async (id) => {
    const result = await getDocs(query(itemsCollection, where('categoryId', '==', parseInt(id))));
    return result.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}

export const getItemById = async (id) => {
    const result = await getDoc(doc(db, collectionName, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    await deleteDoc(doc(collectionName, id));
}