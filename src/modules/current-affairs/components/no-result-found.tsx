import { Link, useParams } from '@tanstack/react-router';

import { NoResultFoundImg } from '@/assets';
import { Button } from '@/components/ui/button';

export default function NoResultFound() {
   //Fetch the language params
    const { lang } = useParams({ strict: false });
    
    const homepageLink  = lang ?? 'en';

  return (
    <div className='w-full bg-white rounded-2xl p-6 flex flex-col items-center'>
      <img src={NoResultFoundImg} alt='no result found' />
      <h3 className='uppercase font-semibold'>No results found</h3>
      <Link to='/$lang/current-affairs' params={{ lang: homepageLink }} className='mt-2'>
        <Button className=' bg-blue-700 hover:bg-blue-500 cursor-pointer'>
          Remove filters
        </Button>
      </Link>
    </div>
  );
}
