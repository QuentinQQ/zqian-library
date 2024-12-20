/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {
  onRequest,
} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({
  origin: true,
});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;

      res.status(200).send({
        count,
      });
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});


exports.capitalizeName = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
      }

      const {
        name,
      } = req.body;

      if (!name) {
        res.status(400).send("Missing request body");
        return;
      }

      const capitalizedName = name.toUpperCase();

      res.status(200).send({
        name: capitalizedName,
      });
    } catch (error) {
      console.error("Error capitalizing name:", error.message);
      res.status(500).send("Error capitalizing name");
    }
  });
});

exports.getAllBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();

      const books = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      res.status(200).send({
        books,
      });
    } catch (error) {
      console.error("Error retrieving all books:", error.message);
      res.status(500).send("Error retrieving all books");
    }
  });
});


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
