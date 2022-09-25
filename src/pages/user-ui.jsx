import UserSidebar from './../components/asidebar-user'
import AppHeader from './../components/app-header'
import Maincontent from './../components/content-userapp'

export default function UserDashboard() {
	return (
		<>
			<div className="w-full h-full bg-gray-100">
				<AppHeader />
				<div className="flex">
					<UserSidebar />
					<Maincontent/>
				</div>
			</div>
		</>
	)
}
