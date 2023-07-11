import { TabMenu, TabMenuItemData } from "utils/tabs";
import { ModelType, ModelsInfo } from "../modelInfo";
import './index.scss';

interface ModelTabProps {
    selectedModel: ModelType;
    setModelType: (selectedModel: ModelType) => void;
    style?: React.CSSProperties;
}

const tabItems = ModelsInfo.map(mInfo => (
    {
        id: mInfo.repr,
        label: mInfo.title,
    } as TabMenuItemData
))

export const ModelTabs = ({ selectedModel, setModelType, style }: ModelTabProps) => {

    return(
        <div className='model_tabs' style={style}>
            <TabMenu 
                activeTab={selectedModel} 
                setActiveTab={setModelType}
                items={tabItems}
            />
            <div className="model_info">
                <p>
                    {ModelsInfo.find(mInfo => mInfo?.repr === selectedModel)?.description}
                </p>
            </div>
        </div>
    )
}