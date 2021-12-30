const { collection, getDocs } = require("firebase/firestore");
const db = require("../config");

const getPackage = async (req, res) => {
    try {
        const docRef = collection(db, "packages");
        const docSnap = await getDocs(docRef);
        const list = docSnap.docs.map((doc) =>doc.data());
        console.log(list);
        res.json(list);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = getPackage;