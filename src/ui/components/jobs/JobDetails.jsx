import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { Grid, Typography } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import { useSnackbar } from "notistack";
// import useToken from "../../utils/useToken";

// const api = axios.create({
//   baseURL: `http://127.0.0.1:5000/`,
// });

export default function TabBar() {
  const [job, setJob] = useState({ jobName: "", clientId: "", site_id: "" });
  const [site, setSite] = useState({
    siteName: "",
    siteAddressStreet: "",
    siteAddressTown: "",
    sitePostcode: "",
    siteAddressCounty: "",
    siteContact: "",
    siteTelephone: "",
    siteEmail: "",
    client_id: 1,
  });
  const [client, setClient] = useState({
    clientName: "",
    addressStreet: "",
    addressTown: "",
    addressPostcode: "",
    addressCounty: "",
    clientContact: "",
    telephone: "",
    email: "",
    company_id: 1,
    clientId: 0,
  });
//   let query = useQuery();
//   const { enqueueSnackbar } = useSnackbar();
//   const { token } = useToken();
  

//   useEffect(() => {
//     const jobIdUrl = getJobIdFromUrl();
//     if (jobIdUrl) {
//       axios({
//         method: "GET",
//         url:  "/job/" + jobIdUrl + "/",
//         headers: {
//           Authorization: "Bearer " + token, ////need to pass the token into JobDetails same as homepage
//         },
//       })
//         .then((res) => {
//           setJob(res.data)
//           setSite(res.data.sites)
//         })
//         .catch(() => {
//           console.log("Error");
//         });
//       //eslint-disable-next-line
//     }

//     }, []);

//   useEffect(() => {
//     if (job.clientId > 0) {
//       api.get("client/" + job.clientId + "/").then((res) => {
//         setClient(res.data);
//       });
//     }
//   }, [job]);

//   function useQuery() {
//     ///this pulls out the search param of the url
//     return new URLSearchParams(useLocation().search);
//   }

//   function getJobIdFromUrl() {
//     const jobIdUrll = query.get("job_id");
//     return jobIdUrll;
//   }

  const handleChange = (event) => {
    // setClient({
    //   ...client,
    //   [event.target.name]: event.target.value,
    // });
    // setSite({
    //   ...site,
    //   [event.target.name]: event.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Sending both the client and site updates at the same time
    // const updateClientPromise = api.patch("/client/" + job.clientId + "/", {
    //   ...client,
    // });
    // const updateSitePromise = api.patch("/site/" + job.site_id + "/", {
    //   ...site,
    // });
    // Promise.all([updateClientPromise, updateSitePromise])
    //   .then(function () {
    //     enqueueSnackbar(
    //       "Client " + client.clientName + " has been saved successfully",
    //       { variant: "success" }
    //     );
    //   })
    //   .catch(function () {
    //     enqueueSnackbar(
    //       "Client " + client.clientName + " has not saved successfully",
    //       { variant: "error" }
    //     );
    //   });
  };

  return (
    <Box style={{ backgroundColor: "white" }}>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6} style={{ marginTop: 10 }}>
            <Typography variant="h6" style={{ paddingLeft: 16 }}>
              Client Details
            </Typography>
            <Grid style={{ padding: 16 }}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formDetailsClientName"
              >
                <Form.Label column sm="3">
                  Client Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    label="Client Name"
                    name="clientName"
                    type="text"
                    value={client.clientName}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label column sm="3">
                    Street Address
                  </Form.Label>
                  <Col xs={7}>
                    <Form.Control
                      name="addressStreet"
                      value={client.addressStreet}
                      className="mb-3"
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label column sm="3">
                    City
                  </Form.Label>
                  <Col xs={5}>
                    <Form.Control
                      placeholder=""
                      className="mb-3"
                      name="addressTown"
                      value={client.addressTown}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label column sm="3">
                    County
                  </Form.Label>
                  <Col xs={4}>
                    <Form.Control
                      id="county"
                      name="addressCounty"
                      value={client.addressCounty}
                      onChange={handleChange}
                    />
                  </Col>
                  <Form.Label column>Postcode</Form.Label>
                  <Col>
                    <Form.Control
                      id="postcode"
                      name="addressPostcode"
                      value={client.addressPostcode}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row style={{ marginTop: 50 }}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 600, marginBottom: 15 }}
                  >
                    Contact Information
                  </Typography>
                </Row>
                <Form.Group className="mb-3">
                  <Row>
                    <Form.Label column sm="3">
                      Name
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="mb-3"
                        id="clientContact"
                        name="clientContact"
                        value={client.clientContact}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label column sm="3">
                      Contact Email
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="mb-3"
                        id="email"
                        name="email"
                        value={client.email}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label column sm="3">
                      Contact Number
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="mb-3"
                        id="telephone"
                        name="telephone"
                        value={client.telephone}
                        onChange={handleChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Form.Group>
            </Grid>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 10 }}>
            <Typography variant="h6" style={{ paddingLeft: 16 }}>
              Site Details
            </Typography>
            <Grid style={{ padding: 16 }}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formDetailsSiteName"
              >
                <Form.Label column sm="3">
                  Site Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    label="site Name"
                    name="siteName"
                    value={site.siteName}
                    onChange={handleChange}
                    type="text"
                  />
                </Col>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label column sm="3">
                    Street Address
                  </Form.Label>
                  <Col xs={7}>
                    <Form.Control
                      placeholder=""
                      className="mb-3"
                      name="siteAddressStreet"
                      value={site.siteAddressStreet}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label column sm="3">
                    City
                  </Form.Label>
                  <Col xs={5}>
                    <Form.Control
                      placeholder=""
                      className="mb-3"
                      name="siteAddressTown"
                      value={site.siteAddressTown}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row>
                  <Form.Label column sm="3">
                    County
                  </Form.Label>
                  <Col xs={4}>
                    <Form.Control
                      value={site.siteAddressCounty}
                      onChange={handleChange}
                      name="siteAddressCounty"
                    ></Form.Control>
                  </Col>
                  <Form.Label column>Postcode</Form.Label>
                  <Col>
                    <Form.Control
                      value={site.sitePostcode}
                      onChange={handleChange}
                      name="sitePostcode"
                    ></Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Row style={{ marginTop: 50 }}>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 600, marginBottom: 15 }}
                  >
                    Contact Information
                  </Typography>
                </Row>
                <Form.Group className="mb-3">
                  <Row>
                    <Form.Label column sm="3">
                      Name
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="mb-3"
                        value={site.siteContact}
                        id="siteContact"
                        onChange={handleChange}
                        name="siteContact"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label column sm="3">
                      Contact Email
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="mb-3"
                        value={site.siteEmail}
                        id="email"
                        onChange={handleChange}
                        name="siteEmail"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Form.Label column sm="3">
                      Contact Number
                    </Form.Label>
                    <Col>
                      <Form.Control
                        className="mb-3"
                        value={site.siteTelephone}
                        onChange={handleChange}
                        name="siteTelephone"
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Form.Group>
              <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
