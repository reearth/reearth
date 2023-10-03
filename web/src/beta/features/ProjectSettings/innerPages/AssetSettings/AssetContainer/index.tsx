import Button from "@reearth/beta/components/Button";
import TextInput from "@reearth/beta/components/fields/common/TextInput";
import Loading from "@reearth/beta/components/Loading";
import Text from "@reearth/beta/components/Text";
import AssetCard from "@reearth/beta/features/Assets/AssetCard";
import useHooks from "@reearth/beta/features/Assets/AssetHooks/hooks";
import { FILE_FORMATS, IMAGE_FORMATS } from "@reearth/beta/features/Assets/constants";
import { Asset, SortType } from "@reearth/beta/features/Assets/types";
import useFileUploaderHook from "@reearth/beta/features/Assets/useAssetUploader/hooks";
import { checkIfFileType } from "@reearth/beta/utils/util";
import { useT } from "@reearth/services/i18n";
import { styled } from "@reearth/services/theme";

import AssetDeleteModal from "../AssetDeleteModal";

export type Props = {
  workspaceId?: string;
  className?: string;
  assets?: Asset[];
  selectedAssets?: Asset[];
  isLoading?: boolean;
  hasMoreAssets?: boolean;
  sort?: { type?: SortType | null; reverse?: boolean };
  searchTerm?: string;
  onGetMore?: () => void;
  onAssetUrlSelect?: (asset?: string) => void;
  onSelect?: (asset?: Asset) => void;
  onSortChange?: (type?: string, reverse?: boolean) => void;
};

const AssetContainer: React.FC<Props> = ({
  workspaceId,
  assets,
  selectedAssets,
  hasMoreAssets,
  isLoading,
  searchTerm,
  onGetMore,
  onAssetUrlSelect,
  onSelect,
}) => {
  const t = useT();
  const {
    deleteModalVisible,
    localSearchTerm,
    wrapperRef,
    onScrollToBottom,
    handleSearchInputChange,
    // iconChoice,
    // sortOptions,
    // handleReverse,
    handleSearch,
    openDeleteModal,
    closeDeleteModal,
    handleRemove,
  } = useHooks({ workspaceId: workspaceId, onAssetSelect: onAssetUrlSelect });

  const { handleFileSelect } = useFileUploaderHook({
    workspaceId: workspaceId,
    onAssetSelect: onAssetUrlSelect,
  });
  return (
    <Wrapper>
      <NavBar>
        <LeftSection>
          <SearchWarper>
            <TextInput value={localSearchTerm} onChange={handleSearchInputChange} />
            <Button size="small" icon="search" margin="0" onClick={handleSearch} />
          </SearchWarper>
          {/* TODO: Select Field 
          <AssetSelect<SortType>
            value={sort?.type ?? "date"}
            items={sortOptions}
            onChange={onSortChange}
          />
          TODO: Select Field 
          <StyledIcon icon={iconChoice} onClick={handleReverse} /> */}
        </LeftSection>
        <RightSection>
          <Button
            text={t("Upload file")}
            icon="uploadSimple"
            size="small"
            buttonType={"secondary"}
            onClick={handleFileSelect}
          />
          <Button
            text={t("Delete")}
            icon="bin"
            size="small"
            buttonType="secondary"
            disabled={selectedAssets?.length ? false : true}
            onClick={openDeleteModal}
          />
        </RightSection>
      </NavBar>

      <AssetWrapper>
        {!isLoading && (!assets || assets.length < 1) ? (
          <Template>
            <TemplateText size="body">
              {searchTerm
                ? t("No assets match your search.")
                : t(
                    "You haven't uploaded any assets yet. Click the upload button above and select a compatible file from your computer.",
                  )}
            </TemplateText>
          </Template>
        ) : (
          <AssetListWrapper
            ref={wrapperRef}
            onScroll={e => !isLoading && hasMoreAssets && onScrollToBottom(e, onGetMore)}>
            <AssetList>
              {assets?.map(a => (
                <AssetCard
                  key={a.id}
                  name={a.name}
                  icon={
                    checkIfFileType(a.url, FILE_FORMATS)
                      ? "file"
                      : checkIfFileType(a.url, IMAGE_FORMATS)
                      ? undefined
                      : "assetNoSupport"
                  }
                  url={a.url}
                  onSelect={() => onSelect?.(a)}
                  selected={selectedAssets?.includes(a)}
                />
              ))}
            </AssetList>
            {isLoading && <Loading />}
          </AssetListWrapper>
        )}
      </AssetWrapper>
      <AssetDeleteModal
        isVisible={deleteModalVisible}
        onClose={closeDeleteModal}
        handleRemove={handleRemove}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.smallest}px;
`;

const RightSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.smallest}px;
  flex-grow: 0;
`;

const SearchWarper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.micro}px;
`;

const AssetWrapper = styled.div`
  max-height: calc(100vh - 240px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AssetListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const AssetList = styled.div`
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, 144px);
  grid-template-rows: repeat(auto-fill, 119px);
  gap: ${({ theme }) => theme.spacing.normal}px;
  justify-content: space-between;
`;

const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 458px;
`;

const TemplateText = styled(Text)`
  text-align: center;
  width: 390px;
`;

export default AssetContainer;
