// import React, { useState, useEffect } from "react";
// import busData from "../buses.json"; // Importing JSON file

// const BusSearch = () => {
//   const [departure, setDeparture] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [buses, setBuses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [places, setPlaces] = useState([]); // Store unique places for dropdown

//   useEffect(() => {
//     // Extract unique places for dropdown
//     const uniquePlaces = [
//       ...new Set(busData.flatMap((bus) => [bus.departure, bus.arrival])),
//     ];
//     setPlaces(uniquePlaces);
//   }, []);

//   const getCurrentTime = () => {
//     const now = new Date();
//     return now.getHours() * 60 + now.getMinutes(); // Convert to minutes
//   };

//   const convertToMinutes = (timeString) => {
//     const [time, modifier] = timeString.split(" ");
//     let [hours, minutes] = time.split(":").map(Number);
//     if (modifier === "PM" && hours !== 12) hours += 12;
//     if (modifier === "AM" && hours === 12) hours = 0;
//     return hours * 60 + minutes;
//   };

//   const handleSearch = () => {
//     setLoading(true);
//     const currentMinutes = getCurrentTime();

//     // Filter buses based on dropdown selection and time
//     const filteredBuses = busData
//       .filter(
//         (bus) =>
//           bus.departure === departure &&
//           bus.arrival === arrival &&
//           convertToMinutes(bus.timing) > currentMinutes // Only future buses
//       )
//       .sort((a, b) => convertToMinutes(a.timing) - convertToMinutes(b.timing)) // Sort by time
//       .slice(0, 10); // Get next 10 buses

//     setBuses(filteredBuses);
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-4">Bus Search</h2>

//       {/* Departure Dropdown */}
//       <div className="mb-4">
//         <select
//           value={departure}
//           onChange={(e) => setDeparture(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select Departure</option>
//           {places.map((place, index) => (
//             <option key={index} value={place}>
//               {place}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Arrival Dropdown */}
//       <div className="mb-4">
//         <select
//           value={arrival}
//           onChange={(e) => setArrival(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select Arrival</option>
//           {places.map((place, index) => (
//             <option key={index} value={place}>
//               {place}
//             </option>
//           ))}
//         </select>
//       </div>

//       <button
//         onClick={handleSearch}
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//       >
//         Search Buses
//       </button>

//       {loading ? (
//         <p className="text-center mt-4">Loading...</p>
//       ) : (
//         <table className="w-full mt-4 border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">#</th>
//               <th className="border border-gray-300 px-4 py-2">Type</th>
//               <th className="border border-gray-300 px-4 py-2">Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {buses.length > 0 ? (
//               buses.map((bus, index) => (
//                 <tr key={index} className="text-center">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{bus.type}</td>
//                   <td className="border border-gray-300 px-4 py-2">{bus.timing}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center p-4">
//                   No buses available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BusSearch;







// import React, { useState, useEffect } from "react";
// import busData from "../buses.json"; // Import bus data

// const BusSearch = () => {
//   const [departure, setDeparture] = useState("");
//   const [arrival, setArrival] = useState("");
//   const [filteredDeparture, setFilteredDeparture] = useState([]);
//   const [filteredArrival, setFilteredArrival] = useState([]);
//   const [buses, setBuses] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     // Extract unique places from bus data
//     const uniquePlaces = [
//       ...new Set(busData.flatMap((bus) => [bus.departure, bus.arrival])),
//     ];
//     setPlaces(uniquePlaces);
//   }, []);

//   const filterSuggestions = (input, setFilteredList) => {
//     if (!input) {
//       setFilteredList([]);
//     } else {
//       const suggestions = places.filter((place) =>
//         place.toLowerCase().includes(input.toLowerCase())
//       );
//       setFilteredList(suggestions);
//     }
//   };

//   const handleSearch = () => {
//     if (!departure || !arrival || departure === arrival) {
//       alert("Please select valid departure and arrival locations.");
//       return;
//     }

//     setLoading(true);
//     const filteredBuses = busData.filter(
//       (bus) =>
//         bus.departure.toLowerCase() === departure.toLowerCase() &&
//         bus.arrival.toLowerCase() === arrival.toLowerCase()
//     );

//     setTimeout(() => {
//       setBuses(filteredBuses);
//       setLoading(false);
//     }, 500);
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-center mb-4">Bus Search</h2>

//       {/* Departure Dropdown */}
//       <div className="mb-4 relative">
//         <label className="block mb-1">Departure</label>
//         <input
//           type="text"
//           value={departure}
//           onChange={(e) => {
//             setDeparture(e.target.value);
//             filterSuggestions(e.target.value, setFilteredDeparture);
//           }}
//           className="w-full p-2 border rounded"
//           placeholder="Type to search..."
//         />
//         {filteredDeparture.length > 0 && (
//           <select
//             className="absolute w-full border p-2 bg-white shadow-md z-10 cursor-pointer"
//             size={filteredDeparture.length}
//             onChange={(e) => {
//               setDeparture(e.target.value);
//               setFilteredDeparture([]);
//             }}
//           >
//             {filteredDeparture.map((place, index) => (
//               <option key={index} value={place}>
//                 {place}
//               </option>
//             ))}
//           </select>
//         )}
//       </div>

