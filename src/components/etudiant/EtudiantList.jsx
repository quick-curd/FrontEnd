/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import {Table} from "antd";
import {onShowSizeChange, itemRender} from "../Pagination";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
    imagesend,
    pdficon,
    pdficon3,
    pdficon4,
    plusicon,
    refreshicon,
    searchnormal,
} from "../imagepath";
import {useState} from "react";
import {Link} from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import {BACKEND_URL} from "../../config";

const EtudiantList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [datasource, setDatasource] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const onChange = (date, dateString) => {
        // console.log(date, dateString);
    };

    useEffect(() => {
        // Fetch the list of Etudiant entities
        fetch(BACKEND_URL + '/api/etudiants')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log('List of Etudiants:', data);
                setDatasource(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

    }, [])

    const columns = [
        {
            title: "NO_ETUDIANT_NAT",
            dataIndex: "NO_ETUDIANT_NAT",
            render: (text, record) => (
                <>
                    <h2 className="profile-image">
                        <Link to="#" className="avatar avatar-sm me-2">
                            <img
                                className="avatar-img rounded-circle"
                                src={record.Img}
                                alt="User Image"
                            />
                        </Link>
                        <Link to="#">{record.NO_ETUDIANT_NAT}</Link>
                    </h2>
                </>
            ),
            sorter: (a, b) => a.NO_ETUDIANT_NAT.length - b.NO_ETUDIANT_NAT.length,
        },
        {
            title: "ANNEE_PRO",
            dataIndex: "ANNEE_PRO",
            sorter: (a, b) => a.ANNEE_PRO.length - b.ANNEE_PRO.length,
        },
        {
            title: "CODE_COM",
            dataIndex: "CODE_COM",
            sorter: (a, b) => a.CODE_COM.length - b.CODE_COM.length,
        },
        {
            title: "NO_ETUDIANT_UBO",
            dataIndex: "NO_ETUDIANT_UBO",
            sorter: (a, b) => a.NO_ETUDIANT_UBO.length - b.NO_ETUDIANT_UBO.length,
        },
        {
            title: "SEXE",
            dataIndex: "SEXE",
            sorter: (a, b) => a.SEXE.length - b.SEXE.length,
        },
        {
            title: "NOM",
            dataIndex: "NOM",
            sorter: (a, b) => a.NOM.length - b.NOM.length,
        },
        {
            title: "PRENOM",
            dataIndex: "PRENOM",
            sorter: (a, b) => a.PRENOM.length - b.PRENOM.length,
        },
        {
            title: "DATE_NAISSANCE",
            dataIndex: "DATE_NAISSANCE",
            sorter: (a, b) => a.DATE_NAISSANCE.length - b.DATE_NAISSANCE.length,
        }, {
            title: "LIEU_NAISSANCE",
            dataIndex: "LIEU_NAISSANCE",
            sorter: (a, b) => a.LIEU_NAISSANCE.length - b.LIEU_NAISSANCE.length,
        }, {
            title: "SITUATION",
            dataIndex: "SITUATION",
            sorter: (a, b) => a.SITUATION.length - b.SITUATION.length,
        }, {
            title: "NATIONALITE",
            dataIndex: "NATIONALITE",
            sorter: (a, b) => a.NATIONALITE.length - b.NATIONALITE.length,
        }, {
            title: "TEL_PORT",
            dataIndex: "TEL_PORT",
            sorter: (a, b) => a.TEL_PORT.length - b.TEL_PORT.length,
        }, {
            title: "TEL_FIXE",
            dataIndex: "TEL_FIXE",
            sorter: (a, b) => a.TEL_FIXE.length - b.TEL_FIXE.length,
        }, {
            title: "EMAIL",
            dataIndex: "EMAIL",
            sorter: (a, b) => a.EMAIL.length - b.EMAIL.length,
        }, {
            title: "ACTU_ADRESSE",
            dataIndex: "ACTU_ADRESSE",
            sorter: (a, b) => a.ACTU_ADRESSE.length - b.ACTU_ADRESSE.length,
        }, {
            title: "ACTU_CP",
            dataIndex: "ACTU_CP",
            sorter: (a, b) => a.ACTU_CP.length - b.ACTU_CP.length,
        },
        {
            title: "ACTU_PAYS",
            dataIndex: "ACTU_PAYS",
            sorter: (a, b) => a.ACTU_PAYS.length - b.ACTU_PAYS.length,
        },
        {
            title: "PERM_ADRESSE",
            dataIndex: "PERM_ADRESSE",
            sorter: (a, b) => a.PERM_ADRESSE.length - b.PERM_ADRESSE.length,
        },
        {
            title: "PERM_CP",
            dataIndex: "PERM_CP",
            sorter: (a, b) => a.PERM_CP.length - b.PERM_CP.length,
        },
        {
            title: "ACTU_CP",
            dataIndex: "ACTU_CP",
            sorter: (a, b) => a.ACTU_CP.length - b.ACTU_CP.length,
        },
        {
            title: "PERM_VILLE",
            dataIndex: "PERM_VILLE",
            sorter: (a, b) => a.PERM_VILLE.length - b.PERM_VILLE.length,
        },
        {
            title: "PERM_PAYS",
            dataIndex: "PERM_PAYS",
            sorter: (a, b) => a.PERM_PAYS.length - b.PERM_PAYS.length,
        }, {
            title: "DERNIER_DIPLOME",
            dataIndex: "DERNIER_DIPLOME",
            sorter: (a, b) => a.DERNIER_DIPLOME.length - b.DERNIER_DIPLOME.length,
        }, {
            title: "UNIVERSITE",
            dataIndex: "UNIVERSITE",
            sorter: (a, b) => a.UNIVERSITE.length - b.UNIVERSITE.length,
        }, {
            title: "SIGLE_ETU",
            dataIndex: "SIGLE_ETU",
            sorter: (a, b) => a.SIGLE_ETU.length - b.SIGLE_ETU.length,
        }, {
            title: "COMPTE_CRI",
            dataIndex: "COMPTE_CRI",
            sorter: (a, b) => a.COMPTE_CRI.length - b.COMPTE_CRI.length,
        }, {
            title: "UBO_EMAIL",
            dataIndex: "UBO_EMAIL",
            sorter: (a, b) => a.UBO_EMAIL.length - b.UBO_EMAIL.length,
        }, {
            title: "GRPE_ANGLAIS",
            dataIndex: "GRPE_ANGLAIS",
            sorter: (a, b) => a.GRPE_ANGLAIS.length - b.GRPE_ANGLAIS.length,
        }, {
            title: "ABANDON_MOTIF",
            dataIndex: "ABANDON_MOTIF",
            sorter: (a, b) => a.ABANDON_MOTIF.length - b.ABANDON_MOTIF.length,
        },
        {
            title: "ABANDON_DATE",
            dataIndex: "ABANDON_DATE",
            sorter: (a, b) => a.ABANDON_DATE.length - b.ABANDON_DATE.length,
        }, {
            title: "EST_DIPLOME",
            dataIndex: "EST_DIPLOME",
            sorter: (a, b) => a.EST_DIPLOME.length - b.EST_DIPLOME.length,
        },
        {
            title: "",
            dataIndex: "FIELD8",
            render: (text, record) => (
                <>
                    <div className="text-end">
                        <div className="dropdown dropdown-action">
                            <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v"/>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                                <Link className="dropdown-item" to="/editdoctor">
                                    <i className="far fa-edit me-2"/>
                                    Edit
                                </Link>
                                <Link
                                    className="dropdown-item"
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_patient"
                                >
                                    <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <Header/>
            <Sidebar
                id="menu-item1"
                id1="menu-items1"
                activeClassName="doctor-list"
            />
            <>
                <div className="page-wrapper">
                    <div className="content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="#">Doctors </Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <i className="feather-chevron-right">
                                                <FeatherIcon icon="chevron-right"/>
                                            </i>
                                        </li>
                                        <li className="breadcrumb-item active">Doctors List</li>
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
                                                        <h3>Doctors List</h3>
                                                        <div className="doctor-search-blk">
                                                            <div className="top-nav-search table-search-blk">
                                                                <form>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        placeholder="Search here"
                                                                    />
                                                                    <Link className="btn">
                                                                        <img src={searchnormal} alt="#"/>
                                                                    </Link>
                                                                </form>
                                                            </div>
                                                            <div className="add-group">
                                                                <Link
                                                                    to="/add-doctor"
                                                                    className="btn btn-primary add-pluss ms-2"
                                                                >
                                                                    <img src={plusicon} alt="#"/>
                                                                </Link>
                                                                <Link
                                                                    to="#"
                                                                    className="btn btn-primary doctor-refresh ms-2"
                                                                >
                                                                    <img src={refreshicon} alt="#"/>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto text-end float-end ms-auto download-grp">
                                                    <Link to="#" className=" me-2">
                                                        <img src={pdficon} alt="#"/>
                                                    </Link>
                                                    <Link to="#" className=" me-2"></Link>
                                                    <Link to="#" className=" me-2">
                                                        <img src={pdficon3} alt="#"/>
                                                    </Link>
                                                    <Link to="#">
                                                        <img src={pdficon4} alt="#"/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Table Header */}
                                        <div className="table-responsive doctor-list">
                                            <Table
                                                pagination={{
                                                    total: datasource.length,
                                                    showTotal: (total, range) =>
                                                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                                                    // showSizeChanger: true,
                                                    onShowSizeChange: onShowSizeChange,
                                                    itemRender: itemRender,
                                                }}
                                                columns={columns}
                                                dataSource={datasource}
                                                rowSelection={rowSelection}
                                                rowKey={(record) => record.id}
                                                style={{
                                                    backgroundColor: "#f2f2f2", // Replace with your desired background color for the table
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="notification-box">
                        <div className="msg-sidebar notifications msg-noti">
                            <div className="topnav-dropdown-header">
                                <span>Messages</span>
                            </div>
                            <div className="drop-scroll msg-list-scroll" id="msg_list">
                                <ul className="list-box">
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">R</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Richard Miles </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item new-message">
                                                <div className="list-left">
                                                    <span className="avatar">J</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">John Doe</span>
                                                    <span className="message-time">1 Aug</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">T</span>
                                                </div>
                                                <div className="list-body">
                          <span className="message-author">
                            {" "}
                              Tarah Shropshire{" "}
                          </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">M</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Mike Litorus</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">C</span>
                                                </div>
                                                <div className="list-body">
                          <span className="message-author">
                            {" "}
                              Catherine Manseau{" "}
                          </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">D</span>
                                                </div>
                                                <div className="list-body">
                          <span className="message-author">
                            {" "}
                              Domenic Houston{" "}
                          </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">B</span>
                                                </div>
                                                <div className="list-body">
                          <span className="message-author">
                            {" "}
                              Buster Wigton{" "}
                          </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">R</span>
                                                </div>
                                                <div className="list-body">
                          <span className="message-author">
                            {" "}
                              Rolland Webber{" "}
                          </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">C</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author"> Claire Mapes </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">M</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Melita Faucher</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">J</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Jeffery Lalor</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">L</span>
                                                </div>
                                                <div className="list-body">
                                                    <span className="message-author">Loren Gatlin</span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="list-item">
                                                <div className="list-left">
                                                    <span className="avatar">T</span>
                                                </div>
                                                <div className="list-body">
                          <span className="message-author">
                            Tarah Shropshire
                          </span>
                                                    <span className="message-time">12:28 AM</span>
                                                    <div className="clearfix"/>
                                                    <span className="message-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                          </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <Link to="#">See all messages</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="delete_patient"
                    className="modal fade delete-modal"
                    role="dialog"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <img src={imagesend} alt="#" width={50} height={46}/>
                                <h3>Are you sure want to delete this ?</h3>
                                <div className="m-t-20">
                                    {" "}
                                    <Link
                                        to="#"
                                        className="btn btn-white me-2"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </Link>
                                    <button type="submit" className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="delete_patient"
                        className="modal fade delete-modal"
                        role="dialog"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body text-center">
                                    <img src={imagesend} alt="#" width={50} height={46}/>
                                    <h3>Are you sure want to delete this ?</h3>
                                    <div className="m-t-20">
                                        {" "}
                                        <Link
                                            to="#"
                                            className="btn btn-white me-2"
                                            data-bs-dismiss="modal"
                                        >
                                            Close
                                        </Link>
                                        <button type="submit" className="btn btn-danger">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <></>
        </>
    );
};

export default EtudiantList;
