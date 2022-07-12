import { useContext, useEffect } from 'react';
import { FaCodepen, FaStore, FaUsers, FaUserFriends } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../components/layout/Spinner';
import GithubContext from '../context/github/GithubContext';

const User = () => {
  const { user, getUser, loading } = useContext(GithubContext);

  // hook for extracting URL parameters
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost btn-sm'>
            Back to search
          </Link>
        </div>

        <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mb-8 md:gap-8'>
          <div className='custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card image-full'>
              <figure>
                <img src={avatar_url} alt='avatar' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className="mb-6">
              <h1 className='text-3xl card-title mb-1'>
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href={html_url} target="_blank" className='btn btn-outline btn-sm'>Visit Github Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;