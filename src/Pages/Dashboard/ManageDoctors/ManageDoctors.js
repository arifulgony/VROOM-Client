import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }


    const { data: doctors, isLoading, } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(' https://server-tau-one.vercel.app/allProducts', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
      <div>
        <h2 className="text-3xl">Advertised items: {doctors?.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Resale Price</th>
                <th>Years of use</th>
                <th>Category</th>
                <th>Original Price</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor, i) => (
                <tr key={doctor._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={doctor.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{doctor.name}</td>
                  <td>{doctor.price}</td>
                  <td>{doctor.years}</td>
                  <td>{doctor.category}</td>
                  
                  <td>
                    <label
                      onClick={() => setDeletingDoctor(doctor)}
                      htmlFor="confirmation-modal"
                      className="btn btn-sm btn-error"
                    >
                      Advertised
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deletingDoctor && (
          <ConfirmationModal
            title={`Are you sure you want to Advertised items added?`}
            message={`If you delete ${deletingDoctor.name}. It cannot be undone.`}
            // successAction={handleDeleteDoctor}
            successButtonName="Delete"
            modalData={deletingDoctor}
            closeModal={closeModal}
          ></ConfirmationModal>
        )}
      </div>
    );
};

export default ManageDoctors;