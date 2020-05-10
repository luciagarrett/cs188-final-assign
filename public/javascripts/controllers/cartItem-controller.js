const {
    getAllCartItems,
    getCartItemByCartItemId,
    addCartItem,
    modifyCartItem,
    removeCartItemByCartItemId,
    getCartItemsByCartId
} = require('../services/cartItem-service');

const {getCartByCartId} = require('../services/cart-service');

const getCartItemsRoute = (app) => {
    app.get('/cart-items', (req, res, next) => {
        res.send(200, getAllCartItems());
        return next();
    })
};

const getCartItemByCartItemIdRoute = (app) => {
    app.get('/cart-items/:cartItemId', (req, res, next) => {
        try {
            const cartItem = getCartItemByCartItemId(req.params.cartItemId);
            res.send(200, cartItem);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const getCartItemsByCartIdRoute = (app) => {
    app.get('/carts/:cartId/cart-items', (req, res, next) => {
        try {
            const cartItems = getCartItemsByCartId(req.params.cartId);
            res.send(200, cartItems);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addCartItemsRoute = (app) => {
    app.post('/cart-items', (req, res, next) => {
        const cartItem = req.params;
        addCartItem(cartItem);
        res.send(201);
        return next();
    })
};

const modifyCartItemRoute = (app) => {
    app.put('/cart-items/:cartItemId', (req, res, next) => {
        modifyCartItem(req.params);
        res.send(200);
        return next();
    })
};

const deleteCartItemRoute = (app) => {
    app.delete('/cart-items/:cartItemId', (req, res, next) => {
        removeCartItemByCartItemId(req.params.cartItemId);
        res.send(204);
        return next();
    })
};


const initCartItemControllers = (server) => {
    getCartItemsRoute(server);
    getCartItemByCartItemIdRoute(server);
    addCartItemsRoute(server);
    modifyCartItemRoute(server);
    deleteCartItemRoute(server);
    getCartItemsByCartIdRoute(server);
};

module.exports = {
    initCartItemControllers
};