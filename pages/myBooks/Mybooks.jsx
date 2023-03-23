import React from "react";
import { Link } from "react-router-dom";
import "./Mybooks.scss";
import { MdDelete } from "react-icons/md";
import getCurentUser from "../../src/utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../src/utils/newRequest";

const Mybooks = () => {
  const currentUser = getCurentUser();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["myBooks"],
    queryFn: () =>
      newRequest.get(`/books?userId=${currentUser?._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/books/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myBooks"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  console.log(data);

  return (
    <div className="myBooks">
      {isLoading ? (
        "Loading.."
      ) : error ? (
        "faiiled to load"
      ) : (
        <div className="container">
          <div className="title">
            <h1>My Books</h1>
            {currentUser?.isAuthor && (
              <Link to="/add">
                <button>Add New Book</button>
              </Link>
            )}
          </div>

          <div className="stories-container">
            {data.map((book) => {
              return (
                <div className="stories" key={book._id}>
                  <div className="img-container">
                    <img
                      className="image"
                      src={
                        book.cover ||
                        "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      }
                      alt={book.title}
                    />
                  </div>
                  <p>
                    <strong>Title:</strong> {book.title}
                  </p>
                  <p>
                    <strong>Price:</strong>
                    {book.price}
                  </p>
                  <div className="">
                    <MdDelete
                      className="delete"
                      onClick={() => handleDelete(book._id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mybooks;
