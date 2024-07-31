import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Tooltip,
  IconButton,
  ButtonGroup,
  Box,
  Select,
  Text,
} from "@chakra-ui/react";
import { checkRegex, fileNamePattern } from "@/regex";
import { AddIcon } from "@chakra-ui/icons";
import CustomToast from '@/components/ToastCustom/CustomToast';
import GenericModal from "../GenericModal";

interface AddFileProps {
  addFile?: (fileName: string) => void;
}

const AddFile: React.FC<AddFileProps> = ({ addFile }) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [nameFile, setNameFile] = useState<string>("");
  const [extentionFile, setExtentionFile] = useState<string>("");

  const { showAlert } = CustomToast();
  // const handleSubmit: (event: React.FormEvent) => void = (event: React.FormEvent) => {
  //   event.preventDefault();

  //   if (!checkRegex(fileNamePattern, fileName)) {
  //     setError(
  //       "File name must be in the format 'name.extension' and the extension must be js, css, or html."
  //     );
  //     return;
  //   }

  //   addFile(fileName);
  //   setFileName("");
  //   setError("");
  // };

  const openModal: () => void  = () => {
    setIsModalOpen(true);
  };

  const closeModal: () => void  = () => {
    setIsModalOpen(false);
  };

  const handleClick: () => void  = () => {
    // console.log("add file")
    if (!nameFile || !extentionFile )
      return showAlert("error", "Please complete all fields in the form!");

    
  };

  return (
    <>
      <Tooltip label={"Add file"} bgColor={"grey"} color={"text"}>
        <IconButton
          size={"xs"}
          aria-label="Edit file"
          variant={"ghost"}
          icon={<AddIcon boxSize={3} />}
          onClick={openModal}
        />
      </Tooltip>
      <GenericModal isOpen={isModalOpen} onClose={closeModal} title="Created file">
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Box width="100%" maxWidth="250px">
            <Text color="white" mb={2}>
              Enter Name of the File 
            </Text>
            <Input 
              color="black"
              bg="white"
              type='text'
              name='emailOrPseudo'
              value={nameFile}
              onChange={(e) => setNameFile(e.target.value)} 
              mb={2}
              />
            <Text color="white" mb={2}>
              Language
            </Text>
            <Select
              size="sm"
              width="100%"
              value={extentionFile}
              onChange={(e) => setExtentionFile(e.target.value)}
              bg="white"
              color="black"
              borderRadius={5}
              mb={20}
            >
              <option value="">Select Language</option>
              <option value="js">JavaScript</option>
              <option value="css">CSS</option>
              <option value="html">HTML</option>
            </Select>
            <ButtonGroup spacing={5} mt={4} display="flex" justifyContent="center">
              <Button type="button" variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button type="button" variant="secondary" onClick={handleClick}>
                Update File
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </GenericModal>
    </>
  );
};

export default AddFile;