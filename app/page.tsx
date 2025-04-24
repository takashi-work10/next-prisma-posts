import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box 
      sx={{
        p: 2.5,
        textAlign: "center",
        background: "linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontFamily: "'Comic Sans Ms', cursive, sans-serif",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2.5,
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          maxWidth: "600px",
          p: 5,
          margin: "20vh auto 30vh auto",
        }}
      >
        <Typography component="h1" variant="h4">診断テスト</Typography>
        <Typography component="p" variant="body1">診断テストへようこそ</Typography>
          <Button
            component={Link}
            href="/diagnosis"
            variant="contained"
            sx={{
              fontSize: "24px",
              backgroundColor: "#CF9FFF",
              color: "#fff",
              padding: "10px 30px",
              borderRadius: "30px",
              textTransform: "none",
              textDecoration: "none"
            }}
          >
            診断テストを始める
          </Button>
      </Box>
    </Box>
  );
}