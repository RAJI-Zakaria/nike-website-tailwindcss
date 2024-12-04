const Button = ({ label, iconURL }: { label: string; iconURL?: string }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg text-white leading-none text-white-400 bg-coral-red rounded-full border-coral-red">
      {label}
      <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />
    </button>
  );
};

export default Button;
