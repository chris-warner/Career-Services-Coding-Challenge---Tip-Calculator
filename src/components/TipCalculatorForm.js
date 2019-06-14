import React from 'react';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';

class TipCalculatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BillTotal: 0.00,
            TipPercentage: .0,
            People: 0,
            TipTotal: 0
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
    }

    handleSubmit(event) {
        event.preventDefault();
        let persons = parseInt(this.state.People);
        let tip = parseFloat(this.state.TipPercentage);
        let BillTotal = parseFloat(this.state.BillTotal);
        
        function CalculateThePercentage(n, p) {
            if (persons === 1){
            return (n / 100) * p;
            } else
            if(persons > 1) {
                return ((n / 100) * p)/persons;
            }
        }

        let total = CalculateThePercentage(BillTotal, tip)
        total = total.toFixed(2);

        if (persons > 1){
        alert('The tip total comes out to $ ' + total + ' per person');
        }
        else 
        if(persons ===1 ){
        alert('Your tip total comes out to $ ' + total);
        }
    }


    render() {
        return (
            <div style={TipCalculatorFormDivStyle}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} controlId="formHorizontal">

                        <div style={formDivStyle}>
                            <Form.Label column sm={4}>
                                Bill Total: $ {this.state.BillTotal}
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control type="float" placeholder="Bill Total" value={this.state.BillTotal.value} onChange={this.handleBillTotalChange} min="1" required />
                            </Col>
                        </div>

                        <div style={formDivStyle}>
                            <Form.Label column sm={4}>
                                Tip:  {this.state.TipPercentage} %
                    </Form.Label>
                            <Col sm={12}>
                                <Form.Control type="float" placeholder="Tip Percentage" value={this.state.TipPercentage.value} onChange={this.handleTipPercentChange} required />
                            </Col>

                        </div>
                        <div style={formDivStyle}>
                            <Form.Label column sm={4}>
                                People: {this.state.People}
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control type="number" placeholder="Number of people" value={this.state.People.value} onChange={this.handlePeopleChange} min="1" required />
                            </Col>
                        </div>
                    </Form.Group>
                    <Button type="submit" value="Submit" > Calculate</Button>
                </Form>
            </div>
        );
    }
}

const formDivStyle = {
    marginTop: '8px',
    width: '100%'
}

const TipCalculatorFormDivStyle = {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
}

export default TipCalculatorForm;