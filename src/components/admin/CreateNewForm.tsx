import { ReactNode } from 'react';
import Button from '../UI/Button';

type CreateNewFormProps = {
  inputs: ReactNode;
  entity: string;
};

function CreateNewForm({ inputs, entity }: CreateNewFormProps) {
  return (
    <>
      <p className='text-xl font-medium py-3'>
        Please provide the following details:
      </p>
      <div className='w-full max-w-sm p-4 border rounded-lg shadow'>
        <form className='space-y-6'>{inputs}</form>

        <div className='mt-8'>
          <Button btntype='primary' type='submit'>
            Create {entity}
          </Button>
        </div>
      </div>
    </>
  );
}

export default CreateNewForm;
