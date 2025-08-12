export default function Year_Month() {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white my-7 p-4">
            <div className="grid grid-rows-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-md py-2 font-medium text-gray-700">Select Year</label>
                    <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="2025" selected>2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
                <div>
                    <label className="block text-md py-2 font-medium text-gray-700">Select Month</label>
                    <select className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option selected>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                <button className="flex-1 sm:flex-none md:flex-none p-2 text-sm text-black rounded-sm bg-gray-300 md:w-[7%] lg:w-[10%]">
                    Clear
                </button>
                <button className="flex-1 sm:flex-none md:flex-none p-2 text-sm text-white rounded-sm bg-blue-500 md:w-[7%] lg:w-[10%]">
                    Search
                </button>
            </div>
        </div>

    );
}