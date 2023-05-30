import FormButton from "./SearchComponents/UI/buttons/FormButton";

function TitleButtonContainer(props) {
  return (
    <div className=" flex flex-col">
      <span>Target Title</span>
      <div className="mt-1.5">
        {props.data.titles.map((button) => (
          <FormButton
            onClick={props.onClick}
            key={button.id}
            data={button.title}
            name={button.type}
            styles={`bg-blue-500 text-white py-2 px-4 rounded-full w-28 mr-2 max-[512px]:mb-1.5  ${
              props.active === button.title ? "bg-orange-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TitleButtonContainer;
