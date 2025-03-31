import express from 'express';
import {Snapshot} from '../models/SnapshotModels.js';
const router = express.Router();

//creating route for new snapshot
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.snapshotName ||
            !request.body.startPoint ||
            !request.body.endPoint ||
            !request.body.links
        ) {return response.status(400).send({
            message: 'Send all required fields',
        });
    }

    const newSnapshot = {
        snapshotName: request.body.snapshotName,
        startPoint: request.body.startPoint,
        endPoint: request.body.endPoint,
        links: request.body.links
    }

    const snapshot = await Snapshot.create(newSnapshot);

    return response.status(201).send(snapshot);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get all snapshots
router.get('/', async (request, response) => {
    try {
        const snapshots = await Snapshot.find({});
        return response.status(200).json(snapshots);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get ONE customer snapshot by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const snapshot = await Snapshot.findById(id);

        return response.status(200).json(snapshot);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



//route to update a snapshot
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.snapshotName ||
            !request.body.startPoint ||
            !request.body.endPoint ||
            !request.body.links
        ) {
            return response.status(400).send({
                message: 'Hey send all required fields ()',
            });
        }

        const {id} = request.params;

        const result = await Snapshot.findByIdAndUpdate(id, request.body)

        if(!result) {
            return response.status(404).json({message: 'Snapshot not found'});
        }

        return response.status(200).send({message: 'Snapshot updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



//route to delete a Snapshot
router.delete('/:id', async (request, response) => {
    try{
       const {id} = request.params;
       const result = await Snapshot.findByIdAndDelete(id);

       if(!result) {
        return response.status(404).json({message: 'Snap not found'});
    }

    return response.status(200).send({message: 'Snap deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



export default router;