import React from 'react'
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTestDescriptionStore } from '@/stores/testStore';
import type { TestDetailsData } from '@/api/model/test-model';
import ButtonCustom from '@/components/buttonCustom';

interface StoreDataProps{
  testData: TestDetailsData | null;
    setTestData: (data: TestDetailsData) => void;
    clearTestData: () => void;
}

function AllTests() {
    const { testData}: StoreDataProps = useTestDescriptionStore()

      console.log("data is",testData);
      
  const formatName = (name?: string): string => {
    if (!name) return ''; // handle undefined / null / empty
    return String(name) // coerce non-strings safely
      .trim() // remove leading/trailing spaces
      .split(/\s+/) // split on one or more whitespace chars
      .filter(Boolean) // remove any empty tokens
      .map(
        token => token.charAt(0).toUpperCase() + token.slice(1).toLowerCase()
      )
      .join(' ');
  };

  const formattingWord = (test: string) => {
    return test
      .toLowerCase()
      .split('_')
      .map((word, i) =>
        i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word
      )
      .join(' ');
  };

  return (
    <div>
         <Table >
                  {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                  <TableHeader>
                    <TableRow>
                      <TableHead >Difficulty</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Test Name</TableHead>
                      <TableHead className="text-center">Questions</TableHead>
                      <TableHead className="text-center">Duration</TableHead>
                      <TableHead className="text-center">Max Score</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {testData?.tests.map((item) => (
                      <TableRow key={item._id}>
                        <TableCell >
                          {formattingWord(item.difficultyLevel)}
                        </TableCell>
                        <TableCell> {formattingWord(item.examType)}</TableCell>
                        <TableCell className='font-medium '>
                          <div className='max-w-xs w-full'>
                              {formatName(item.name)}
                          </div>
                          </TableCell>
                        <TableCell className="text-center">
                          {item.totalQuestions}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.time}
                        </TableCell>
                        <TableCell className="text-center">
                          {item.highestScore}
                        </TableCell>

                        <TableCell >
                          <ButtonCustom title={"Buy Now"}/>
                        </TableCell>


                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    
                  </TableFooter>
                </Table>
    </div>
  )
}

export default AllTests