import Layout from '@theme/Layout';
import ThemedImage from '@theme/ThemedImage';
import CodeBlock from '@theme/CodeBlock';
import React from 'react';
import index from './index.module.css';

function Landing() {
  return (
    <Layout>
    <main className={index.landing}>
    <section className={index.intro}>
      <div className={index.bgPrimary}>
        <div className={`${index.wrap}`}>
          <div>
            <h1>Leverage your infrastructure for object storage</h1>
            <h4>The s3gw project is a lightweight, open source S3 service that's easy to deploy in a cloud native environment. It's useful for Kubernetes users who need object storage to back up their application data to a Longhorn PV.</h4>
          </div>
        </div>
      </div>
      <div className={index.folder}>
        <h4>Great For</h4>
        <div className={`${index.bgLight} ${index.gridDynamic} ${index.textCenter}`}>
          <h5>Edge</h5>
          <h5>IoT</h5>
          <h5>CI</h5>
        </div>
      </div>
    </section>

    <section className={index.wrap}>
      <h2>Why Use s3gw</h2>
      <div className={index.gridThree}>
        <div>
          <h5>S3 Semantics</h5>
          <p>S3 compatible semantics and APIs for on-premise object storage.</p>
        </div>
        <div>
          <h5>Lightweight</h5>
          <p>Easy to deploy and manage, with a light container footprint and helm charts to get started.</p>
        </div>
        <div>
          <h5>Longhorn for object storage</h5>
          <p>Consume a Longhorn PVC, and expose it as S3 for applications.</p>
        </div>
      </div>
    </section>
    <hr />
    <section className={index.wrap}>
      <h2>How it Works</h2>
      <img src="/img/how-it-works.svg" alt="{{ .Site.Title }}"></img>
    </section>
    <section className={index.getStarted}>
      <div className={index.white}>
        <h2 className={index.textCenter}>Get Started</h2>
        <CodeBlock className="language-sh">{
`
# Helm chart
helm repo add s3gw https://aquarist-labs.github.io/s3gw-charts/
helm install s3gw s3gw/s3gw --namespace s3gw-system --create-namespace

# Docker
docker pull quay.io/s3gw/s3gw:latest
docker run -p 7480:7480 quay.io/s3gw/s3gw:latest

# Podman
podman run --replace --name=s3gw -it -p 7480:7480 quay.io/s3gw/s3gw:latest

`
        }</CodeBlock>
      </div>
      <div className={`${index.learnMore} ${index.bgPrimary}`}>
        <div className={index.wrap}>
          <h2 className={index.learn_more}>Articles from the Rancher blog</h2>
          <div className={index.gridThree}>
          <div>
              <h3 className={index.learn_more}>Introduction to s3gw</h3>
              <a href="https://www.suse.com/c/rancher_blog/introduction-to-s3gw/" class="button button--lg button--static">Read more</a>
            </div>
            <div>
              <h3 className={index.learn_more}>Epinio meets s3gw</h3>
              <a href="https://www.suse.com/c/rancher_blog/epino-meets-s3gw/" class="button button--lg button--static">Read more</a>
            </div>
            <div>
              <h3 className={index.learn_more}>Deploy s3gw in Digital Ocean
</h3>
              <a href="https://www.suse.com/c/rancher_blog/deploy-s3gw-in-digital-ocean/" class="button button--lg button--static">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>
    </Layout>
  );
}

export default Landing
