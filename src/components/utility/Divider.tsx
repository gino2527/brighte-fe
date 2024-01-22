import { FC } from 'react';

interface DividerProps {
  title: string;
}

const Divider: FC<DividerProps> = ({ title }) => {
  return (
    <div className="divider">
      {title}
    </div>
  )
}

export default Divider;
