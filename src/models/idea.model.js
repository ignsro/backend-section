const mongoose = require("mongoose")
const { Schema } =  mongoose

const IdeaSchema = new Schema({
    idea: {type: String, require: true},
    description: {type: String},
    upvotes: [{types: Boolean}],
    downvotes: [{types: Boolean}],
    author: {type: Schema.Types.ObjectId, ref: "user", require: true, autopopulate: true},
    comments: [{type: Schema.Types.ObjectId, ref: "comment", require: true, autopopulate: true}]
})

IdeaSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model("idea", IdeaSchema)