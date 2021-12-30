const { doc, collection, addDoc, getDocs, query, where } = require("firebase/firestore");
const db = require("../config");

const createUser = async (req, res) => {
    try {
        const data = req.body;
        const docRef = await addDoc(collection(db, "users"), data);
        res.send({message: `New User Added ${docRef.id}`});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const userValidate = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        console.log(username, password);
        const q = query(collection(db, "users"), where("username", "==", username), where("password", "==", password));
        const querySnap = await getDocs(q);
        const list = querySnap.docs.map((doc) =>doc.data());

        if (list.length === 1) {
            console.log(list);
            res.json(list[0]);
        }
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
}

module.exports = { createUser, userValidate };