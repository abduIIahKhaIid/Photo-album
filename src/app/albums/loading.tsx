import { Loader2 } from 'lucide-react';

export const Icons = {
    spinner: Loader2,
};
export default function Loading() {
    return (
        <div className='flex justify-center item-center'>
            <Icons.spinner className="h-10 w-10  animate-spin text-red-600" />
        </div>
    );
}