 export default class HomeController {

    getHome(req, res) {
        let dropdownContent;
        if (req.session.userName) {
            dropdownContent = req.session.userName;
        } else {
            dropdownContent = "Recruiter";
        }
        res.render('Home', { dropdownContent });
    }
 }