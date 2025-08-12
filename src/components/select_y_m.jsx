export default function Year_Month() {
    return (
        <div class="w-full rounded overflow-hidden shadow-lg bg-white my-7">
            <div className="flex flex-col md:flex-row md:flex-wrap">
                <div className="m-4">
                    <label class="block text-md  py-4 font-medium text-gray-700">Select Year</label>
                    <select class="block w-full md:w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40%]">
                        <option value="2025" selected>2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                    </select>
                </div>
                <div className="m-4">
                    <label class="block text-md  py-4 font-medium text-gray-700">Select Month</label>
                    <select class="block w-full  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-[40%]">
                        <option value="2025">January</option>
                        <option value="2024">February</option>
                        <option value="2023">March</option>
                        <option value="2022">April</option>
                        <option value="2021">May</option>
                        <option value="2020">June</option>
                        <option value="2020" selected>July</option>
                        <option value="2020">August</option>
                        <option value="2020">September</option>
                        <option value="2020">October</option>
                        <option value="2020">November</option>
                        <option value="2020">December</option>
                    </select>
                </div>
            </div>
            <div className="flex">
                <button className="p-2 m-2 text-sm text-black rounded-sm bg-gray-300 w-[20%] md:w-[7%] lg:w-[10%]">Clear
                </button>
                <button className="p-2 m-2 text-sm text-white rounded-sm bg-blue-500 w-[20%] md:w-[7%] lg:w-[10%]">Search
                </button>
            </div>
        </div>
    );
}