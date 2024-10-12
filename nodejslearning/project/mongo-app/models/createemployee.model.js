

// models/employee.model.js
export default (mongoose) => {
  const EmployeeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  
  });

  return mongoose.model('Employee', EmployeeSchema);
};






// module.exports = mongoose => {
//     const Employee = mongoose.model("employee", mongoose.Schema({
//         name: String,
//         salary: String,
//         email: String
//     }));
//     return Employee
// }


  //  export const getEmployees= async(req, res) => {
  //       const employee = await employee.find();
  // res.send(employee);
       
  //     };
  //     export const getEmployee= async(req, res) => {
  //       const employee = await employee.findById(req.params.id);
  // if (!employee) return res.status(404).send('Item not found');
  // res.send(employee);
       
  //     };


  //     export const addEmployee= async(req, res) => {
  //       const item = new employee(req.body);
  //       await item.save();
  //       res.status(201).send(item);
       
  //     };

  //     export const updateEmployee= async(req, res) => {
  //       const item = await employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  //       if (!item) return res.status(404).send('Item not found');
  //       res.send(item);
       
  //     };

  //     export const deleteEmployee= async(req, res) => {
  //       const item = await employee.findByIdAndDelete(req.params.id);
  //       if (!item) return res.status(404).send('Item not found');
  //       res.send('Item deleted');
       
  //     };





        
//    const employee = new Employee({ name: 'ahmed', salary: '2500', email: 'ahmed45@gmail.com' });

//         employee.save()
//     .then(() => console.log('employee saved!'))
//     .catch(err => console.error(err))
//     .finally(() => mongoose.connection.close());

