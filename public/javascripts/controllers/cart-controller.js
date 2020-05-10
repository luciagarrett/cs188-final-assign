const {
    getAllCarts,
    getCartByCartId,
    getCartsByCustomerId,
    addCart,
    modifyCart,
    removeCartByCartId
} = require('../services/cart-service');

const getCartsRoute = (app) => {
    app.get('/carts', (req, res, next) => {
        res.send(200, getAllCarts());
        return next();
    })
};

const getCartByCartIdRoute = (app) => {
    app.get('/carts/:cartId', (req, res, next) => {
        try {
            const cart = getCartByCartId(req.params.cartId);
            res.send(200, cart);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const getCartsByCustomerIdRoute = (app) => {
    app.get('/customers/:customerId/carts', (req, res, next) => {

        try {
            const carts = getCartsByCustomerId(req.params.customerId);
            res.send(200, carts);

        } catch(error) {
            res.send(404);
        }
        return next();

    })
};

const addCartsRoute = (app) => {
    app.post('/carts', (req, res, next) => {
        const cart = req.params;
        addCart(cart);
        res.send(201);
        return next();
    })
};

const modifyCartRoute = (app) => {
    app.put('/carts/:cartId', (req, res, next) => {
        modifyCart(req.params);
        res.send(200);
        return next();
    })
};

const deleteCartRoute = (app) => {
    app.delete('/carts/:cartId', (req, res, next) => {
        removeCartByCartId(req.params.cartId);
        res.send(204);
        return next();
    })
};

const initCartControllers = (app) => {
    getCartsRoute(app);
    getCartByCartIdRoute(app);
    getCartsByCustomerIdRoute(app);
    addCartsRoute(app);
    modifyCartRoute(app);
    deleteCartRoute(app);
};

module.exports = {initCartControllers};