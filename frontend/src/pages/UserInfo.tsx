import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import { trains } from '../utils/app-data';

function UserInfo() {
  return (
    <div>
      {/* Name will be prefilled and will be fetched from database */}
      <h3 className='text-2xl font-semibold text-gray-700'>
        Sai Ram Himanshu 🙏
      </h3>
      <p className='text-l font-medium text-gray-700 py-3'>
        Please provide following details!
      </p>

      <div className='w-full max-w-sm p-4 border rounded-lg shadow border-gray-700'>
        <form className='space-y-6'>
          <label
            htmlFor='trains'
            className='block mb-2 text-sm font-medium text-[#049DD9]'
          >
            Please select your train:
          </label>
          <select
            name='train'
            id='trains'
            className='bordertext-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-[#D7D4E7] border-gray-500 placeholder-gray-400 text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            {trains.map((train) => (
              <option key={train}>{train}</option>
            ))}
          </select>

          <Input type='text' id='district' label='District' required />

          <Button type='submit' btntype='primary' className='w-full'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
