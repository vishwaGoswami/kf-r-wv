import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faArrowsUpDown } from '@fortawesome/free-solid-svg-icons';

export default function Sales_priority() {
    return (
        <div className="rounded overflow-hidden shadow-lg bg-white my-7">
            <h4 className="text-2xl text-gray-500 m-4">Sales Priority</h4>
            <div className="grid grid-cols-3 place-items-start m-4">
                <div className="lg:w-[200px] h-[130px] rounded  shadow-lg bg-white">
                    <div p-2 className="p-2 flex justify-between">
                        <FontAwesomeIcon
                            icon={faArrowUp}
                            className="text-md bg-blue-500 text-white m-2 p-1 rounded"
                        />
                        <p className="text-2xl text-blue-500 m-2">3</p>
                    </div>
                    <p className="text-md text-gray-400 m-1">HIGH</p>
                </div>
                <div className="lg:w-[200px] h-[130px] rounded  shadow-lg bg-white">
                    <div p-2 className="p-2 flex justify-between">
                        <FontAwesomeIcon
                            icon={faArrowsUpDown}
                            className="text-md bg-blue-500 text-white m-2 p-1 rounded"
                        />
                        <p className="text-2xl text-blue-500 m-2">1</p>
                    </div>
                    <p className="text-md text-gray-400 m-1">MEDIUM</p>
                </div>
                <div className="lg:w-[200px] h-[130px] rounded  shadow-lg bg-white">
                    <div p-2 className="p-2 flex justify-between">
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            className="text-md bg-blue-500 text-white m-2 p-1 rounded"
                        />
                        <p className="text-2xl text-blue-500 m-2">1</p>
                    </div>
                    <p className="text-md text-gray-400 m-1">LOW</p>
                </div>
            </div>
        </div>

    );
}