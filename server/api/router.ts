import express from "express";

const router = express.Router();

router.get("/api", (req, res) => {
  res.send("Bienvenue sur l'API !");
});

import livreActions from "./actions/livreActions";
router.get("/:user_id/livres", livreActions.browse); //ok
router.get(
  "/:user_id/livres_with_exemplaires",
  livreActions.browseWithExemplaires,
); //ok
router.get("/:user_id/livres/:ISBN13", livreActions.read);
router.post("/:user_id/livres", livreActions.add); //ok
router.put("/:user_id/livres/:ISBN13", livreActions.edit); //ok
router.delete("/:user_id/livres/:ISBN13", livreActions.destroy);
router.get("/:user_id/livres/search", livreActions.search);
router.get("/:user_id/top_books", livreActions.getTopBooks); //ok

import eleveActions from "./actions/eleveActions";
router.get("/:user_id/eleves", eleveActions.browse); //ok
router.get("/:user_id/eleves/:id_eleve", eleveActions.read);
router.get(
  "/:user_id/eleves_with_borrows",
  eleveActions.browseStudentsWithBorrowsInProgress,
); //ok ???????????????????
router.get(
  "/:user_id/eleves_with_borrows_information",
  eleveActions.browseStudentsWithBorrowsInformation,
); //ok
router.post("/:user_id/eleves", eleveActions.add); //ok
router.put("/:user_id/eleves/:id_eleve", eleveActions.edit); //ok
router.delete("/:user_id/eleves/:id_eleve", eleveActions.destroy);
router.get("/:user_id/eleves/search", eleveActions.search);

import exemplaireActions from "./actions/exemplaireActions";
router.get("/:user_id/exemplaires", exemplaireActions.browse); //ok
router.get("/:user_id/exemplaires/:id_exemplaire", exemplaireActions.read); //ok
router.post("/:user_id/exemplaires", exemplaireActions.add); //ok
router.put("/:user_id/exemplaires/:id_exemplaire", exemplaireActions.edit);
router.delete(
  "/:user_id/exemplaires/:id_exemplaire",
  exemplaireActions.destroy,
);
router.get(
  "/:user_id/exemplaires_available",
  exemplaireActions.readAvailableExemplaire,
); //ok
router.get(
  "/:user_id/exemplaires_borrowed/:ISBN13",
  exemplaireActions.readBorrowedExemplaireByISBN13,
); //ok

import empruntActions from "./actions/empruntActions";
router.get("/:user_id/emprunts", empruntActions.browse);
router.get("/:user_id/emprunts/:id_emprunt", empruntActions.read);
router.post("/:user_id/emprunts", empruntActions.addBookBorrow); //ok
router.put("/:user_id/emprunts/:id_emprunt", empruntActions.edit);
router.delete("/:user_id/emprunts/:id_emprunt", empruntActions.destroy);
router.get(
  "/:user_id/students-with-loans-in-progress",
  empruntActions.countStudentsWithLoansInProgress,
); //ok
router.get(
  "/:user_id/students-with-loans-due-in-7-days",
  empruntActions.countStudentsWithLoansDueSoon,
); //ok
router.get(
  "/:user_id/students-with-overdue-loans",
  empruntActions.countStudentsWithOverdueLoans,
); //ok
router.get("/:user_id/emprunts_in-progress", empruntActions.LoansInProgress); //ok
router.get(
  "/:user_id/emprunts_by_student/:id_eleve",
  empruntActions.LoansByStudent,
); //ok

import retour from "./actions/retourActions";
router.post("/:user_id/retours", retour.returnBook); //ok

import parametreActions from "./actions/parametreActions";
router.get(
  "/:user_id/parametres/loanDuration",
  parametreActions.readLoanDuration,
);
router.put(
  "/:user_id/parametres/loanDuration",
  parametreActions.editLoanDuration,
); //ok
router.get(
  "/:user_id/parametres/borrowLimit",
  parametreActions.readBorrowLimit,
);
router.put(
  "/:user_id/parametres/borrowLimit",
  parametreActions.editBorrowLimit,
); //ok

import authActions from "./actions/authActions";
router.post("/auth/login", authActions.login); //ok
router.post("/auth/register", authActions.register); //ok
router.get("/", (req, res) => {
  res.send("Bienvenue sur l'API !");
});

// router.post("/auth/logout", authActions.logout);
// router.get("/auth/user", authActions.getUser);

/* ************************************************************************* */

export default router;
