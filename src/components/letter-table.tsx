import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Character, Letter } from "@/constants/types";
import { Card } from "@/components/ui/card";
import MongolianScript from "./mongolian-script";

type Props = {
  letter?: Letter;
  character?: Character;
  className?: string;
};

const adds = (value: string) => {
  let letter = "";
  switch (value) {
    case "а":
      letter = "‍ᠠ‍";
      break;
    case "э":
      letter = "‍ᠡ‍";
      break;
    case "и":
      letter = "‍ᠢ‍";
      break;
    case "о":
      letter = "‍ᠥ‍";
      break;
    default:
      letter = "";
  }

  return letter;
};

export function LetterTable({ letter, character, className }: Props) {
  return (
    <Card className={`overflow-hidden ${className}`}>
      <Table>
        {letter && (
          <>
            <TableHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <TableRow className="hover:bg-transparent">
                <TableHead
                  colSpan={2}
                  className="text-primary font-semibold text-lg py-3 text-center"
                >
                  Үсгийн хувиралууд
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b hover:bg-muted/50">
                <TableCell className="font-medium w-1/3 align-middle text-right pr-4">
                  Эхэнд
                </TableCell>
                <TableCell className="text-4xl text-center">
                  <MongolianScript
                    script={letter.start}
                    className="inline-block drop-shadow-sm hover:drop-shadow-lg transition-all duration-300"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                className={`"hover:bg-muted/50" ${
                  letter.name === "Д" && "h-24"
                }`}
              >
                <TableCell className="font-medium w-1/3 align-middle text-right pr-4">
                  Дунд
                </TableCell>
                <TableCell className="text-4xl text-center">
                  <MongolianScript
                    script={letter.mid}
                    className="inline-block"
                  />
                </TableCell>
              </TableRow>
              <TableRow
                className={`"hover:bg-muted/50" ${
                  letter.name === "Д" && "h-24"
                }`}
              >
                <TableCell className="font-medium w-1/3 align-middle text-right pr-4">
                  Адагт
                </TableCell>
                <TableCell className="text-4xl text-center">
                  <MongolianScript
                    script={letter.end}
                    className="inline-block"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </>
        )}
        {character && (
          <>
            <TableHeader className="bg-gradient-to-r from-secondary/10 to-secondary/5">
              <TableRow className="hover:bg-transparent">
                <TableHead
                  colSpan={2}
                  className="text-secondary font-semibold text-lg py-3"
                >
                  Character Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b hover:bg-muted/50">
                <TableCell className="font-medium w-1/3">Shape</TableCell>
                <TableCell className="text-xl font-mono">
                  {character.shape}
                </TableCell>
              </TableRow>
              <TableRow className="border-b hover:bg-muted/50">
                <TableCell className="font-medium">Name</TableCell>
                <TableCell className="font-medium">{character.name}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted/50">
                <TableCell className="font-medium">Description</TableCell>
                <TableCell className="text-muted-foreground">
                  {character.desc}
                </TableCell>
              </TableRow>
            </TableBody>
          </>
        )}
      </Table>
    </Card>
  );
}
