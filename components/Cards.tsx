import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type CardsProps = {
  description?: string;
  title?: string;
  icon?: React.ReactNode;
};
const Cards = ({ description, title, icon }: CardsProps) => {
  return (
    <Card className="max-w-[500px] mx-auto sm:mx-0 cursor-pointer hover:shadow-xl hover:scale-105 hover:shadow-slate-500 transition-all ease-in-out duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="font-bold text-2xl">{title}</span>
          {icon&& icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

export default Cards;
