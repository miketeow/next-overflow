import Link from "next/link";
import React from "react";

import QuestionCard from "@/components/cards/question-card";
import HomeFilter from "@/components/filter/home-filter";
import LocalSearch from "@/components/search/local-search";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to create a custom hook in React?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Next.js" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      avatar:
        "https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2025-05-11"),
  },
  {
    _id: "2",
    title: "How to use React Router for routing?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "Next.js" },
    ],
    author: {
      _id: "1",
      name: "Ethan Hunt",
      avatar:
        "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2025-04-15"),
  },
];
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchedQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchedFilter =
      filter === "" ||
      question.tags.some((tag) => tag.name.toLowerCase() === filter);
    return matchedQuery && matchedFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
