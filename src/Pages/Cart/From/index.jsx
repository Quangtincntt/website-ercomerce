import Input from "./input";
function From({ total }) {
  return (
    <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
      <p className="text-xl font-medium">Payment Details</p>
      <p className="text-gray-400">
        Complete your order by providing your payment details.
      </p>
      <div className="">
        <Input />
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xl font-semibold	 text-gray-900">Total: </p>
          <p className="text-2xl font-semibold text-gray-900">$ {total}</p>
        </div>
      </div>
    </div>
  );
}

export default From;
