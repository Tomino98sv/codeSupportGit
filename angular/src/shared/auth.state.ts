import { State, Action, StateContext } from '@ngxs/store';
import { Login } from './auth.action';

export interface AuthModel {
    username: string;
    token: string;
}

@State<AuthModel>({
    name: 'auth',
    defaults: {
        username: null,
        token: null
    }
})
export class AuthState {
    @Action(Login)
    login(context: StateContext<AuthModel>, action: Login) {
        context.setState({
            username: action.auth.username,
            token: Math.floor(Math.random() * 100000) + ''
        });
    }
}