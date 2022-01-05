const { doc, collection, addDoc, getDocs, getDoc, query, where } = require("firebase/firestore");
const db = require("../config");

const createOrder = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, "orders"), data);
        res.send({message: `New Order Added ${docRef.id}`});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getOrder = async (req, res) => {
    try {
        const docRef = collection(db, "orders");
        const docSnap = await getDocs(docRef);
        const list = docSnap.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });
        console.log(list);
        res.json(list);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getOrderById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docSnap.data());
            res.send(docSnap.data());
        }
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

const getOrderByUserId = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const q = query(collection(db, "orders"), where("user_id", "==", id));
        const querySnap = await getDocs(q);
        const list = querySnap.docs.map((doc) =>{
            return { id: doc.id, ...doc.data() }
        });

        console.log(list);
        res.json(list);
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

module.exports = { createOrder, getOrder, getOrderById, getOrderByUserId };