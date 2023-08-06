const asyncHandler = require("express-async-handler");
const Contact = require("../model/Contact");
//@desc get all contacts
//@route GET api/contacts
//@acess public

const getContacts =asyncHandler(async(req,res)=>{
    // res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
const data = await Contact.find();
    res.status(200).json(data)
})

//@desc get  contact
//@route GET api/contacts/:id
//@acess public
const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error(`no contact found for ${req.params.id}`);
    }
    res.status(200).json(contact);
})

const createContact =asyncHandler(async(req,res)=>{
   const result = await Contact.create({
        ...req.body
    })
   res.status(200).json(result)
})
const updateContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
   if(!contact){
    res.status(400);
    throw new Error('No contact found with that id');
   }

    const updateContact = await Contact.findByIdAndUpdate(req.params.id,
        req.body,
        {new:true}
        )
        
    res.status(201).json(updateContact);
})
const deleteContact =asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id)
    if (!contact ){
        res.status(400);
        throw new Error ('no contact found')
    }
    await Contact.deleteOne()
    res.status(200).json(contact);
})



module.exports = {getContacts,getContact,createContact,updateContact,deleteContact};