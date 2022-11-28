import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';


const AllUsers = () => {
    const {
      data: users = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await fetch(" https://server-tau-one.vercel.app/users");
        const data = await res.json();
        return data;
      },
    });

     const handleDelete = (id) => {
       fetch(` https://server-tau-one.vercel.app/users/${id}`, {
         method: "DELETE",
         headers: {
           authorization: `bearer ${localStorage.getItem("accessToken")}`,
         },
       })
         .then((res) => res.json())
         .then((data) => {
           if (data.deletedCount > 0) {
             refetch();
             toast.success( 'deleted successfully');
           }
         });
     };

     if (isLoading) {
       return <Loading></Loading>;
     }


    return (
      <div>
        <h2 className="text-3xl">All Users</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={ ()=> handleDelete(user._id)}
                      className="btn btn-xs btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUsers;