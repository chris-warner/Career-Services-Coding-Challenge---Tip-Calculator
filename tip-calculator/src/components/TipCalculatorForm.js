import React from 'react';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';

class TipCalculatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            TipTotal: 0,
            };
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ TipTotal: '$' + event.target.value });
    }


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={TipCalculatorFormDivStyle}>
                <h1>Tip Calculator </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            Bill Total: ${this.state.TipTotal}
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="$" value={this.state.TipTotal.value} onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    {/* <Form.Button type="submit" value="Submit" /> */}
                </Form>
            </div>
        );
    }
}

const TipCalculatorFormDivStyle = {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
}

export default TipCalculatorForm;