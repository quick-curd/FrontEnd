/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import {Table} from "antd";
import {onShowSizeChange, itemRender} from "../Pagination";
import Header from "../Header";
import Sidebar from "../Sidebar";
import {
    imagesend, pdficon, pdficon3, pdficon4, plusicon, refreshicon, searchnormal,
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
        selectedRowKeys, onChange: onSelectChange,
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

    const columns = [{
        title: "NO_ETUDIANT_NAT", dataIndex: "noEtudiantNat", render: (text, record) => (<>
                <h2 className="profile-image">
                    <Link to="#" className="avatar avatar-sm me-2">
                        <img
                            className="avatar-img rounded-circle"
                            src={record.Img}
                            alt="User Image"
                        />
                    </Link>
                    <Link to="#">{record.noEtudiantNat}</Link>
                </h2>
            </>), sorter: (a, b) => a.noEtudiantNat.length - b.noEtudiantNat.length,
    }, {
        title: "ANNEE_PRO", dataIndex: "anneePro", sorter: (a, b) => a.anneePro.length - b.anneePro.length,
    }, {
        title: "CODE_COM", dataIndex: "codeCom", sorter: (a, b) => a.codeCom.length - b.codeCom.length,
    }, {
        title: "NO_ETUDIANT_UBO",
        dataIndex: "noEtudiantUbo",
        sorter: (a, b) => a.noEtudiantUbo.length - b.noEtudiantUbo.length,
    }, {
        title: "SEXE", dataIndex: "sexe", sorter: (a, b) => a.sexe.length - b.sexe.length,
    }, {
        title: "NOM", dataIndex: "nom", sorter: (a, b) => a.nom.length - b.nom.length,
    }, {
        title: "PRENOM", dataIndex: "prenom", sorter: (a, b) => a.prenom.length - b.prenom.length,
    }, {
        title: "DATE_NAISSANCE",
        dataIndex: "dateNaissance",
        sorter: (a, b) => a.dateNaissance.length - b.dateNaissance.length,
    }, {
        title: "LIEU_NAISSANCE",
        dataIndex: "lieuNaissance",
        sorter: (a, b) => a.lieuNaissance.length - b.lieuNaissance.length,
    }, {
        title: "SITUATION", dataIndex: "situation", sorter: (a, b) => a.situation.length - b.situation.length,
    }, {
        title: "NATIONALITE", dataIndex: "nationalite", sorter: (a, b) => a.nationalite.length - b.nationalite.length,
    }, {
        title: "TEL_PORT", dataIndex: "telPort", sorter: (a, b) => a.telPort.length - b.telPort.length,
    }, {
        title: "TEL_FIXE", dataIndex: "telFixe", sorter: (a, b) => a.telFixe.length - b.telFixe.length,
    }, {
        title: "EMAIL", dataIndex: "email", sorter: (a, b) => a.email.length - b.email.length,
    }, {
        title: "ACTU_ADRESSE", dataIndex: "actuAdresse", sorter: (a, b) => a.actuAdresse.length - b.actuAdresse.length,
    }, {
        title: "ACTU_CP", dataIndex: "actuCp", sorter: (a, b) => a.actuCp.length - b.actuCp.length,
    }, {
        title: "ACTU_PAYS", dataIndex: "actuPays", sorter: (a, b) => a.actuPays.length - b.actuPays.length,
    }, {
        title: "PERM_ADRESSE", dataIndex: "permAdresse", sorter: (a, b) => a.permAdresse.length - b.permAdresse.length,
    }, {
        title: "PERM_CP", dataIndex: "permCp", sorter: (a, b) => a.permCp.length - b.permCp.length,
    }, {
        title: "PERM_VILLE", dataIndex: "permVille", sorter: (a, b) => a.permVille.length - b.permVille.length,
    }, {
        title: "PERM_PAYS", dataIndex: "permPays", sorter: (a, b) => a.permPays.length - b.permPays.length,
    }, {
        title: "DERNIER_DIPLOME",
        dataIndex: "dernierDiplome",
        sorter: (a, b) => a.dernierDiplome.length - b.dernierDiplome.length,
    }, {
        title: "UNIVERSITE", dataIndex: "universite", sorter: (a, b) => a.universite.length - b.universite.length,
    }, {
        title: "SIGLE_ETU", dataIndex: "sigleEtu", sorter: (a, b) => a.sigleEtu.length - b.sigleEtu.length,
    }, {
        title: "COMPTE_CRI", dataIndex: "compteCri", sorter: (a, b) => a.compteCri.length - b.compteCri.length,
    }, {
        title: "UBO_EMAIL", dataIndex: "uboEmail", sorter: (a, b) => a.uboEmail.length - b.uboEmail.length,
    }, {
        title: "GRPE_ANGLAIS", dataIndex: "grpeAnglais", sorter: (a, b) => a.grpeAnglais.length - b.grpeAnglais.length,
    }, {
        title: "ABANDON_MOTIF",
        dataIndex: "abandonMotif",
        sorter: (a, b) => a.abandonMotif.length - b.abandonMotif.length,
    }, {
        title: "ABANDON_DATE", dataIndex: "abandonDate", sorter: (a, b) => a.abandonDate.length - b.abandonDate.length,
    }, {
        title: "EST_DIPLOME", dataIndex: "estDiplome", sorter: (a, b) => a.estDiplome.length - b.estDiplome.length,
    }, {
        title: "", dataIndex: "FIELD8", render: (text, record) => (<>
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
            </>),
    },];
    return (<>
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
                                                    showTotal: (total, range) => `Showing ${range[0]} to ${range[1]} of ${total} entries`, // showSizeChanger: true,
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
        </>);
};

export default EtudiantList;
