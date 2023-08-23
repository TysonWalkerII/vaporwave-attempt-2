import {db} from "../../src/firebase-config";
import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, onSnapshot} from "firebase/firestore";

const chatCollectionRef = collection(db, "messages");



class chatService{
    
    addChat = (newChat) => {
        return addDoc(chatCollectionRef, newChat)
    }
    updateChat = (id, updatedChat) =>{
        const chatDoc = doc(db, "messages", id);
        return updateDoc(chatDoc, updatedChat)
    }
    
    deleteChat = (id) =>{
        const chatDoc = doc(db, "messages", id);
    return deleteDoc(chatDoc)
    }
    
    getAllChats = () => {
        console.log("tired")
        return getDocs(chatCollectionRef)
    }
    
    getChat = (id) => {
    const chatDoc = doc(db, "messages", id);
    return getDoc(chatDoc);
    }
    
    }
    
    
    
    export default new chatService();