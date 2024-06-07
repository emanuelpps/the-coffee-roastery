import formImage from "../../../../assets/img/cafe.webp";
import Buttons from "../../../../components/Buttons/Buttons";
function Contact() {
  return (
    <div className="bg-[#ffebd6] text-playfair h-full pb-20">
      <div className="flex justify-center items-center pt-20 text-[#473429] w-full">
        <div className="flex flex-col md:flex-row justify-center items-center w-[100%]">
          <div className="flex justify-center items-center w-[50%]">
            <img src={formImage} className="hidden md:flex md:w-[500px]" />
          </div>
          <div className="flex justify-center items-center w-[90%] md:w-[50%] md:mr-20">
            <form className="w-full">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-2xl"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] block w-full p-2.5"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-2xl"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] block w-full p-2.5"
                  placeholder="name@youremail.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block mb-2 font-medium text-2xl"
                >
                  Subject
                </label>
                <input
                  type="subject"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#473429] focus:border-[#473429] block w-full p-2.5"
                  placeholder="About the coffee"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 font-medium text-2xl"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:ring-[#473429] focus:border-[#473429]"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="pt-16">
                <Buttons variant="secondary" label="Submit"></Buttons>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
