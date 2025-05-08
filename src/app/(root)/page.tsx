import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex gap-3 pt-20">
      Home, hello {session?.user?.name}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default Home;
