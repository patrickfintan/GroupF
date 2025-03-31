import express from 'express';
import {Story} from '../models/StoryModels.js';
const router = express.Router();

//creating route for new story
router.post('/', async(request, response) => {
    try {
        if (
            !request.body.storyName ||
            !request.body.genre ||
            !request.body.tags ||
            !request.body.storyText ||
            !request.body.snapshots ||
            !request.body.canEdit ||
            !request.body.views ||
            !request.body.edits ||
            !request.body.rating ||
            !request.body.public
        ) {return response.status(400).send({
            message: 'Send all required fields',
        });
    }

    const newStory = {
        storyName: request.body.storyName,
        genre: request.body.genre,
        tags: request.body.tags,
        storyText: request.body.storyText,
        snapshots: request.body.snapshots,
        canEdit: request.body.canEdit,
        views: request.body.views,
        edits: request.body.edits,
        rating: request.body.rating,
        public: request.body.public,
        thumbnail: request.body.thumbnail
    }

    const story = await Story.create(newStory);

    return response.status(201).send(story);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get all stories
router.get('/', async (request, response) => {
    try {
        const stories = await Story.find({});
        return response.status(200).json(stories);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});


// route to get ONE story by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const story = await Story.findById(id);

        return response.status(200).json(story);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



//route to update a story
router.put('/:id', async (request, response) => {
    try{
        if (
            !request.body.storyName ||
            !request.body.genre ||
            !request.body.tags ||
            !request.body.storyText ||
            !request.body.snapshots ||
            !request.body.canEdit ||
            !request.body.views ||
            !request.body.edits ||
            !request.body.rating ||
            !request.body.public
        ) {
            return response.status(400).send({
                message: 'Hey send all required fields ()',
            });
        }

        const {id} = request.params;

        const result = await Story.findByIdAndUpdate(id, request.body)

        if(!result) {
            return response.status(404).json({message: 'Story not found'});
        }

        return response.status(200).send({message: 'Story updated successfully'});

    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



//route to delete a Story
router.delete('/:id', async (request, response) => {
    try{
       const {id} = request.params;
       const result = await Story.findByIdAndDelete(id);

       if(!result) {
        return response.status(404).json({message: 'Story not found'});
    }

    return response.status(200).send({message: 'Story deleted successfully'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});



export default router;