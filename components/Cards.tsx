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
    <Card className="max-w-[500px] mx-auto sm:mx-0">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="font-bold text-xl">{title}</span>
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
