export default function Calls() {
    return (
        <div className="bg-white p-6 rounded  shadow-lg m-2">
            <div className="relative">
                <h4 className="text-xl font-bold text-gray-500 mb-2">Pending Preventative Maintenance Calls</h4>
                <input type="text" placeholder="Search" className="block w-[250px]  border-1 border-gray-400 absolute right-10 top-10 m-2" />
            </div>
            <div className="overflow-x-auto">
                <table className="border-1 border-gray-400 mt-10 table-fixed">
                    <tr>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[100px]">Created Date</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[100px]">Call Number</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[120px]">Call Type</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[80px]">Priority</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[80px]">Status</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[300px]">Site Name</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[90px]">Route</th>
                        <th className="border-1 p-2 border-gray-400 mt-10 text-md text-gray-500 w-[150px]">Site System</th>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">22/07/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00062</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">MAS</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">CONVENTIONAL FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">17/07/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00060</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">MAS SOLUTION</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADDRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">16/07/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00059</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">MAS</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">CONVENTIONAL FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">01/07/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00046</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADDRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">16/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00042</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADDRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">26/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00044</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">MAS SOLUTION</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADDRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">16/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00041</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">KFSL</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">FIRE EXTINGUISHER</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">09/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00030</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">90</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">NOKIA SOLITIONS AND NETWORKS INDIA PRIVATE LIMITED-ZODIAC SQUARE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">FIRE EXTINGUISHER</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">07/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00027</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">CROMA</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">PRAHLADNAGR</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">CONVENTIONAL FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">05/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00024</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">NOKIA SOLUTION AND NETWORKS INDIA PRIVATE LIMITED-ZODIAC SQUARE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">CONVENTIONAL FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">05/06/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00023</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00014</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00013</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00012</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00011</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">ADANI WILMAR FORTUNE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]"></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00008</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-blue-400 text-white px-1 py-1 shadow rounded-sm text-center">Assigned</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">CROMA</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">PRAHALADNAGAR</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00007</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">CROMA</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">PRAHALADNAGAR</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00006</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">CROMA</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">PRAHALADNAGAR</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                    <tr>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">06/02/2025</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">00004</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[120px]">PREVENTIVE MAINTNANCE</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]">0</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[80px]"><p className="bg-green-400 text-white px-1 py-1 shadow rounded-sm text-center">New</p></td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-250px]">CROMA</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[100px]">PRAHALADNAGAR</td>
                        <td className="border-1 p-2 border-gray-400 mt-10 text-sm text-gray-500 w-[150px]">ADRESSABLE FIRE ALARM SYSTEM</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}