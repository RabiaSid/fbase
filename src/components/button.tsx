type propsType = {
    label: string;
    onClick?: any;
  };
  
  export default function Button(props: propsType) {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="rounded-full bg-teal-700 p-2 text-white px-8 w-[30%]"
      >
        {label}
      </button>
    );
  }