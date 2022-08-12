import { Button } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const PlusButton = ({ isReadyForCombat, onClick }) => {
    const Icon = isReadyForCombat ? PlusOutlined : DeleteOutlined;
    return <Button icon={<Icon />} onClick={onClick} />
}

export default PlusButton;