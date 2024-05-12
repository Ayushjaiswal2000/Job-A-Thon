// cards.controller.js
import CardsModel, { jobs } from "../Models/cards.model.js";
import fs from "fs";
import { upload } from "../index.js";

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
        res.render("viewMore", { job: job, dropdownContent: dropdownContent , req: req});
    }

    applyjob(req, res, next){
        let dropdownContent = "Recruiter";
        res.render("apply",{  dropdownContent: dropdownContent });
    }


    savejob(req, res, next) {
        const jobId = req.params.jobId;
        const appliedJobs = req.session.appliedJobs || [];
    
        if (appliedJobs.includes(jobId)) {
            return res.status(400).send("You have already applied for this job.");
        }
    
        upload.single('resume')(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
    
            // File uploaded successfully, continue with saving application data
            const formData = {
                jobId: jobId,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                resume: req.file ? req.file.filename : null,
                cover_letter: req.body.cover_letter,
                portfolio: req.body.portfolio
            };
    
            const cardsModel = new CardsModel();
            cardsModel.saveApplicationData(formData);
            req.session.appliedJobs = [...appliedJobs, jobId];
    
            res.send("Application submitted successfully!");
        });
    }
    

}
