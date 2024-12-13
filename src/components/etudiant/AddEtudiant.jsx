import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { DatePicker } from "antd";
import { Link } from 'react-router-dom';
import {BACKEND_URL} from "../../config";

const AddEtudiant = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [formData, setFormData] = useState({
    noEtudiantNat: "",
    anneePro: "",
    codeCom: "",
    noEtudiantUbo: "",
    sexe: "",
    nom: "",
    prenom: "",
    dateNaissance: null,
    lieuNaissance: "",
    situation: "",
    nationalite: "",
    telPort: "",
    telFixe: "",
    email: "",
    actuAdresse: "",
    actuCp: "",
    actuVille: "",
    actuPays: "",
    permAdresse: "",
    permCp: "",
    permVille: "",
    permPays: "",
    dernierDiplome: "",
    universite: "",
    sigleEtu: "",
    compteCri: "",
    uboEmail: "",
    grpeAnglais: null,
    abandonMotif: "",
    abandonDate: null,
    estDiplome: ""
  });

  const onChange = (date, dateString, field) => {
    setFormData({ ...formData, [field]: dateString });
    setIsClicked(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(BACKEND_URL+"/api/etudiants", {
        method: "POST",
        headers: {
          "ngrok-skip-browser-warning":"",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const createdEtudiant = await response.json();
        console.log("Etudiant created successfully:", createdEtudiant);
      } else {
        console.error("Failed to create Etudiant");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
                  <form onSubmit={handleSubmit}>
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
                          <input className="form-control" type="text" name="noEtudiantNat" value={formData.noEtudiantNat} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Annee Pro <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="anneePro" value={formData.anneePro} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Code Com
                          </label>
                          <input className="form-control" type="text" name="codeCom" value={formData.codeCom} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            No Etudiant Ubo
                          </label>
                          <input className="form-control" type="text" name="noEtudiantUbo" value={formData.noEtudiantUbo} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Sexe <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="sexe" value={formData.sexe} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Nom <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="nom" value={formData.nom} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Prenom <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="prenom" value={formData.prenom} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Date Naissance <span className="login-danger">*</span>
                          </label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={(date, dateString) => onChange(date, dateString, "dateNaissance")}
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
                          <input className="form-control" type="text" name="lieuNaissance" value={formData.lieuNaissance} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Situation <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="situation" value={formData.situation} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Nationalite <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="nationalite" value={formData.nationalite} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Tel Port
                          </label>
                          <input className="form-control" type="text" name="telPort" value={formData.telPort} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Tel Fixe
                          </label>
                          <input className="form-control" type="text" name="telFixe" value={formData.telFixe} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Email
                          </label>
                          <input className="form-control" type="email" name="email" value={formData.email} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Adresse
                          </label>
                          <input className="form-control" type="text" name="actuAdresse" value={formData.actuAdresse} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Cp
                          </label>
                          <input className="form-control" type="text" name="actuCp" value={formData.actuCp} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Ville
                          </label>
                          <input className="form-control" type="text" name="actuVille" value={formData.actuVille} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Actu Pays
                          </label>
                          <input className="form-control" type="text" name="actuPays" value={formData.actuPays} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Adresse <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="permAdresse" value={formData.permAdresse} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Cp <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="permCp" value={formData.permCp} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Ville <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="permVille" value={formData.permVille} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Perm Pays <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="permPays" value={formData.permPays} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Dernier Diplome <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="dernierDiplome" value={formData.dernierDiplome} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Universite <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="universite" value={formData.universite} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Sigle Etu <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="sigleEtu" value={formData.sigleEtu} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Compte Cri <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="text" name="compteCri" value={formData.compteCri} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Ubo Email
                          </label>
                          <input className="form-control" type="email" name="uboEmail" value={formData.uboEmail} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Grpe Anglais
                          </label>
                          <input className="form-control" type="number" name="grpeAnglais" value={formData.grpeAnglais} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms">
                          <label>
                            Abandon Motif
                          </label>
                          <input className="form-control" type="text" name="abandonMotif" value={formData.abandonMotif} onChange={handleInputChange} />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-xl-4">
                        <div className="form-group local-forms cal-icon">
                          <label>
                            Abandon Date
                          </label>
                          <DatePicker
                            className="form-control datetimepicker"
                            onChange={(date, dateString) => onChange(date, dateString, "abandonDate")}
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
                          <input className="form-control" type="text" name="estDiplome" value={formData.estDiplome} onChange={handleInputChange}  />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="doctor-submit text-end">
                          <button type="submit" className="btn btn-primary submit-form me-2">
                            Submit
                          </button>
                          <button type="button" className="btn btn-primary cancel-form">
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