import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store';


describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule, StoreModule.forRoot(appReducer, {})],
      providers: [provideMockStore({})],
    });
    const fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
  });

  it('should create login component', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('It must mark all form fields as "touched" if it is invalid', () => {
    loginComponent.loginForm.patchValue({
      email: 'ujujujujujuj123',
      password: '',
    });
    loginComponent.login();
    expect(loginComponent.emailControl.touched).toBeTrue();
    expect(loginComponent.passwordControl.touched).toBeTrue();
  });

  it('It must call the AuthService login method if the form is valid', () => {
    loginComponent.loginForm.patchValue({
      email: 'admin@g.com',
      password: '123',
    });

    const spyOnAuthServiceLogin = spyOn(
      (loginComponent as any).authService,
      'login'
    );

    loginComponent.login();

    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});