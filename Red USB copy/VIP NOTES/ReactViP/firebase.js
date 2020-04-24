db.collection("profiles").add(userProfile);
// i added a profile with a new id

db.collection("profiles").doc(userProfile.uid).set(userProfile);
// here i set the user id as the document id
