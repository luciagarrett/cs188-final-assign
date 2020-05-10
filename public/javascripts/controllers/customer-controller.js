const {
    getAllCustomers,
    getCustomerByCustomerId
} = require('../services/customer-service');

const getCustomersRoute = (app) => {
    app.get('/customers', (req, res, next) => {
        res.send(200, getAllCustomers());
        return next();
    })
};

const getCustomerByCustomerIdRoute = (app) => {
    app.get('/customers/:customerId', (req, res, next) => {
        try {
            const customer = getCustomerByCustomerId(req.params.customerId);
            res.send(200, customer);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const initCustomerControllers = (app) => {
    getCustomersRoute(app);
    getCustomerByCustomerIdRoute(app);
};

module.exports = {
    initCustomerControllers
};