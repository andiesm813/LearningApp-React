import { IgrIconButton, IgrIconButtonModule, IgrRipple, IgrRippleModule } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';

IgrIconButtonModule.register();
IgrRippleModule.register();

export default function App() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("row-layout master-page-container")}>
        <div className={classes("column-layout group")}>
          <div className={classes("column-layout logo")}>
            <img src="/src/assets/skillz-logo.svg" className={classes("image")} />
            <img src="/src/assets/skillz-logo-text.svg" className={classes("image_1")} />
          </div>
          <div onClick={() => navigate(`/dashboard`)} className={classes("column-layout group_1")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>dashboard</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <p className={classes("typography__overline text")}>
              <span>Main</span>
            </p>
          </div>
          <div onClick={() => navigate(`/courses`)} className={classes("column-layout group_1")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>school</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <p className={classes("typography__overline text")}>
              <span>Courses</span>
            </p>
          </div>
          <div onClick={() => navigate(`/tasks`)} className={classes("column-layout group_1")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>assignment_turned_in</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <p className={classes("typography__overline text")}>
              <span>Tasks</span>
            </p>
          </div>
          <div onClick={() => navigate(`/progress`)} className={classes("column-layout group_1")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>assessment</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <p className={classes("typography__overline text")}>
              <span>Progress</span>
            </p>
          </div>
          <div onClick={() => navigate(`/profile`)} className={classes("column-layout group_1")}>
            <IgrIconButton variant="flat" className={classes("icon-button")}>
              <span className={classes("material-icons icon")} key={uuid()}>
                <span key={uuid()}>person</span>
              </span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrIconButton>
            <p className={classes("typography__overline text")}>
              <span>Profile</span>
            </p>
          </div>
        </div>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
