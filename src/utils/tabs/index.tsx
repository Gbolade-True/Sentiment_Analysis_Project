import { ReactNode } from "react";
import './index.scss';

export type TabMenuItemData = {
    id: string;
    label: ReactNode;
    url?: string;
    disabled?: boolean;
}

interface TabMenuProps {
    items: TabMenuItemData[];
    activeTab: any;
    setActiveTab: (activeTab: any) => void;
}
  
export const TabMenu = ({ items, activeTab, setActiveTab }: TabMenuProps) =>{
    return(
        <div 
            className="tab-buttons"
        >
            {items?.map(item =>{
                return (
                    <button 
                        className={item.id === activeTab ? 'active': ''} 
                        onClick={() => setActiveTab(item.id)}
                        disabled={item?.disabled}
                        key={item?.id}
                    >
                        {item?.label}
                    </button>
                )
            })}
        </div>
    )
}
