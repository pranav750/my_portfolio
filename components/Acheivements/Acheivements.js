import ACHEIVEMENTS from "../../data/acheivements";

function Acheivements() {
  return (
    <section className="w-full px-20">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold">Acheivements</h1>
        <p>My acheivements till now.</p>
      </div>
      <div className="w-full px-1 py-4 mx-auto md:w-3/4 lg:w-full lg:px-8 lg:py-24">
        <div className="flex flex-col flex-wrap justify-center w-full lg:flex-row">
          {ACHEIVEMENTS.map((acheivement) => (
            <div className="flex-initial w-full p-10 mb-8 shadow-md rounded-2xl lg:w-72 lg:m-4">
              <p>{acheivement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Acheivements;
