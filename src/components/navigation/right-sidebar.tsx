import Image from "next/image";
import Link from "next/link";
import React from "react";

import TagCard from "../cards/tag-card";

const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React?" },
  { _id: "2", title: "How to use React Router for routing?" },
  { _id: "3", title: "How to use React Query for data fetching?" },
  { _id: "4", title: "How to use React Context for state management?" },
  { _id: "5", title: "How to use React Redux for state management?" },
  { _id: "6", title: "How to use React Suspense for code splitting?" },
  { _id: "7", title: "How to use React Lazy for lazy loading?" },
  { _id: "8", title: "How to use React Router for routing?" },
];

const popularTags = [
  { _id: "1", name: "React", questions: 100 },
  { _id: "2", name: "Next.js", questions: 50 },
  { _id: "3", name: "Tailwind CSS", questions: 30 },
  { _id: "4", name: "TypeScript", questions: 20 },
  { _id: "5", name: "JavaScript", questions: 10 },
  { _id: "6", name: "HTML", questions: 5 },
];
const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={`/questions/${_id}`}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
