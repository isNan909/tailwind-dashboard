export default function TabBar() {
	return (
		<>
			<div className="shadow rounded border h-10 flex p-1 relative items-center bg-gray-100 mb-7">
				<div className="flex font-medium text-sm justify-center bg-white shadow text-gray-600 items-center w-1/2 rounded h-8 transition-all top-[4px]">
					<button>All</button>
				</div>
				<div className="w-full flex text-sm text-gray-500 justify-center">
					<button>Images</button>
				</div>
				<div className="w-full flex text-sm text-gray-500 justify-center">
					<button>Documents</button>
				</div>
				<div className="w-full flex text-sm text-gray-500 justify-center">
					<button>Code</button>
				</div>
			</div>
		</>
	)
}


