const Button = (props) => {

   const btnText = props.text;

   return (
      <button className="bg-[#D9D9D9] w-[300px] sm:max-w-[240px] sm:px-14 mx-[37px] mb-8 py-5 ">
         <span className="pr-4">&rarr;</span>{btnText}
      </button>
   )
}

export default Button