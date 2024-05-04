// cards.controller.js
import CardsModel from "../Models/cards.model.js";

export default class CardController {
    getCards(req, res, next) {
        const cardsModel = new CardsModel();
        const jobs = cardsModel.fetchCards();
        res.render("cards", { jobs: jobs });
    }
}
