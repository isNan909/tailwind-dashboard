import TabBar from './tab-bar';
import Filelist from './file-list';
import Pagination from './app-pagination';

export default function Maincontent() {
	return (
		<>
			<main className="container">
				<div className="p-6">
					<div className="grid grid-cols-2 2xl:grid-cols-2 xl:gap-4">
						<div>
							<div class="flex justify-between justify-items-center items-center">
								<h1 class="text-2xl sm:text-3xl leading-none font-bold text-gray-900 pb-6">File uploads</h1>
								<p className="font-medium text-gray-500 pb-6 flex items-center">
									Sort
									<svg className="ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M7.48578 9.67354L7.48589 9.67343L11.8581 5.30119C11.924 5.23892 11.9769 5.16422 12.0138 5.08139C12.0514 4.99705 12.0716 4.90601 12.0733 4.8137C12.0749 4.72139 12.0579 4.6297 12.0233 4.54409C11.9887 4.45849 11.9373 4.38072 11.872 4.31544L11.872 4.31544C11.8067 4.25015 11.729 4.19869 11.6433 4.16411C11.5577 4.12953 11.466 4.11255 11.3737 4.11418C11.2814 4.11581 11.1904 4.13601 11.1061 4.17359C11.0232 4.2105 10.9485 4.26343 10.8862 4.3293L6.99995 8.2156L3.11089 4.32654L3.111 4.32643L3.10455 4.32042C2.97422 4.19898 2.80185 4.13287 2.62374 4.13601C2.44563 4.13915 2.27569 4.2113 2.14973 4.33726C2.02377 4.46323 1.95161 4.63316 1.94847 4.81127C1.94533 4.98938 2.01144 5.16176 2.13288 5.29208L2.13277 5.29219L2.13901 5.29843L6.51401 9.67343L6.51412 9.67354C6.64302 9.80229 6.81776 9.8746 6.99995 9.8746C7.18214 9.8746 7.35688 9.80229 7.48578 9.67354Z" fill="black" stroke="#97A2B6" stroke-width="0.5" />
									</svg>
								</p>
							</div>
							<div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6">
								<TabBar />
								<Filelist />
								<Pagination />
							</div>
						</div>
						<div></div>
					</div>
				</div>
			</main>
		</>
	)
}