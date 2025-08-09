
  export default function CallWaiting() {
    return (
      <div>
        <h4 className="text-xl text-gray-500 font-bold">Call Waiting Details</h4>
        <table className="m-auto">
            <tr className="border-b-1 border-b-gray-500">
                <th className="text-md text-gray-500 font-bold bordre  w-[90%] text-left pb-4 pt-4">Reason</th>
                <th className="text-md text-gray-500 font-bold bordre  w-[10%] text-left">Count</th>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500 bordre  w-[90%] text-left py-1">INVOICE PENDING</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">2</p></td>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500  bordre  w-[90%] text-left py-1">TECHNICAL SUPPORT PENDING FROM OEM</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">2</p></td>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500  bordre  w-[90%] text-left py-1">NEED TO SEND QUOTE</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">1</p></td>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500  bordre  w-[90%] text-left py-1">CUSTOMER NOT RESPONDING</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">1</p></td>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500  bordre  w-[90%] text-left py-1">SITE VISIT SCHEDULED</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">0</p></td>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500  bordre  w-[90%] text-left py-1">PARTS/MATERIAL AWAITED</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">0</p></td>
            </tr>
            <tr className="border-b-1 border-b-gray-500">
                <td className="text-sm text-cyan-500  bordre  w-[90%] text-left py-1">CLIENT NOT AVAILABLE FOR DISCUSSION</td>
                <td className="text-md text-white bordre  w-[90%] text-left"><p className="text-sm text-white bg-black m-2 px-4 py-2 shadow rounded-sm">0</p></td>
            </tr>
        </table>
      </div>
    );
  }
  