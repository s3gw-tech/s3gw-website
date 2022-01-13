import { GithubSVG } from '@/assets/images'
import ProjectLogo from '@/assets/logo.svg'
import { PROJECT_CONFIGURATION } from '@/db/project-info'

export const Header = () => {
  const { projectTitle } = PROJECT_CONFIGURATION

  return (
    <div className='relative bg-white py-6'>
      {/* Header content */}

      <div className='grid grid-flow-row md:grid-flow-row mx-auto w-5/6 2xl:w-3/6  items-center'>
        {/* Main Header */}
        <div className='grid grid-row-2 md:grid-cols-2 gap-8 justify-between align-middle'>
          <div className='grid gap-4'>
            <div className='flex items-center gap-4'>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img width='60px' height='60px' src={ProjectLogo.src} alt={`${projectTitle} logo`} />
              <h1 className='text-5xl font-bold text-secondary-light'>{projectTitle}</h1>
            </div>
          </div>

          <a className='place-self-start md:place-self-end self-center flex gap-2 px-4 py-2 font-medium bg-primary text-white' href='https://github.com/aquarist-labs/aquarium' target='_blank' rel="noreferrer">
            <GithubSVG className='fill-current text-white w-6' />
            Repository</a>

        </div>
      </div>
      {/* <div className='absolute w-full bottom-0'>
        <motion.div
          initial={{
            x: -200,
            opacity: 1,
          }}
          animate={{ x: 0, opacity: 1 }}
        >
          <InfinityLine />
        </motion.div>
      </div> */}
    </div>
  )
}
