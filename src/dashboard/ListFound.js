import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table, Divider, Popover, Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Layout from "antd/lib/layout/layout";
import HeaderTitle from "../components/Header";
import SideNav from "./SideNav";

const ListFound = () => {
  const selector = useSelector((state) => state.reducers);
  const [foundList, setFoundList] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(selector);
  const getFoundData = async () => {
    const foundlist = await axios({
      url: "https://ymissing.herokuapp.com/api/admin/missing/found",
      method: "GET",
      headers: {
        apptoken: "App Token " + selector.token,
      },
    });
    // console.log(foundlist.data)
    setFoundList(foundlist.data);
    setLoading(false);
  };
  useEffect(() => {
    getFoundData();
  }, []);

  const content = (
    <div>
      <Button type="link">Delete</Button>
    </div>
  );
  return (
    <div>
      <HeaderTitle />
      <SideNav>
        <h1 className="missinglistsubmit">Found List</h1>
        <Divider />
        <Layout className="side-layout" style={{ marginLeft: 5 }}>
          {loading ? (
            "Please wait data is loading..."
          ) : (
            <>
              <Table
                size="large"
                bordered
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
                    render: (text) => (
                      <Popover
                        content={content}
                        placement="topLeft"
                        trigger="hover"
                      >
                        <Button>Actions</Button>
                      </Popover>
                    ),
                  },
                ]}
                dataSource={foundList.missing}
              ></Table>
            </>
          )}

          <br />
        </Layout>
      </SideNav>
    </div>
  );
};

export default ListFound;
