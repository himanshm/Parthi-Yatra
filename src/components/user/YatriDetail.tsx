type YatriDetailItem = {
  label: string;
  value: string | number;
};

type YatriDetailProps = {
  details: YatriDetailItem[];
};

function YatriDetail({ details }: YatriDetailProps) {
  return (
    <div className='flex flex-col gap-1'>
      {details.map((detail) => (
        <div key={detail.label} className='flex items-center gap-2'>
          <h3 className='text-l font-semibold'>{detail.label}:</h3>
          <span>{detail.value}</span>
        </div>
      ))}
    </div>
  );
}

export default YatriDetail;
