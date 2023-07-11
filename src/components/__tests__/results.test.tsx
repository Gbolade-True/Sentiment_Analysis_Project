import { AxiosResponse } from "axios";
import { BrowserRouter } from 'react-router-dom';
import { Predictions, SentimentsResponse } from 'interfaces/IResponse';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Landing from 'components/landing';
import api from "api";

describe('Sentiment Analysis Project', () => { 
	afterEach(cleanup);

	it('renders properly', async () => {
		render(
			<BrowserRouter>
				<Landing />
			</BrowserRouter>
		)
		expect(screen.getByText('Sentiment Analysis')).toBeInTheDocument()
	})

	it('opens result modal and displays results correctly', async() => {
		const payload = {
			data: {
				vader: .7,
				naive: .85,
				rnn: .92
			} as Predictions
		};
		jest.spyOn(api, 'GetPredictions')
		.mockReturnValue(Promise.resolve({
			data: payload
		} as AxiosResponse<SentimentsResponse, any>));
		render(
			<BrowserRouter>
				<Landing />
			</BrowserRouter>
		)
		const textarea = screen.getByPlaceholderText('Place your text in here...')
		fireEvent.change(textarea, {
			target: { value: "good good good" }
		});
		expect(textarea).toHaveValue('good good good')
		expect(screen.getByText('Results')).toBeInTheDocument()

		fireEvent.click(screen.getByText('Enter'));

		await waitFor(() => new Promise((res) => setTimeout(res, 600)))

		expect(api.GetPredictions).toHaveBeenCalledTimes(1)
		expect(screen.getByTestId('recharts')).toBeInTheDocument()
		expect(screen.getByText('0.7000')).toBeInTheDocument()
		expect(screen.getByText('0.8500')).toBeInTheDocument()
		expect(screen.getByText('0.9200')).toBeInTheDocument()
	})
})