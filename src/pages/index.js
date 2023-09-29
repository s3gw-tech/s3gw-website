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
      <div className={index.gridFour}>
        <div>
          <h4>S3 Semantics</h4>
          <p>S3 compatible semantics and APIs for on-premise object storage.</p>
        </div>
        <div>
          <h4>Lightweight</h4>
          <p>Easy to deploy and manage, with a light container footprint and Helm charts to get started.</p>
        </div>
        <div>
          <h4>Longhorn for object storage</h4>
          <p>Consume a Longhorn PVC, and expose it as S3 for applications.</p>
        </div>
        <div>
          <h4>UI</h4>
          <p>Easy to manage and administrate via graphical user interface.</p>
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
helm install s3gw s3gw/s3gw --namespace s3gw-system --create-namespace \\
    --set publicDomain=YOUR_DOMAIN_NAME \\
    --set ui.publicDomain=YOUR_DOMAIN_NAME

# Docker
docker pull quay.io/s3gw/s3gw:latest
docker pull quay.io/s3gw/s3gw-ui:latest
docker run -p 7480:7480 quay.io/s3gw/s3gw:latest
docker run -p 8080:8080 -e S3GW_SERVICE_URL="http://<IPADDR>:7480" quay.io/s3gw/s3gw-ui:latest

# Podman
podman run --replace --name=s3gw -it -p 7480:7480 quay.io/s3gw/s3gw:latest
podman run --replace --name=s3gw-ui -it -p 8080:8080 -e S3GW_SERVICE_URL="http://<IPADDR>:7480" quay.io/s3gw/s3gw-ui:latest

`
        }</CodeBlock>
        <div><p>Helm is the preferred deployment method, and will automatically use
          your cluster's default storage class for the backing store. If you have
          Longhorn installed already, s3gw will thus use a Longhorn PV. The above
          assumes cert-manager and traefik are available, but these and other settings
          can be overridden via values.yaml.</p>
          <p>Docker and Podman deployments will use ephemeral storage inside the
            container by default, so should only be used for testing on a local system.
          </p>
          <p>In all the above cases, the default <i>Access Key</i> and <i>Secret Key</i> are
            set to "<strong>test</strong>". Please see <a href="https://s3gw-docs.readthedocs.io/">our documentation</a> for
            more details on how to configure s3gw.
          </p>
        </div>
        <div>
          <p>
            The same credentials can be used to access the UI to manage your buckets
            and objects. The UI also offers the possibility to manage additional users and credentials.
          </p>
        </div>
        <div>
          <img src="/img/ui-users.png" alt="User Management" className={index.imgBorder}></img>
          <img src="/img/ui-buckets.png" alt="Bucket Management" className={index.imgBorder}></img>
          <img src="/img/ui-object-explorer.png" alt="Object Explorer" className={index.imgBorder}></img>
        </div>
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
