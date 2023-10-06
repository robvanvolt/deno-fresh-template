import { useSignal } from "@preact/signals";
import FirstIsland from "../islands/FirstIsland.tsx";
import SecondIsland from "../islands/SecondIsland.tsx";
import ThirdIsland from "../islands/ThirdIsland.tsx";

export default function Home() {
  const count = useSignal(3);
  const countAlternative = useSignal(2);

  return (
    <div class="px-4 py-8 mx-auto bg-[#86eeec]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to the Fresh Template</h1>
        <p class="my-4">
          Try updating this message in the
          <code class="mx-2">./routes/index.tsx</code> file, and refresh.
        </p>
        <div class="flex gap-8 py-6 bg-green-100 w-full justify-center shadow-md rounded-md flex-wrap">
          <div class="py-4 px-10">
            Islands are isolated components that can be used in any route. They
            are interactive, and can be used to build complex UIs.
          </div>
          <div class="h-full bg-red-100 px-4 py-2 rounded-md flex justify-center items-center flex-col">
            This is the first island
            <FirstIsland count={count} />
          </div>
          <div class="h-full bg-blue-100 px-4 py-2 rounded-md flex justify-center items-center flex-col">
            This is the second island
            <SecondIsland count={count} />
          </div>
          <div class="h-full bg-yellow-100 px-4 py-2 rounded-md flex justify-center items-center flex-col">
            This is the second island
            <ThirdIsland count={countAlternative} />
          </div>
          <div class="py-4 px-10">
            See how the count is shared between islands? That's because they are
            all using the same signal. All of them? No, the third island is
            using a different signal (countAlternative instead of count).<br /><br />

            <b>Islands</b> located in the <i>islands</i> folder are isolated components that are interactive, components 
            are located in the <i>components</i> folder and are not interactive. They can be used to reuse
            certain parts of the UI.<br></br>

            <b>Signals</b> are used to share state between components and can be modified, so they are variables and not constants.
          </div>
        </div>
      </div>
    </div>
  );
}
