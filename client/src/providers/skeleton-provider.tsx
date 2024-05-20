import { Skeleton } from "../components/ui/skeleton";

type SkeletonProviderProps = {
  children: React.ReactNode;
  isLoading?: boolean;
};

export default function SkeletonProvider({
  children,
  isLoading,
}: SkeletonProviderProps) {
  if (!isLoading) return children;

  return (
    <Skeleton>
      <div className="">{children}</div>
    </Skeleton>
  );
}
