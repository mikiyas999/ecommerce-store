import { Billboard } from "@/types";

interface Billboardprops {
  data: Billboard;
}
const Billboard: React.FC<Billboardprops> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-hidden rounded-xl">
      <div
        className="relative aspect-square rounded-xl bg-cover overflow-hidden md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
