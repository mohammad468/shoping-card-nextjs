import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="container flex justify-center">
        <form className="col-xl-5 col-lg-7 col-md-7 col-sm-9 col-xs-12 bg-white px-4 py-3 mt-5 rounded-2xl">
          <h1 className="text-center my-5 text-6xl font-black antialiased tracking-tighter text-slate-700">
            Sign<span className="text-orange-500">Up</span>Page
          </h1>
          <div className="mb-3">
            <label className="form-label">FirstName & LastName</label>
            <input type="text" className="form-control rounded-xl" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control rounded-xl" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control rounded-xl" />
          </div>
          <div className="mb-3">
            <label className="form-label">Verify Password</label>
            <input type="password" className="form-control rounded-xl" />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input checked:bg-orange-500 checked:border-0 checked:outline-none checked:ring-offset-0"
            />
            <label className="form-check-label">Remember me</label>
          </div>
          <div className="col-12">
            <button
              // type="submit"
              className="btn w-full bg-orange-400  hover:bg-orange-500 rounded-xl focus:ring-3 focus:bg-orange-500 focus:ring-blue-500 focus:ring-offset-2 text-slate-800 font-semibold mb-10"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
