
function ContactInfo({ name, title, company, met }) {

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex justify-center h-12 border-b pb-4">
        <h5 className="text-xl font-semibold">Contact Info</h5>
      </div>

      <p className="font-semibold text-2xl ml-2 pt-4">{name}</p>
      <p className="text-xl pt-2 ml-2 border-b pb-4 text-slate-400">{title + " at " + company}</p>
      <p className="text-md pt-4 p-2"><em>{met}</em></p>
      
    </div>
  );
}

export default ContactInfo;
