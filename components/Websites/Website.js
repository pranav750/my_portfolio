function Website({ link }) {
  return (
    <a
      target="_blank"
      href={link.value}
      className="p-2 mx-2 text-white bg-black rounded md:px-4 md:py-2 md:mx-2 hover:cursor-pointer"
    >
      {link.name}
    </a>
  );
}

export default Website;
