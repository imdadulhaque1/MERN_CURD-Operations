import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) =>{
    res.send(users);
}

export const createUser = (req, res) =>{
    const user = req.body;

    users.push({...user, id:uuid() });
    res.send("User Added Successfully!");
};

export const getSingleUser = (req, res) =>{
    const singleUser = users.filter((user) => user.id === req.params.id);
    res.send(singleUser);
}

export const deleteSingleUser = (req, res) =>{
    users = users.filter((user) => user.id !== req.params.id);
    res.send(`User Successfully Deeleted!`)
}
export const updateSingleUser = (req, res) =>{
    const updateUser = users.find((user) => user.id === req.params.id);

    updateUser.name = req.body.name;
    updateUser.email = req.body.email;
    updateUser.phone = req.body.phone;
    updateUser.uni_name = req.body.uni_name;

    res.send(`User Successfully Updated!`)
}
