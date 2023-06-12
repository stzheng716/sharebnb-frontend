import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';


/** Notice component.
 *
 * Prop:
 * - Notice: [message, message,...]
 * - Type: "danger"
 *
 * { LoginForm, SignUpForm, ProfileForm, searchForm } -> Alert 
 *
 * Renders Alert to users
 */
function Notice({ message, type }) {

    return (
        <div>
            <Alert variant={type}>{message}</Alert>
        </div>
    );
}

export default Notice;
