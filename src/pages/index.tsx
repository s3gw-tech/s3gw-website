import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
import React from 'react'
import index from './index.module.css'
import Link from '@docusaurus/Link'

function Landing() {
  return (
    <Layout>
      <main className={index.landing}>
        <section className={index.intro}>
          <div className={index.bgPrimary}>
            <div className={`${index.wrap}`}>
              <div>
                <h1>Leverage your infrastructure for object storage</h1>
                <h4>The s3gw project is a lightweight, open source S3 service for small deployments, and easy to deploy in a cloud native environment such as Kubernetes.</h4>
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

        <section className={index.wrap} id='why-s3gw'>
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
              <h4>Just needs some storage</h4>
              <p>May it be a Kubernetes PVC or a local File System, s3gw consumes any storage and exposes it as S3 for applications.</p>
            </div>
            <div>
              <h4>UI</h4>
              <p>Easy to manage and administrate via graphical user interface.</p>
            </div>
          </div>
        </section>

        <hr />

        <section className={index.howItWorks} id='how-it-works'>
          <div className={index.white}>
            <h2>How it Works</h2>

            <div>
              <p>S3GW relies on any File System to store data and metadata for objects.</p>
              <p>This File System can be provided either by a local disk, or, in a Kubernetes environment, any Persistent Volume.</p>
            </div>

            <p className={index.moreInfo}>
              Check our <Link href='https://docs.s3gw.tech'>Documentation</Link> for more information!
            </p>

            <div className={index.stack}>
              <img src='/img/s3gw-tech-stack-large.svg' alt='{{ .Site.Title }}'></img>
            </div>
          </div>
        </section>

        <hr />

        <section className={index.getStarted} id='get-started'>
          <div className={index.white}>
            <h2 className={index.textCenter}>Get Started</h2>
            <CodeBlock className='language-sh'>{`
# Helm chart
helm repo add s3gw https://charts.s3gw.tech
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

`}</CodeBlock>
            <div>
              <p>Helm is the preferred deployment method, and will automatically use your cluster's default storage class for the backing store. The above assumes cert-manager and traefik are available, but these and other settings can be overridden via values.yaml.</p>
              <p>Docker and Podman deployments will use ephemeral storage inside the container by default, so should only be used for testing on a local system.</p>
              <p>
                In all the above cases, the default <i>Access Key</i> and <i>Secret Key</i> are set to "<strong>test</strong>". Please see <a href='https://docs.s3gw.tech'>our documentation</a> for more details on how to configure s3gw.
              </p>
            </div>
            <div>
              <p>The same credentials can be used to access the UI to manage your buckets and objects. The UI also offers the possibility to manage additional users and credentials.</p>
            </div>

            {/* <div>
              <img src='/img/ui-users.png' alt='User Management' className={index.imgBorder}></img>
              <img src='/img/ui-buckets.png' alt='Bucket Management' className={index.imgBorder}></img>
              <img src='/img/ui-object-explorer.png' alt='Object Explorer' className={index.imgBorder}></img>
            </div> */}
          </div>
          {/* <div className={`${index.learnMore} ${index.bgPrimary}`}>
            <div className={index.wrap}>
              <h2 className={index.learn_more}>Highlighted Articles from the Blog</h2>
              <div className={index.gridThree}>
                <div>
                  <h3 className={index.learn_more}>Introduction to s3gw</h3>
                  <a href='/blog/introduction-to-s3gw' className='button button--lg button--static'>
                    Read more
                  </a>
                </div>
                <div>
                  <h3 className={index.learn_more}>Epinio meets s3gw</h3>
                  <a href='/blog/epinio-meets-s3gw' className='button button--lg button--static'>
                    Read more
                  </a>
                </div>
                <div>
                  <h3 className={index.learn_more}>Deploy s3gw in Digital Ocean</h3>
                  <a href='/blog/deploy-s3gw-digital-ocean' className='button button--lg button--static'>
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </Layout>
  )
}

export default Landing
