import Layout from "../../components/Layout";
import Admin from "../../components/Auth/Admin";
import Link from "next/link";

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <h2>Admin Dashboard</h2>
                <div className="row">
                    <div className="col-md-6 border">
                        <ul className="list-group">
                            <Link href="/admin/crud/category-tag"><a>Create Category</a></Link>
                        </ul>
                        <ul className="list-group">
                            <Link href="/admin/crud/category-tag"><a>Create Tag</a></Link>
                        </ul>
                        <ul className="list-group">
                            <Link href="/admin/crud/blog"><a>Create Blog</a></Link>
                        </ul>
                    </div>
                    <div className="col-md-6 border">
                        right
                    </div>
                </div>
            </Admin>
        </Layout>
    )
}

export default AdminIndex;