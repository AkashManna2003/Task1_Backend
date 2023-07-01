const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    Seller:{
        type:String,
    },
    Name:{
        type:String,
    },
    Address:{
        type:String,
    },
    Phone:{
        type:Number,
    },
    Menu:{
            type:String,
        },
    Image:{
        type:String,
    },
    Review:[
        {
            username:{
                type:String,
            },
            rating:{
                type:Number,
            },
            review:{
                type:String,
            }   
        }
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);