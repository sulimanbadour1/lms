import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ChapterIdPage = async ({
  params,
}: {
  params: {
    courseId: string;
    chapterId: string;
  };
}) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }

  const;

  return <div>ChapterIdPage</div>;
};

export default ChapterIdPage;
