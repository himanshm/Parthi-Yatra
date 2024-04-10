import { useState } from 'react';
import Button from '../UI/Button';
import YatriDetail from './YatriDetail';

type YatriProps = {
  name: string;
  age: number;
  mobileNumber: string;
  saiConnect: string;
  district: string;
  samithi: string;
};

function Yatri({
  name,
  age,
  mobileNumber,
  saiConnect,
  district,
  samithi,
}: YatriProps) {
  const [isTraveling, setIsTraveling] = useState<boolean | null>(null);

  const handleYesClick = () => {
    setIsTraveling(true);

    // Optionally, send isTraveling to database here
  };

  const handleNoClick = () => {
    setIsTraveling(false);

    // Optionally, send isTraveling to database here
  };

  return (
    <div className='w-full max-w-sm py-2 px-3 border rounded-lg shadow border-gray-700 space-y-3'>
      <YatriDetail
        details={[
          { label: 'Name', value: name },
          { label: 'Age', value: age },
          { label: 'District', value: district },
          { label: 'Samithi', value: samithi },
          { label: 'Sai Connect Id', value: saiConnect },
          { label: 'Mobile Number', value: mobileNumber },
        ]}
      />

      <div>
        <h4 className='text-xl font-medium '>
          Is this Yatri traveling in your train to Parthi with you?
        </h4>
        <div className='flex items-center justify-between my-4'>
          <Button btntype='tertiary' onClick={handleYesClick}>
            Yes
          </Button>
          <Button btntype='secondary' onClick={handleNoClick}>
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Yatri;
