import Social from "./Social";

function Contact() {
  return (
    <footer className="w-full">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold">Contact</h1>
        <p>Reach out to me if you like my work.</p>
      </div>
      <div className="w-full px-6 py-6">
        <div className="flex flex-col p-10 mb-24 lg:flex-row">
          <div className="flex-1 w-full mb-12 mr-12 text-center lg:w-1/2">
            <Social />
          </div>
          <div className="flex-1 w-full lg:w-1/2">
            <div className="mb-12 text-center">
              <h1 className="mb-2 text-lg font-medium">Address</h1>
              <p>Langote Layout, Ward No. 14, At Post. Narkhed,</p>
              <p>Dist. Nagpur, Maharashtra, India</p>
            </div>
            <div className="text-center">
              <h1 className="mb-2 text-lg font-medium">Contact</h1>
              <p>+917507441848</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
