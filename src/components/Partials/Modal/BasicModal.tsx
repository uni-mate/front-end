import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "4.5px",
  p: 4,
  padding: "30px 20px",
  zIndex: 9999,
}

interface Props {
  children?: JSX.Element
  isModalOpen: boolean
  closeModal?: () => void
  width?: string
  height?: string
  backgroundColor?: string
  boxShadow?: number
  padding?: string
  borderRadius?: string
}

export default function BasicModal(props: Props) {
  const { children, isModalOpen, closeModal } = props
  const { width, height, backgroundColor, boxShadow, padding } = props
  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          backgroundColor,
          boxShadow,
          padding,
        }}
        style={{
          width: width,
          height: height,
          zIndex: 9999,
        }}
      >
        {children}
      </Box>
    </Modal>
  )
}
