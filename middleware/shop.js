const shopSchema = require("../models/shopSchema");
exports.Formf = async (req, res, next) => {

    try {
        console.log(req.body);
        const Seller=req.body.Seller;
        const Name=req.body.Name;
	    const Address=req.body.Address;
	    const Phone=req.body.Phone;
        const Image=req.body.Image;
	    const Menu=req.body.Menu;
        const newForm= new shopSchema({
            Name: Name,
            Address: Address,
            Phone: Phone,
            Image: Image,
            Menu:  Menu,
            Seller: Seller,
        });   
	    console.log(newForm);
	    newForm.save();
        next();
    } 
    catch (error) {
        console.log(error);
    }
}
exports.Findf = async (req, res, next) => {
    try{
        const orders = await shopSchema.findOne(  
            {
                "Seller": req.query.Seller                  
            },
            {
                
            }
    );
    console.log(orders);
    res.status(200).json({     
        orders
    });

    //Blog.find({}).then(foundNotes =>res.json(foundNotes));
    next();
    }
    catch (error) {
        console.log(error);
    }
}
exports.Find=async(req,res,next)=>{
    try{
        const orders = await shopSchema.find();
    console.log(orders);
    res.status(200).json({     
        orders
    });

    //Blog.find({}).then(foundNotes =>res.json(foundNotes));
    next();
    }
    catch (error) {
        console.log(error);
    }
}