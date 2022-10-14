import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

export async function getUsers(membersIds) {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('uid', 'in', membersIds));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return users;
}

