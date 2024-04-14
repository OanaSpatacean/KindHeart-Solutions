import {db} from './firebase'
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const Homeproduct = 
[
]

const collectionReference = collection(db, "Proiecte"); 

(async () => {
    const querySnapshot = await getDocs(collectionReference);
    querySnapshot.docs.forEach((doc) => {
      const opportunityData = doc.data();
      const { id, Name, County, Image, Description} = opportunityData;
      const opportunity = { id, Name, County, Image, Description };
      Homeproduct.push(opportunity);
    });

    await Promise.all([Homeproduct]);
})();

export default Homeproduct;