const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            min: 3,
            max: 160,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        body: {
            type: {},
            required: true,
            min: 200,
            max: 2000000                    //2mb max size of blog
        },
        excerpt: {                          //starting lines of blog
            type: String,
            max: 1000
        },
        mtitle: {                           //meta title and below one is meta description (imp for seo)
            type: String
        },
        mdesc: {
            type: String
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        categories: [{ type: ObjectId, ref: 'Category', required: true }],
        tags: [{ type: ObjectId, ref: 'Tag', required: true }],
        postedBy: {
            type: ObjectId,
            ref: 'User'
        }
    },
    { timestamps: true }                                //to get date created
);

module.exports = mongoose.model('Blog', blogSchema);