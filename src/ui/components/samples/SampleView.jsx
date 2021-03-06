import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import Typography from "@mui/material/Typography";
import Grid from "@material-ui/core/Grid";

export default function SampleView() {
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
    console.log(nodeIds); ///nodeIds are the ordered number list you click
  };
  console.log(selected)

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

  return (
    <Box sx={{ height: 270, flexGrow: 1, overflowY: "auto" }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
      </Box>
      <Grid container>
        <Grid item xs={3}>
          <TreeView
            aria-label="controlled"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            expanded={expanded}
            selected={selected}
            onNodeToggle={handleToggle}
            onNodeSelect={handleSelect}
            multiSelect
          >
            <TreeItem nodeId="1" label="Ground Floor">
              <TreeItem nodeId="2" label="Sample 1 " />
              <TreeItem nodeId="3" label="Sample 2" />
              <TreeItem nodeId="4" label="Sample 3" />
            </TreeItem>
            <TreeItem nodeId="5" label="First Floor">
              <TreeItem nodeId="6" label="Flat Roof">
                <TreeItem nodeId="7" label="No asbestos found">
                  <TreeItem nodeId="8" label="Asbestos found" />
                  <TreeItem nodeId="9" label="Asbestos not found" />
                </TreeItem>
              </TreeItem>
            </TreeItem>
          </TreeView>
        </Grid>
        <Grid item xs={9} style={{padding: 2}}>
          <form>
            <label for="exampleInputEmail1">Example Sample Form</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            ></input>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
