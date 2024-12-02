import ModeIcon from "@mui/icons-material/Mode";
import Chip from "@mui/material/Chip";

export default function DraftBadge(): JSX.Element {
  return (
    <Chip size="small" icon={<ModeIcon fontSize="small" />} label="下書き" />
  );
}
