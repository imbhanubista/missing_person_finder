import { Table, Divider, Popover, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Layout from "antd/lib/layout/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { handleMarkFound } from "../apiHandlingService";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";

const MissingSubmitted = () => {
  const [loading, setLoading] = useState(true);
  // to store data coming from the api
  const [storeSubmitted, setStoreSubmitted] = useState({});
  // navigate to redirect to list Found
  const nav = useNavigate();
  // state to make clear that the "mark as found" button is trigger
  const [markLoad, setMarkLoad] = useState(false);
  const selector = useSelector((state) => state.reducers);
  const getData = async () => {
    let missingApi = await axios({
      url: "https://ymissing.herokuapp.com/api/admin/missing/submitted",
      method: "GET",
      headers: {
        apptoken: "App Token " + selector.token,
      },
    });
    setStoreSubmitted(missingApi.data);
    console.log(missingApi.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  // to handle "mark as found" button
  const handleFound = async (id) => {
    setMarkLoad(true);
    let getFound =  await handleMarkFound(id)
    // const getFound = await axios({
    //   url: `https://ymissing.herokuapp.com/api/admin/found/${id}`,
    //   method: "GET",
    //   headers: {
    //     apptoken: "App Token " + selector.token,
    //   },
    // });
    if (getFound.type === "error") {
      Swal.fire("Error", getFound.msg, "error");
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: getFound.msg,
        showConfirmButton: false,
        timer: 1500,
        toast: "true",
      });
      setMarkLoad(false);
      nav("/listfound");
      getData();
    }
  };
  const handleContent = (row) => {
    return (
      <div>
        {/* row le chai particular row ko data dinxa  */}
        <Button type="link" onClick={() => handleFound(row._id)}>
          <strong>Mark Found</strong>
        </Button>
        <Button type="link">
          <strong>Delete</strong>
        </Button>
      </div>
    );
  };

  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <h1 className="missinglistsubmit">Submitted List</h1>
        {markLoad ? (
          "Your data is fetching "
        ) : (
          <>
            <Divider />
            <Layout className="side-layout" style={{ marginLeft: 5 }}>
              {loading ? (
                "Please wait data is loading..."
              ) : (
                <>
                  <Table
                    size="large"
                    bordered
                    scroll={{ x: 1500 }}
                    columns={[
                      {
                        title: "Picture",
                        dataIndex: "image",
                        key: "image",
                        render: (data) => <Avatar src={data} />,
                      },
                      {
                        title: "Name",
                        dataIndex: "name",
                        key: "name",
                      },

                      {
                        title: "Contact Name",
                        dataIndex: "contact_person",
                        key: "contact_person",
                      },
                      {
                        title: "Contact Number",
                        dataIndex: "contact_number",
                        key: "contact_number",
                      },
                      {
                        title: "Submitter IP",
                        dataIndex: "ip",
                        key: "ip",
                      },
                      {
                        title: "Submitter Details",
                        dataIndex: "submitterDetails",
                        key: "submitterDetails",
                      },
                      {
                        title: "Similarity",
                        dataIndex: "similarity",
                        key: "similarity",
                      },
                      {
                        title: "Location",
                        dataIndex: "location",
                        key: "location",
                      },
                      {
                        title: "Created By",
                        dataIndex: "firstname",
                        key: "firstname",
                      },
                      {
                        title: "Status",
                        dataIndex: "status",
                        key: "status",
                      },
                      {
                        title: "Created On",
                        dataIndex: "date",
                        key: "date",
                      },
                      {
                        title: "Actions",
                        key: "actions",
                        render: (text, row) => (
                          <Popover
                            content={() => handleContent(row)}
                            placement="topLeft"
                            trigger="hover"
                          >
                            <Button>Actions</Button>
                          </Popover>
                        ),
                      },
                    ]}
                    dataSource={storeSubmitted.missing}
                  ></Table>
                </>
              )}

              <br />
            </Layout>
          </>
        )}
      </SideNav>
    </div>
  );
};

export default MissingSubmitted;
