// cards.controller.js
import CardsModel, { jobs } from "../Models/cards.model.js";

export default class CardController {
    getCards(req, res, next) {
        const cardsModel = new CardsModel();
        const jobs = cardsModel.fetchCards();
        res.render("cards", { jobs: jobs });
    }

    viewMore(req, res, next){
        const jobId = req.params.id; // Extract jobId from request parameters
        const cardsModel = new CardsModel();
        const job = cardsModel.getJobById(jobId); // Fetch specific job using jobId
        res.render("viewMore", { job: job }); // Passing job data to the viewMore view
    }
}


