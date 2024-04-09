import React, { useState } from "react";
import "./ContactForm.css";
import AWS from "aws-sdk";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Validar Campos
    const errors = {};
    if (!formData.firstname.trim()) {
      errors.firstname = "First name is required";
    }
    if (!formData.lastname.trim()) {
      errors.lastname = "Last name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // Detener la ejecución de la función handleSubmit si hay errores
    }

    // Configurar credenciales de AWS
    AWS.config.update({
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      region: process.env.REACT_APP_AWS_REGION,
    });

    // Crea un objeto de servicio SES
    const ses = new AWS.SES({ ApiVersion: "2010-12-01" });

    // Define parámetros de correo electrónico
    const params = {
      Destination: {
        ToAddresses: ['contact@alexortega.dev'],
      },
      Message: {
        Body: {
          Text: {
            Charset: "UTF-8",
            Data: `Nombre: ${formData.firstname} ${formData.lastname}\nCorreo electrónico: ${formData.email}\n\n${formData.message}`,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Nuevo mensaje de contacto",
        },
      },
      Source: "alex.devzen@gmail.com",
    };

    // Envía el correo electrónico utilizando SES
    ses.sendEmail(params, (err, data) => {
      if (err) {
        console.error("Error al enviar el correo electrónico:", err);
        // Maneja el error (mostrar mensaje de error al usuario, etc.)
      } else {
        console.log("Correo electrónico enviado con éxito:", data);
        // Maneja el éxito (mostrar mensaje de confirmación al usuario, etc.)
        alert("Correo electrónico enviado con éxito");
        // Limpia el formulario después de enviar el correo electrónico
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
        setFormErrors({}); // Restablece los errores a un objeto vacío después de enviar con éxito
      }
    });
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            placeholder="First Name"
          />
          {formErrors.firstname && (
            <span className="error">{formErrors.firstname}</span>
          )}

          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            placeholder="Last Name"
          />
          {formErrors.lastname && (
            <span className="error">{formErrors.lastname}</span>
          )}
        </div>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}

        <textarea
          type="text"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          rows={3}
        />
        {formErrors.message && (
          <span className="error">{formErrors.message}</span>
        )}

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
