
import { FaCircle } from "react-icons/fa";
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/4 flex justify-between m-5">
            <div className="flex gap-2">
                <FaCircle></FaCircle>
            <p className="uppercase">{subHeading}</p>
            </div>
            <h3 className="text-3xl">{heading}</h3>
        </div>
    );
};

export default SectionTitle;