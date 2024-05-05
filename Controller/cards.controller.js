// cards.controller.js
import CardsModel, { jobs } from "../Models/cards.model.js";

export default class CardController {
    getCards(req, res, next) {
        const cardsModel = new CardsModel();
        const jobs = cardsModel.fetchCards();
        let dropdownContent = req.session.userName || "Recruiter";
        res.render("cards", { jobs: jobs, dropdownContent: dropdownContent });
    }

    viewMore(req, res, next){
        const jobId = req.params.id; // Extract jobId from request parameters
        const cardsModel = new CardsModel();
        const job = cardsModel.getJobById(jobId); // Fetch specific job using jobId
        let dropdownContent = req.session.userName || "Recruiter";
        res.render("viewMore", { job: job, dropdownContent: dropdownContent });
    }
}


