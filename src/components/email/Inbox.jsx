/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Table } from "antd";
import { onShowSizeChange, itemRender } from "../Pagination";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
  pdficon,
  pdficon3,
  pdficon4,
  plusicon,
  refreshicon,
  searchnormal,
  imagesend,
} from "../imagepath"; // Ensure you have relevant icons for the inbox
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Inbox = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // Updated Data Source for Inbox
  const datasource = [
    {
      id: 1,
      email: "john.doe@example.com",
      subject: "Meeting Reminder",
      message: "Don't forget our meeting scheduled for tomorrow at 10 AM.",
      date: "2024-04-01",
    },
    {
      id: 2,
      email: "jane.smith@example.com",
      subject: "Project Update",
      message: "The project is progressing as per the timeline.",
      date: "2024-04-02",
    },
    {
      id: 3,
      email: "michael.brown@example.com",
      subject: "Invoice Attached",
      message: "Please find the attached invoice for last month's services.",
      date: "2024-04-03",
    },
    // Add more email entries as needed
  ];

  // Updated Columns for Inbox
  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      render: (text, record) => (
        <Link to={`mailto:${record.email}`}>{record.email}</Link>
      ),
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      sorter: (a, b) => a.subject.length - b.subject.length,
    },
    {
      title: "Message",
      dataIndex: "message",
      render: (text) => <span>{text.length > 50 ? `${text.substring(0, 50)}...` : text}</span>,
      sorter: (a, b) => a.message.length - b.message.length,
    },
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="text-end">
          <div className="dropdown dropdown-action">
            <Link
              to="#"
              className="action-icon dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to={`/view-email/${record.id}`}>
                <i className="far fa-eye me-2" />
                View
              </Link>
              <Link
                className="dropdown-item"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_email"
              >
                <i className="fa fa-trash-alt me-2"></i>
                Delete
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <Sidebar id="menu-item1" id1="menu-items1" activeClassName="inbox" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Inbox</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <i className="feather-chevron-right">
                      <FeatherIcon icon="chevron-right" />
                    </i>
                  </li>
                  <li className="breadcrumb-item active">Messages</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {/* Table Header */}
                    <div className="page-table-header mb-2">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="doctor-table-blk">
                            <h3>
                              Inbox
                            </h3>
                            <div className="doctor-search-blk">
                              <div className="top-nav-search table-search-blk">
                                <form>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by Email"
                                  />
                                  <Link className="btn">
                                    <img src={searchnormal} alt="#" />
                                  </Link>
                                </form>
                              </div>
                              <div className="add-group">
                                <Link
                                  to="#"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <img src={refreshicon} alt="#" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto text-end float-end ms-auto download-grp">
                          <Link to="#" className=" me-2">
                            <img src={pdficon} alt="#" />
                          </Link>
                          <Link to="#" className=" me-2"></Link>
                          <Link to="#" className=" me-2">
                            <img src={pdficon3} alt="#" />
                          </Link>
                          <Link to="#">
                            <img src={pdficon4} alt="#" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  {/* /Table Header */}
                  <div className="table-responsive inbox-list ">
                    <Table
                      pagination={{
                        total: datasource.length,
                        showTotal: (total, range) =>
                          `Showing ${range[0]} to ${range[1]} of ${total} emails`,
                        onShowSizeChange: onShowSizeChange,
                        itemRender: itemRender,
                        style: {padding: "16px"},
                      }}
                      columns={columns}
                      dataSource={datasource}
                      rowSelection={rowSelection}
                      rowKey={(record) => record.id}
                      style={{
                        backgroundColor: "#f9f9f9",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Box (Optional) */}
        <div className="notification-box">
          {/* ... (Keep this section if you need message notifications) */}
        </div>

        {/* Delete Email Modal */}
        <div
          id="delete_email"
          className="modal fade delete-modal"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <img src={imagesend} alt="Delete" width={50} height={46} />
                <h3>Are you sure you want to delete this email?</h3>
                <div className="m-t-20">
                  <Link
                    to="#"
                    className="btn btn-white me-2"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </Link>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Inbox;