import * as React from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import CSS from "csstype"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  borderRadius: "4.5px",
  p: 4,
  padding: "30px 20px",
  backgroundColor: "#fff",
}

interface Props {
  styles?: CSS.Properties
  children?: JSX.Element
  isModalOpen: boolean
  closeModal?: () => void
  width?: string
}

export default function BasicModal(props: Props) {
  const { children, isModalOpen, closeModal } = props
  const { width } = props

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={style}
        style={{
          width: width,
        }}
      >
        {children}
      </Box>
    </Modal>
  )
}
