export const FormContact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log() a los valores de los inputs
    console.log("Form submitted");
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
  };
  return (
    <form onSubmit={onSubmit} className="space-y-5 pt-12">
      <div>
        <label className="font-medium">Nombre Completo</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 bg-cardBackground border border-transparent  outline-none  focus:border-primary shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Correo</label>
        <input
          type="email"
          required
          className="w-full mt-2 px-3 py-2 bg-cardBackground border border-transparent  outline-none  focus:border-primary shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Compañía</label>
        <input
          type="text"
          required
          className="w-full mt-2 px-3 py-2 bg-cardBackground border border-transparent  outline-none  focus:border-primary shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium">Mensaje</label>
        <textarea
          required
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-cardBackground border-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
        ></textarea>
      </div>
      <button className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-primary/70 active:bg-indigo-600 rounded-lg duration-150">
        Submit
      </button>
    </form>
  );
};
