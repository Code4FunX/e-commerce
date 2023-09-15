export const NewsLetter = () => {
  return (
    <div className="flex flex-col gap-y-8 bg-[#EFF2F4] px-6 py-10">
      <div>
        <h2 className="mb-1 text-center text-2xl font-medium">
          Subscribe on our newsletter
        </h2>
        <p className="text-center text-lg text-[#606060]">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
        {/* TODO ADD ICON TO INPUT */}
        <input
          type="text"
          className="w-full rounded-md border px-3 py-2 outline-none  sm:w-72"
          placeholder="Email"
        />
        <button className="w-full rounded-md bg-primary px-4 py-2 text-white sm:w-auto">
          Subscribe
        </button>
      </div>
    </div>
  )
}
