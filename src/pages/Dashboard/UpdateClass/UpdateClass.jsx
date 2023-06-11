import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const item = useLoaderData();
    const { title, Price, availableSeat, instructorName,_id } = item
    //console.log('item', item)
    const handleUpdateClass = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const instructorName = form.instructorName.value;
        const Price = form.Price.value;
        const availableSeat = form.availableSeat.value;
        



        const updatedClass = { title, instructorName, Price, availableSeat }
        console.log(updatedClass)
       
        //send data to the server
        fetch(`https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/updatedAClass/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })

    }
    return (
        <div>
            <Helmet>
                <title>United Sports | Update A Class</title>

            </Helmet>
            <div className="my-container bg-gray-200 p-24">
            <h1 className="text-center font-semibold text-5xl mb-5">Update A Class!!</h1>
                <form className="p-10 bg-gradient-to-br from-purple-300 to-indigo-200 rounded-lg" onSubmit={handleUpdateClass}>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Class Category</span>
                            </label>
                            <label className="input-group">


                                <input type="text" name="title" placeholder="Class Category" className="input input-bordered w-full" defaultValue={title} />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Instructor Name </span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="instructorName" placeholder="Instructor Name" className="input input-bordered w-full" defaultValue={instructorName} disabled />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">


                                <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" defaultValue={Price} />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Available Seat</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="availableSeat" placeholder="Available Seat" className="input input-bordered w-full" defaultValue={availableSeat} />
                            </label>
                        </div>
                    </div>



                    <input type="submit" value="Update Class" className="rounded-full w-full btn btn-outline bg-purple-500 text-white border-0 border-b-4  hover:text-[#BB8506]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateClass;