export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/dyexalabs_icons.png"
        alt="Dyexa Logo"
        className="w-8 h-8 object-contain"
      />
      <span className="text-2xl font-bold text-slate-900 tracking-tight">
        DyexaLabs
      </span>
    </div>
  );
};

//This is your logo component. You can customize it by changing the image source, alt text, and styling as needed.
//You can also add props to make it more flexible, such as size or color options.
//Feel free to integrate it into your application wherever a logo is required.
//Remember to import this component in other parts of your application to use it.
//Happy coding!