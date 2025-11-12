import { createGlobalStyle } from "styled-components";
import * as C from "./colors";
import * as SC from "./styledComponents";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100dvh;
    font-family: 'Roboto', sans-serif;
    background-color: #000;
  }

  html {
   scroll-behavior: smooth; 
  }
`;

export const SwalStyles = createGlobalStyle`
  .swal2-popup.custom-swal {
    ${SC.flexCenter};
    background: ${C.colors.white};
    color: ${C.colors.dark};
    border-radius: 12px;
    font-family: "Poppins", sans-serif;
  }

  .swal2-confirm.btn-confirm {
    background: ${C.colors.red};
    color: ${C.colors.white};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    border-radius: 8px;
    border: none; 
    box-shadow: none; 
    transition: background 0.2s ease;

    &:hover {
      background: ${C.colors.darkred};
    }

    &:focus {
      box-shadow: none;
    }
  }

  .swal2-cancel.btn-cancel {
    background: ${C.colors.gray};
    color: ${C.colors.white};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    border-radius: 8px;
    border: none;
    box-shadow: none;
    transition: background 0.2s ease;

    &:hover {
      background: ${C.colors.darkgray};
    }

    &:focus {
      box-shadow: none;
    }
  }

  .swal2-container,
  .swal2-popup {
    outline: none !important;
  }

  body.swal2-shown {
    padding-right: 0 !important; 
  }

  html.swal2-shown {
    overflow: hidden !important; 
  }

   .swal2-success {
    color: #28a745 !important; 
  }

  .swal2-error {
    color: #dc3545 !important;
  }

  .swal2-warning {
    color: #ffc107 !important; 
  }

  .swal2-info {
    color: #dc3545 !important; 
    border-color: #dc3545 !important;
  }
`;
