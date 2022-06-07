export const userResolver = {
    Query: {
        users: () => {
            return [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'test@gmail.com'
                }
                , {
                    id: 2,
                    name: 'John Doe',
                    email: 'test@gmail.com'
                }
            ];
        }
    }
}