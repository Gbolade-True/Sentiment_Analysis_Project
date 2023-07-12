import { FC } from 'react';
interface EmptyStateProps {
  imageSrc: string;
  displayText?: string;
}

export const EmptyState: FC<EmptyStateProps> = ({ displayText = 'Oops.. No content found', imageSrc }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '250px', height: '250px', opacity: .5 }}>
        <img 
          src={imageSrc}
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
