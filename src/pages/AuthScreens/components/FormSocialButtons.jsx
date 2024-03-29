import Google from "../../../assets/svgs/Google.svg";
import cloud from "../../../assets/svgs/cloud.svg";
import Microsoft from "../../../assets/svgs/Microsoft.svg";

const FormSocialButtons = () => {
  return (
    <div className="SSO flex justify-between flex-col gap-4 sm:flex-row items-center text-sm font-medium text-gray-900">
      <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-solid border-gray-200 rounded-lg w-full sm:w-1/3">
        <img src={Google} alt="" />
        Google
      </button>
      <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-solid border-gray-200 rounded-lg w-full sm:w-1/3">
        <img src={Microsoft} alt="" />
        Microsoft
      </button>

      <button className="px-5 py-2.5 flex items-center justify-center gap-2 border border-solid border-gray-200 rounded-lg w-full sm:w-1/3">
        <img src={cloud} alt="" />
        SSO
      </button>
    </div>
  );
};

export default FormSocialButtons;
