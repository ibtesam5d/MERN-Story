// import { useQuery } from "@tanstack/react-query";
// import React from "react";
// import newRequest from "../../utils/newRequest";
// import { AiFillMessage } from "react-icons/ai";

// const OrderedBook = ({ item }) => {
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["singleBook"],
//     queryFn: () =>
//       newRequest.get(`/books/single/${item.bookId}`).then((res) => {
//         return res.data;
//       }),
//   });

//   return (
//     <>
//       {isLoading ? (
//         "loading"
//       ) : error ? (
//         "failed to load"
//       ) : (
//         <div className="stories">
//           <div className="img-container">
//             <img
//               className="image"
//               src={
//                 data.cover ||
//                 "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               }
//               alt={""}
//             />
//           </div>
//           <p>
//             <strong>Title:</strong>
//             {item.title}
//           </p>
//           <p>
//             <strong>Price:</strong>
//             {item.price}
//           </p>
//           {/* {currentUser?.isAuthor && (
//         <>
//           {isLoadingAuthor ? (
//             "loading"
//           ) : errorAuthor ? (
//             "error"
//           ) : (
//             <p>
//               <strong>Author:</strong>
//               {dataAuthor.username}
//             </p>
//           )}
//         </>
//       )} */}

//           <div className="">
//             <AiFillMessage className="message" size={25} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default OrderedBook;
