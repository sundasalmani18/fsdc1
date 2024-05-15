// import {db} from '../dbConn';



export const getCategories = (req, res) => {
    return res.status(200).json({msg: 'getCategories'})
}


export const getCategory = (req, res) => {
    return res.status(200).json({msg: 'getCatagory'})
}

export const addCategory = (req, res) => {
    return res.status(200).json({msg: 'addCategory'})
}


export const updateCategory = (req, res) => {
    return res.status(200).json({msg: 'updateCategory'})
}


export const deleteCategory = (req, res) => {
    return res.status(200).json({msg: 'deleteCategory'})
}