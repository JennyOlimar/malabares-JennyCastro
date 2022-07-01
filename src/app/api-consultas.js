import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

const itemsCollection = collection(db, 'items');

// CREATE
export const createItem= (obj) => {
    return addDoc(itemsCollection, obj).id;
}

// UPDATE
export const updateItem = async (id, obj) => {
    await updateDoc(doc(itemsCollection, id), obj)
}

// READ
export const getItems= async ()  => {
    const result = await getDocs(query(itemsCollection));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const result = await getDocs(query(itemsCollection , where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const result = await getDoc(doc(itemsCollection, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    await deleteDoc(doc(itemsCollection, id));
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}