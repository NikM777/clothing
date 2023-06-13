import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: {
    imageUrl: string;
    title: string;
    route: string;
  };
};

const DirectoryItem = ({ category }: DirectoryItemProps): JSX.Element => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
