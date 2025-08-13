import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHelmetSafety, faMedal, faIndianRupee, faLock, faWrench, faChalkboard, faUserGear, faUserXmark, faComments, faHourglass, faCheck, faXmark, faCube, faPager, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Cards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
      <div className="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faBook}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">0</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Customer Notes</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faHelmetSafety}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">1</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Contract Expiring for AMC</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faMedal}
            className="text-sm bg-cyan-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-cyan-500 m-2">2</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Contract Exprining for Warranty</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faIndianRupee}
            className="text-sm bg-cyan-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-cyan-500 m-2">3</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Pending Sales Enquiry Qutation</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faLock}
            className="text-sm bg-cyan-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-cyan-500 m-2">11</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Open Purchase Order</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faPager}
            className="text-sm bg-gray-400 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-gray-400 m-2">19</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Quotation</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faWrench}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">13</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Sites</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faChalkboard}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">0</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Site Notes</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faUserGear}
            className="text-sm bg-green-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-green-500 m-2">37</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Active Jobs</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faUserXmark}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2"></p>
        </div>
        <p className="text-sm text-gray-400 m-2">Engineers not assigned job for tomorrow</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faComments}
            className="text-sm bg-red-400 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-red-400 m-2">6</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Quotes follow up</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faWrench}
            className="text-sm bg-cyan-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-cyan-500 m-2">17</p>
        </div>
        <p className="text-sm text-gray-400 m-2">New Calls</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-sm bg-green-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-green-500 m-2">17</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Assigned Calls</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faHourglass}
            className="text-sm bg-red-400 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-red-400 m-2">3</p>
        </div>
        <p className="text-sm text-gray-400 m-2">InProgress Calls</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-sm bg-gray-400 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-gray-400 m-2">26</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Engineer/Techmician Completed Calls</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">4</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Completed Calls</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">1</p>
        </div>
        <p className="text-sm text-gray-400 m-2">Cancelled Calls</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faCube}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">13</p>
        </div>
        <p className="text-sm text-gray-400 m-2">DC-Pending Invoice</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faCube}
            className="text-sm bg-amber-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-amber-500 m-2">13</p>
        </div>
        <p className="text-sm text-gray-400 m-2">DC-Not Delivered</p>
      </div>
      <div class="h-[150px]    w-[140px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faLock}
            className="text-sm bg-cyan-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-cyan-500 m-2">1</p>
        </div>
        <p className="text-sm text-gray-400 m-2">PO-Pending Approvel</p>
      </div>
      <div class="h-[200px] md:h-[150px]  w-[300px] md:w-[450px]  lg:w-[450px]   rounded shadow-lg bg-white my-4 col-span-2">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faWrench}
            className="text-sm bg-cyan-500 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-cyan-500 m-2">Corrective Maintenance</p>
        </div>
        <div className="sm:text-sm text-sm text-gray-400 mx-2 grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 place-items-center gap-1">
          <div><p className="text-sm text-gray-400">New</p><p className="text-sm text-gray-400 text-center">2</p></div>
          <div><p className="text-sm text-gray-400 ">Assigned</p><p className="text-sm text-gray-400 text-center">6</p></div>
          <div><p className="text-sm text-gray-400 ">InProgress</p><p className="text-sm text-gray-400 text-center">0</p></div>
          <div><p className="text-sm text-gray-400 ">Engineer&nbsp;Completed</p><p className="text-sm text-gray-400 text-center">5</p></div>
        </div>
      </div>
      <div class="h-[150px] w-[300px] md:w-[200px] lg:w-[200px] rounded  shadow-lg bg-white my-4 col-span-2 md:col-span-1">
        <div className="p-2 flex justify-between">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-sm bg-gray-400 text-white m-2 p-1 rounded"
          />
          <p className="text-2xl text-gray-400 m-1">23</p>
        </div>
        <p className="text-sm text-gray-400 m-1">Engineear/Technician Completed Calls - Without Call Waiting</p>
      </div>
    </div>
  );
}