const userModel = require('../model/noteboolmodel');

//get topics
const getTopics = async (req, res) => {
    try {
        const newData = await userModel.aggregate([
            {
                $group: {
                    _id: "$topic",
                    data: { $push: "$data" }
                }
            },
            {
                $project: {
                    _id: 0,
                    topic: "$_id",
                    data: 1
                }
            }
        ])
        return res.status(200).json(newData)
    } catch (error) {
        console.log(error);
    }
    // try {
    //     const users = await userModel.find({});
    //     return res.status(200).json(users)
    // } catch (error) {
    //     console.log(error);
    // }
}


//create topics
const createTopic = async (req, res) => {
    const { topic, data } = req.body
    try {
        const users = new userModel({ topic, data });
        users.save()
        return res.status(200).json(users);

    } catch (error) {
        return res.status(422).json(error);

    }

}

module.exports = { getTopics, createTopic }