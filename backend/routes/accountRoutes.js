import express from 'express';
import {Account} from '../models/AccountModels.js';
const router = express.Router();

//creating route for new account
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.accountName ||
            !request.body.password ||
            !request.body.stories ||
            !request.body.follows
        ) {return response.status(400).send({
            message: 'Send all required fields',
        });
    }

    const newAccount = {
        accountName: request.body.accountName,
        password: request.body.password,
        stories: request.body.stories,
        follows: request.body.follows
    }

    const account = await Account.create(newAccount);

    return response.status(201).send(account);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get all accounts
router.get('/', async (request, response) => {
    try {
        const accounts = await Account.find({});
        return response.status(200).json(accounts);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get ONE customer account by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const account = await Account.findById(id);

        return response.status(200).json(account);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



//route to update a customer
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.accountName ||
            !request.body.password ||
            !request.body.stories ||
            !request.body.follows
        ) {
            return response.status(400).send({
                message: 'Hey send all required fields ()',
            });
        }

        const {id} = request.params;

        const result = await Account.findByIdAndUpdate(id, request.body)

        if(!result) {
            return response.status(404).json({message: 'Account not found'});
        }

        return response.status(200).send({message: 'Account updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



//route to delete a Customer
router.delete('/:id', async (request, response) => {
    try{
       const {id} = request.params;
       const result = await Account.findByIdAndDelete(id);

       if(!result) {
        return response.status(404).json({message: 'Customer not found'});
    }

    return response.status(200).send({message: 'Customer deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});




export default router;