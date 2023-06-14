import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const InputForm = () => {

    const styles = {
        button: {
                width: 100,
                height: 40,
            },
    
            formControl: {
                marginRight: 10,
                alignItems: 'center'
            },
            inputGroup: {
                width: 800,
                marginLeft: 350,
                marginTop:20,
                alignItems: 'center',
            }
        };

    return(
        <Form>
            <h1>Inventory Chart</h1>
            <InputGroup>
            <Form.Control
            style={styles.formControl}
            placeholder="Category"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Form.Control
            placeholder="Type"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Form.Control
            placeholder="expiration date"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="primary">
            Enter
            </Button>
            </InputGroup>
        </Form>
    )
};

export default InputForm;