import { firestore } from "../firebase";

export const homeController = async (req, res) => {
  let datalist = [];

  try {
    await firestore
      .collection("list")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          datalist.push({
            id: doc.id,
            list: doc.data().list,
            title: doc.data().title
          });
        });
      });
  } catch (error) {
    console.log(error);
  }
  console.log(datalist);
  res.render("home", { datalist });
};

export const writeController = (req, res) => {
  res.render("write");
};

export const writeControllerPost = async (req, res) => {
  const {
    body: { list, title }
  } = req;

  try {
    await firestore.collection("list").add({
      list: list,
      title: title
    });
  } catch (error) {
    console.log(error);
  }
  homeController(req, res);
};

export const deleteControllerPost = async (req, res) => {
  const {
    body: { id }
  } = req;

  try {
    await firestore
      .collection("list")
      .doc(id)
      .delete();
  } catch (error) {
    console.log(error);
  }

  homeController(req, res);
};
