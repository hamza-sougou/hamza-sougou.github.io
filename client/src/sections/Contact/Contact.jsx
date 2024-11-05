const Contact = () => {
  return (
    <div
      className=" w-full min-h-screen px-[1rem] md:px-[10rem] md:pt-[2rem] josefin "
      id="contact"
    >
      <div className="w-full h-full">
        <div className="text-center">
          <h1 className="text-[3rem] md:text-[5rem]">Contact</h1>
          <hr className="mb-5 w-4/5 md:w-[100%]" />
        </div>
        <div className="text-center mt-[6rem]">
          <div className="flex flex-col md:flex-row w-full h-full">
            <div className="flex flex-1 flex-col justify-center text-left">
              <div className="mt-4 flex flex-col text-lg justify-between gap-2">
                <h2 className="text-3xl">Travaillons Ensemble !</h2>
                <p>Dakar, Sénégal</p>
                <p>
                  <strong>Email: </strong> sougouhamza@gmail.com
                </p>
                <p>+221 77 747 17 81</p>
              </div>
            </div>
            <div className="flex-1 flex w-full">
              <form action="" className="w-full flex flex-col justify-start">
                <div className="flex w-full">
                  <div className="flex-1 flex flex-col md:flex-row w-full justify-between gap-5">
                    <input
                      type="text"
                      placeholder="Nom"
                      className="input outline-none ring-1 ring-[#141414] dark:ring-white focus:ring-orange dark:focus:ring-orange bg-transparent w-full py-4 px-3 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="outline-none ring-1 ring-[#141414] dark:ring-white focus:ring-orange dark:focus:ring-orange bg-transparent w-full py-4 px-3 transition-all"
                    />
                  </div>
                </div>
                <div className="flex w-full mt-5">
                  <textarea
                    className="outline-none ring-1 ring-[#141414] dark:ring-white focus:ring-orange dark:focus:ring-orange bg-transparent w-full py-4 px-3 min-h-[200px] max-h-[200px] transition-all"
                    placeholder="Message"
                  />
                </div>
                <button className="mt-5 w-full md:w-2/5 ">
                  <div id="button_h" className="ac_btn btn w-full">
                    <h2 className="text-xl my-[0.2rem] mx-[1rem]">Envoyer</h2>
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
