import React from 'react';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';

class TipCalculatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            BillTotal: 0,
            TipPercentage: 0,
            People:1
            };
         this.handleBillTotalChange = this.handleBillTotalChange.bind(this);
         this.handleTipPercentChange = this.handleTipPercentChange.bind(this);
         this.handlePeopleChange = this.handlePeopleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleBillTotalChange(event) {
        this.setState({ 
            BillTotal: event.target.value,
        });
    }

    handleTipPercentChange(event) {
        this.setState({ 
            TipPercentage: event.target.value,
        });
    }

    handlePeopleChange(event) {
        this.setState({
            People: event.target.value
        });
    }l


    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={TipCalculatorFormDivStyle}>
                <h1>Tip Calculator </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formHorizontal">
                        <Form.Label column sm={2}>
                            Bill Total: $ {this.state.BillTotal}
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="$" value={this.state.BillTotal.value} onChange={this.handleBillTotalChange} />
                        </Col> 
                        <Form.Label column sm={2}>
                        Tip Percentage:  {this.state.TipPercentage} %
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="%" value={this.state.TipPercentage.value} onChange={this.handleTipPercentChange} />
                        </Col>  
                        <Form.Label column sm={2}>
                            Number of People {this.state.People}
                    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" placeholder="1" default={1} value={this.state.People.value} onChange={this.handlePeopleChange} />
                        </Col> 
                    </Form.Group>
                     <Button type="submit" value="Submit" > Submit</Button>
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