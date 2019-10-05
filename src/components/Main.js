import React, { Component, Fragment } from 'react'

// Styling from Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

class Main extends Component {
	render() {
		return (
			<Fragment>
				<div className="container mt-5">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="card">
								<div className="card-body">Hello World</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Main
