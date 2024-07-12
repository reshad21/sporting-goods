const GoogleMap = () => {
  return (
    <div>
      <h2 className="text-3xl text-rose-500 font-semibold text-center mt-10">
        Our Google Map Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29445.71584580615!2d90.35120640000001!3d22.701670399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1720806421553!5m2!1sen!2sbd"
        // width="600"
        // height="450"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        className="w-full h-[450px] border-2 rounded-lg my-7"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
