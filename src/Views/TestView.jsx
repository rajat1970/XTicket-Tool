import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterView from './filterView';
import SelectedFilterView from './selectedFilterView';


export default class TestView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: "none",
            fromDate: null,
            toDate: null,
            filterString: null,

        }
    }
    onFromDateChange = (value) => {
        this.setState({ fromDate: (new Date(value)).getTime() })
    }
    onToDateChange = (value) => {
        this.setState({ toDate: (new Date(value)).getTime() })
    }
    onInputChange = (value) => {
        this.setState(value)
    }

    onDateSubmit = (e) => {
        e.preventDefault();
        this.props.filterTickets(this.state.fromDate, this.state.toDate)
    }
    onInputSubmit = (id) => {

        this.props.searchByFilter();
        this.props.searchByFilter(id, this.state.filterString)
    }

    render() {
        const allStatus = this.props.allStatus;
        let listingData = this.props.listingData;


        return (
            <React.Fragment>
                <div className="filters-wrapper">

                    <select className="-filter-select" onChange={(e) => this.setState({ display: e.currentTarget.value })} >
                        <option>ALL Tickets</option>
                        {allStatus ?
                            <FilterView allStatus={allStatus} />
                            : null
                        }
                        <option value="Date">Filter Between Dates</option>
                        <option value="Subject">Filter By subject</option>
                        <option value="Name">Filter by Name</option>
                    </select>

                    <SelectedFilterView display={this.state.display} onFromDateChange={this.onFromDateChange} onToDateChange={this.onToDateChange} onDateSubmit={this.onDateSubmit} onInputSubmit={this.onInputSubmit} onInputChange={this.onInputChange} />


                </div>
                <table className="ticketListingTable">
                    <tbody>
                        <tr id="header-row">
                            <th>id</th>
                            <th>subject</th>
                            <th>displayName</th>
                            <th>Customer Responded Time</th>
                            <th>Due Date</th>
                            <th>status</th>
                            <th>assignedTo</th>
                        </tr>
                        {
                            listingData.map((ticket) => {
                                const creationTime = new Date(ticket.creationTime);
                                const dueOn = new Date(ticket.dueOn);
                                return (
                                    <React.Fragment >
                                        <tr key={ticket.id}>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{ticket.id}</Link></td>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{ticket.subject}</Link></td>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{ticket.displayName}</Link></td>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{creationTime.toLocaleString()}</Link></td>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{dueOn.toLocaleString()}</Link></td>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{ticket.status}</Link></td>
                                            <td><Link to={'/ticketlist/' + ticket.id} >{ticket.assignedTo}</Link></td>

                                        </tr>

                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment >
        )
    }
}







// const TableView = (payload) => {
//     const { listingData, allStatus } = payload;
//     const [display, inputDispay] = useState('none')


//     return (


//     )
// }

