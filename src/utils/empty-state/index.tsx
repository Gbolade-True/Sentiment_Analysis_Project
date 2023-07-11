import { FC } from 'react';
import emptyStateImg from 'extras/images/empty-state.png';

interface EmptyStateProps {
  displayText?: string;
  imageSrc?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({ displayText = 'Oops.. No content found', imageSrc }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '250px', height: '250px', opacity: .5 }}>
        <img 
          src={imageSrc || emptyStateImg}
          alt='empty-state'
          width='100%'
        />
      </div>
      <p style={{ margin: 0, textAlign: 'center' }}>
        {displayText}
      </p>
    </div>
  );
};
