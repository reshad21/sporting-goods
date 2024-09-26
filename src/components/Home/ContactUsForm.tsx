const ContactUsForm = () => {
  return (
    <>
      <form action="">
        <div className="flex gap-3 mb-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-md md:text-md">Full Name</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-md md:text-md">
                Email Address
              </span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="flex gap-3 mb-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-md md:text-md">Number</span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-md md:text-md">
                Your local address
              </span>
            </div>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="flex gap-3 mb-6">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-md md:text-md">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder=""
            ></textarea>
          </label>
        </div>
        <div className="">
          <button className="bg-[#e21b70] text-white font-semibold py-3 px-4 rounded-md">
            SEND MESSAGE
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;
