const codes = require('../../helpers/codes');
const message = require('../../helpers/messages');
const request = require('request');

class businesses {
    // Verify NZBN number
    async verifyNzbn(req, res) {
        console.log(req.body, "enetr")
        try {
            var messages = message.messages(req.header('language'));
            var req_data = req.body;
            if (!req_data.NZBNumber) {
                return res.json({ code: codes.badRequest, message: messages.BadRequest });
            }
            
            var access_key = 'Your project nzbn number access key';
            var options = {
                uri: 'https://sandbox.api.business.govt.nz/services/v4/nzbn/entities/' + req_data.NZBNumber,
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': access_key
                },
            };
            request(options, function (error, response, body) {
                console.log(body,"body")
                if (body) {
                    var data = JSON.parse(body);
                    if (data.entityStatusCode == '50') {
                        var verify = true;
                        var company = data.entityTypeDescription;
                        var email = '';
                    } else {
                        var verify = false;
                        var company = '';
                        var email = '';
                    }
                    return res.json({ code: codes.success, message: messages.success, result: { 'verify': verify, 'company': company, 'email': email, 'type': 'NZBN', 'number': req_data.NZBNumber } });
                } else {
                    return res.json({ code: codes.success, message: messages.success, result: { 'verify': false, 'company': "", 'email': "", 'type': 'NZBN', 'number': req_data.NZBNumber } });
                }
            });            
        } catch (error) {
            console.log(error);
            return res.json({ code: codes.serverError, message: messages.serverError });
        }
    }
}
module.exports = businesses;