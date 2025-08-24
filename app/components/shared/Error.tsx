import React from 'react';
import { Icon } from '@iconify/react';

interface ErrorProps {
    message?: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className='bg-red-500/5 rounded-lg p-6 pb-10 my-12 text-center shadow-sm text-base w-fit mx-auto flex flex-col items-center'>
            <Icon icon="lucide:alert-triangle" className="text-red-400 mb-6" width={48} height={48} />
            <p className='mb-2 text-white/90'>Something went wrong. Please try again later.</p>
            <p className="text-xs text-white/60">
                {message || ''}
            </p>
        </div>
    );
};

export default Error;
