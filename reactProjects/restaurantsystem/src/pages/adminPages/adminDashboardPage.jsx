import AdminNavbar from "../../admin/components/adminNavbar";
import  AdminCategory from "../../admin/components/admincategory";
import AdminDashboard from "../../admin/components/adminDashboard";
import AdminItems from "../../admin/components/adminitems";
import AddCategories from "../../admin/components/adminaddcategories";
import AddItems from "../../admin/components/adminadditems";

export default function AdminDashboardPage() {
    return (
        <>
            <AdminNavbar />
            <AdminDashboard />
            <AdminCategory/> 
             <AdminItems/>
             <AddCategories/>
             <AddItems/>
            

        </>
    )
}