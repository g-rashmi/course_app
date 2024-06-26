const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

const app = express();
const cors = require("cors");
app.use(cors());
const port =  4000;
require('dotenv').config();

const admin = require('firebase-admin');
// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.GOOGLE_PROJECT_ID,
    privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  }),
});

const db = admin.firestore();

app.use(bodyParser.json());

app.get("/courses", async (req, res) => {
  try {
    const snapshot = await db.collection("courses").get();
    const courses = snapshot.docs.map((doc) => ({
      _Id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
});

app.get("/courses/:id", async (req, res) => {
  try { 
     const docRef = db.collection("courses").doc(req.params.id);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ id: docSnapshot.id, ...docSnapshot.data() });
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
