// eslint-disable-next-line import/no-anonymous-default-export
export default {
    request: jest.fn(),
    post: jest.fn(() => Promise.resolve({ data: {} }))
};