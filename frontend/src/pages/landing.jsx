export function LandingPage() {
  return (
    <div className="flex justify-center">
      <div className="smallContainer rounded-md border border-gray-600">
        <div className="flex h-3/4 gap-6 mt-3 ml-3">
          <img
            className="w-2/5 h-2/4 object-cover rounded-lg "
            src="https://images.pexels.com/photos/31289592/pexels-photo-31289592/free-photo-of-young-woman-in-nature-with-bright-foliage.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          />
          <div className="flex flex-col p-2">
            <h1 className="text-3xl purple">Diksh@ Muktan</h1>
            <p className="text-2xl">I'm a Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