//       {/* Arrival Dropdown */}
//       <div className="mb-4 relative">
//         <label className="block mb-1">Arrival</label>
//         <input
//           type="text"
//           value={arrival}
//           onChange={(e) => {
//             setArrival(e.target.value);
//             filterSuggestions(e.target.value, setFilteredArrival);
//           }}
//           className="w-full p-2 border rounded"
//           placeholder="Type to search..."
//         />
//         {filteredArrival.length > 0 && (
//           <select
//             className="absolute w-full border p-2 bg-white shadow-md z-10 cursor-pointer"
//             size={filteredArrival.length}
//             onChange={(e) => {
//               setArrival(e.target.value);
//               setFilteredArrival([]);
//             }}
//           >
//             {filteredArrival.map((place, index) => (
//               <option key={index} value={place}>
//                 {place}
//               </option>
//             ))}
//           </select>
//         )}
//       </div>

//       <button
//         onClick={handleSearch}
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//       >
//         Search Buses
//       </button>

//       {loading ? (
//         <p className="text-center mt-4">Loading...</p>
//       ) : (
//         <table className="w-full mt-4 border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 px-4 py-2">#</th>
//               <th className="border border-gray-300 px-4 py-2">Type</th>
//               <th className="border border-gray-300 px-4 py-2">Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {buses.length > 0 ? (
//               buses.map((bus, index) => (
//                 <tr key={index} className="text-center">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{bus.type}</td>
//                   <td className="border border-gray-300 px-4 py-2">{bus.timing}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3" className="text-center p-4">
//                   No buses available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default BusSearch;
























import React, { useState, useEffect } from "react";
import busData from "../buses.json"; // Import bus data

const BusSearch = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [filteredDeparture, setFilteredDeparture] = useState([]);
  const [filteredArrival, setFilteredArrival] = useState([]);
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Extract unique places from bus data
    const uniquePlaces = [
      ...new Set(busData.flatMap((bus) => [bus.departure, bus.arrival])),
    ];
    setPlaces(uniquePlaces);
  }, []);

  const filterSuggestions = (input, setFilteredList) => {
    if (!input) {
      setFilteredList([]);
    } else {
      const suggestions = places.filter((place) =>
        place.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredList(suggestions);
    }
  };

  const handleSelectDeparture = (place) => {
    setDeparture(place);
    setFilteredDeparture([]); // Hide dropdown after selection
  };

  const handleSelectArrival = (place) => {
    setArrival(place);
    setFilteredArrival([]); // Hide dropdown after selection
  };

  const handleSearch = () => {
    if (!departure || !arrival || departure === arrival) {
      alert("Please select valid departure and arrival locations.");
      return;
    }

    setLoading(true);
    const filteredBuses = busData.filter(
      (bus) =>
        bus.departure.toLowerCase() === departure.toLowerCase() &&
        bus.arrival.toLowerCase() === arrival.toLowerCase()
    );

    setTimeout(() => {
      setBuses(filteredBuses);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Bus Search</h2>

      {/* Departure Input Field */}
      <div className="mb-4 relative">
        <label className="block mb-1 font-medium">Departure</label>
        <input
          type="text"
          value={departure}
          onChange={(e) => {
            setDeparture(e.target.value);
            filterSuggestions(e.target.value, setFilteredDeparture);
          }}
          className="w-full p-2 border rounded focus:outline-blue-500"
          placeholder="Type or select..."
        />
        {filteredDeparture.length > 0 && (
          <div className="absolute left-0 w-full bg-white border rounded shadow-md mt-1 z-10">
            {filteredDeparture.map((place, index) => (
              <div
                key={index}
                onClick={() => handleSelectDeparture(place)}
                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded transition"
              >
                {place}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Arrival Input Field */}
      <div className="mb-4 relative">
        <label className="block mb-1 font-medium">Arrival</label>
        <input
          type="text"
          value={arrival}
          onChange={(e) => {
            setArrival(e.target.value);
            filterSuggestions(e.target.value, setFilteredArrival);
          }}
          className="w-full p-2 border rounded focus:outline-blue-500"
          placeholder="Type or select..."
        />
        {filteredArrival.length > 0 && (
          <div className="absolute left-0 w-full bg-white border rounded shadow-md mt-1 z-10">
            {filteredArrival.map((place, index) => (
              <div
                key={index}
                onClick={() => handleSelectArrival(place)}
                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded transition"
              >
                {place}
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search Buses
      </button>

      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {buses.length > 0 ? (
              buses.map((bus, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.type}</td>
                  <td className="border border-gray-300 px-4 py-2">{bus.timing}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">
                  No buses available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BusSearch;











