import express from 'express';
import {Edit} from '../models/EditModels.js';
const router = express.Router();

//creating route for new edit
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.storyId ||
            !request.body.text ||
            !request.body.accountId
        ) {return response.status(400).send({
            message: 'Send all required fields',
        });
    }

    const newEdit = {
        storyId: request.body.storyId,
        text: request.body.text,
        accountId: request.body.accountId
    }

    const edit = await Edit.create(newEdit);

    return response.status(201).send(edit);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get all edits
router.get('/', async (request, response) => {
    try {
        const edits = await Edit.find({});
        return response.status(200).json(edits);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get ONE edit by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const edit = await Edit.findById(id);

        return response.status(200).json(edit);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});




//route to update an edit
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.storyId ||
            !request.body.text ||
            !request.body.accountId
        ) {
            return response.status(400).send({
                message: 'Hey send all required fields ()',
            });
        }

        const {id} = request.params;

        const result = await Edit.findByIdAndUpdate(id, request.body)

        if(!result) {
            return response.status(404).json({message: 'Edit not found'});
        }

        return response.status(200).send({message: 'Edit updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


//route to delete an edit
router.delete('/:id', async (request, response) => {
    try{
       const {id} = request.params;
       const result = await Edit.findByIdAndDelete(id);

       if(!result) {
        return response.status(404).json({message: 'Edit not found'});
    }

    return response.status(200).send({message: 'Edit deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


export default router;