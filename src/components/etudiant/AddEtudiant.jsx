import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { DatePicker } from "antd";
import { Link } from 'react-router-dom';
// import Select from "react-select";

const AddEtudiant = () => {
  const [isClicked, setIsClicked] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const onChange = (date, dateString) => {
    setIsClicked(true);
  };


  return (
    <div>
      <Header />
      <Sidebar id="menu-item1" id1="menu-items1" activeClassName="add-doctor" />
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Etudiants</Link>
                  </li>
                  <li className="breadcrumb-item active">Add Etudiant</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-heading">
                          <h4>Etudiant Details</h4>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            No Etudiant Nat <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Annee Pro <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Code Com
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            No Etudiant Ubo
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Sexe <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Nom <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Prenom <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Date Naissance <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                            style={{
                              borderColor: isClicked ? '#2E37A4' : '2px solid rgba(46, 55, 164, 0.1)',
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Lieu Naissance <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Situation <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Nationalite <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Tel Port
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Tel Fixe
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Email
                          </label>
                          <input className="form-control" type="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Adresse
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Cp
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Ville
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Pays
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Adresse <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Cp <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Ville <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Pays <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Dernier Diplome <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Universite <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Sigle Etu <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Compte Cri <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Ubo Email
                          </label>
                          <input className="form-control" type="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Grpe Anglais
                          </label>
                          <input className="form-control" type="number" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Abandon Motif
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Abandon Date
                          </label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={onChange}
                            suffixIcon={null}
                            style={{
                              borderColor: isClicked ? '#2E37A4' : '2px solid rgba(46, 55, 164, 0.1)',
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Est Diplome <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button type="submit" className="btn btn-primary submit-form me-2">
                            Submit
                          </button>
                          <button type="submit" className="btn btn-primary cancel-form">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEtudiant;