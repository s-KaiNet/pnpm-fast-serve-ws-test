import * as React from 'react';
import styles from './MyMonoReopWp.module.scss';
import { IMyMonoReopWpProps } from './IMyMonoReopWpProps';
import { hello } from "mylib";

export default class MyMonoReopWp extends React.Component<IMyMonoReopWpProps, {}> {
  public render(): React.ReactElement<IMyMonoReopWpProps> {
    return (
      <section className={`${styles.myMonoReopWp}`}>
        {hello()}
      </section>
    );
  }
}
