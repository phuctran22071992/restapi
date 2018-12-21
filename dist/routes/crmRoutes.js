"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        });
        // Contact
        app
            .route("/contact")
            .get((req, res) => {
            // Get all contacts
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        })
            .post((req, res) => {
            // Create new contact
            res.status(200).send({
                message: "POST request successfulll!!!!"
            });
        });
        // Contact detail
        app
            .route("/contact/:contactId")
            .get((req, res) => {
            // Get a single contact detail
            res.status(200).send({
                message: "GET request successfulll!!!!"
            });
        })
            .put((req, res) => {
            // Update a contact
            res.status(200).send({
                message: "PUT request successfulll!!!!"
            });
        })
            .delete((req, res) => {
            // Delete a contact
            res.status(200).send({
                message: "DELETE request successfulll!!!!"
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map