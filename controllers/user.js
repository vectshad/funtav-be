const { collection, addDoc } = require("firebase/firestore");
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

module.exports = createUser;