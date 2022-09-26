import AdminSidebar from './../components/asidebar-admin'
import AppHeader from './../components/app-header'


function AdminDashboard() {
	return (
		<>
			<div className="w-full h-full bg-gray-100">
				<AppHeader />
				<div className="flex">
					<AdminSidebar />
				</div>
			</div>
		</>
	)
}

export default AdminDashboard
