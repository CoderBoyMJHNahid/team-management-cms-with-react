import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import Container from "../components/Container";
import HeaderTitle from "../components/Title/HeaderTitle";
import { NavLink } from "react-router-dom";
import { useContextValue } from "../context";

const Profile = () => {
  const { profileData } = useContextValue();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <div className="heading flex items-center justify-between">
          <HeaderTitle title={`My Profile`} subTitle={`Settings`} />
          <div className="icon_wrapper cursor-pointer bg-[#EDECF0] p-3 rounded-full">
            <NavLink to={`/profile`}>
              <FaUser className="text-xl" />
            </NavLink>
          </div>
        </div>
        <div className="content_wrapper mt-16">
          <div className="profile_data_wrapper">
            <img
              className="m-auto mb-4"
              width={110}
              src={profileData.profileImage}
              alt="Profile Picture"
            />
            <div className="name_wrapper text-center">
              <p className="level_wrapper my-6">
                <span className="bg-[#60CEA7] text-white px-6 py-1 rounded-xl">
                  {profileData.level}
                </span>
              </p>
            </div>
          </div>
          <div className="form_wrapper">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-6/12 m-auto">
              <div className="flex gap-4 my-6 items-center">
                <div className="w-32">
                  <label htmlFor="name" className="font-semibold">
                    Name:
                  </label>
                </div>
                <input
                  className="border px-4 rounded-lg focus:outline-none w-full py-2 border-1 border-gray-300"
                  {...register("name")}
                  type="text"
                  placeholder={profileData.name}
                />
              </div>
              <div className="flex gap-4 my-6 items-center">
                <div className="w-32">
                  <label htmlFor="name" className="font-semibold">
                    Work:
                  </label>
                </div>
                <input
                  className="border px-4 rounded-lg focus:outline-none w-full py-2 border-1 border-gray-300"
                  {...register("work")}
                  type="text"
                  placeholder={profileData.work}
                />
              </div>
              <div className="flex gap-4 my-6 items-center">
                <div className="w-32">
                  <label htmlFor="name" className="font-semibold">
                    Company:
                  </label>
                </div>
                <input
                  className="border px-4 rounded-lg focus:outline-none w-full py-2 border-1 border-gray-300"
                  {...register("company")}
                  type="text"
                  placeholder={profileData.company}
                />
              </div>
              <div className="flex gap-4 my-6 items-center">
                <div className="w-32">
                  <label htmlFor="name" className="font-semibold">
                    Email:
                  </label>
                </div>
                <input
                  className="border px-4 rounded-lg focus:outline-none w-full py-2 border-1 border-gray-300"
                  {...register("email")}
                  type="text"
                  placeholder={profileData.email}
                />
              </div>
              <div className="flex gap-4 my-6 items-baseline">
                <div className="w-32">
                  <label htmlFor="name" className="font-semibold">
                    Password:
                  </label>
                </div>
                <div className="w-full">
                  <button
                    className={`mb-6 w-full bg-[#60CEA7] px-4 py-2 rounded-lg text-white text-center`}
                  >
                    <NavLink>Change Password</NavLink>
                  </button>
                  <button
                    type="submit"
                    className={`w-full bg-[#37354C] px-4 py-2 rounded-lg text-white text-center`}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
