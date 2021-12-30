const { doc, collection, getDocs, getDoc } = require("firebase/firestore");
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

const getPackageById = async (req, res) => {
    try {
        const id = req.params.id;
        const docRef = doc(db, "packages", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            console.log(docSnap.data());
            res.json(docSnap.data());
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = { getPackage, getPackageById };