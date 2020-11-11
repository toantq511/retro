import "firebase/firestore";
import { useRef } from "react";

import firebase from "../config/firebase";

const useFirestore = (collectionURI) => {
	const db = useRef(firebase.firestore());
	return { db: db.current };
};

export default useFirestore;
