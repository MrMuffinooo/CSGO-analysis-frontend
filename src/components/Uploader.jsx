import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useRef } from "react";
import { COLOR_SECONDARY } from "../utils/constans";

const UploadContainer = styled.div``;

const ChooseButton = styled.input`
  width: 100%;
`;

const TextInput = styled.input`
  width: 100%;
`;

const UploadButton = styled.button`
  display: block;
  width: 100%;
  height: 30px;
  border-radius: 0px;
`;
const ProgressBar = styled.div`
  height: 20px;
  width: 0;
  background-color: ${COLOR_SECONDARY};

  transition-property: width;
  transition-timing-function: linear;
  transition-duration: 200ms;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
`;

const ProgressContainer = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;
const PercentageContainer = styled.div`
  height: 15px;
  text-align: center;
  position: relative;
  font-size: 15px;
  line-height: 15px;
  background-color: white;
  padding: 1px 5px;

  color: black;
  font-weight: bold;
  z-index: 1;
`;

export function Uploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const textRef = useRef();
  const fileRef = useRef();

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const onUploadProgress = (event) => {
    setPercentage(Math.round((100 * event.loaded) / event.total));
  };

  const handleSubmit = async (event) => {
    const address = "https://apimocha.com/cscs/post";
    // const address = name ? `<adres>/upload/${name}/` : `<adres>/upload/`
    setErr("");
    if (!selectedFile) {
      textRef.current.value = "Musisz wybrać plik";
      return;
    }
    textRef.current.value = "";
    fileRef.current.value = "";
    setIsDisabled(true);
    try {
      await axios.post(
        address,
        {
          file: selectedFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress,
        }
      );
    } catch (err) {
      setErr(err);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <UploadContainer>
      <TextInput
        ref={textRef}
        type={"text"}
        placeholder={"Nazwa"}
        onChange={handleNameChange}
      />
      <ChooseButton
        ref={fileRef}
        type={"file"}
        accept={".dem, .png"}
        onChange={handleFileSelect}
        required
      />

      <UploadButton onClick={handleSubmit} disabled={isDisabled}>
        Wyślij
      </UploadButton>
      <ProgressContainer>
        <ProgressBar style={{ width: `${percentage}%` }} />
        <PercentageContainer>{percentage}%</PercentageContainer>
      </ProgressContainer>
      {err && <div>{err}</div>}
    </UploadContainer>
  );
}
