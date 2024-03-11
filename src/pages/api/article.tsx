/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import clsx from 'clsx';
import { NextRequest } from 'next/server';
import { CSSProperties } from 'react';

import {
  cloudinaryPersonalLogo,
  fullName,
  personalDomain,
  twitterId,
} from '@/constant/constant';

export const inter400 = fetch(
  new URL('../../assets/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const inter500 = fetch(
  new URL('../../assets/Inter-Medium.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const interRegular = await inter400;
  const interMedium = await inter500;

  const { searchParams } = new URL(req.url);

  const articleType = searchParams.get('articleType');
  const templateTitle = searchParams.get('templateTitle');
  const banner = searchParams.get('banner');
  const tags = searchParams.get('tags');

  const query = {
    articleType: articleType ?? 'blog',
    templateTitle: templateTitle ?? 'Blog Title',
    banner,
    tags: tags?.split(',') ?? [],
  };

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          fontFamily: 'Inter',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundColor: 'rgba(14,17,17,1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            height: '100%',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left',
              height: '100%',
              flexGrow: 1,
              padding: '4rem 0 5rem 3rem',
            }}
          >
            <h3
              style={{ margin: 0 }}
              tw={clsx('text-2xl font-normal text-gray-300')}
            >
              {`${personalDomain}/${articleType}`}
            </h3>
            <h1 tw={clsx('mt-0', 'text-4xl leading-tight font-normal')}>
              <span
                style={
                  {
                    backgroundImage: 'linear-gradient(90deg, #00e887, #00e0f3)',
                    backgroundClip: 'text',
                    '-webkit-background-clip': 'text',
                    color: 'transparent',
                    padding: '0.5rem 0',
                  } as CSSProperties
                }
              >
                {query.templateTitle}
              </span>
            </h1>
            <div tw='flex'>
              {query.tags.map((tag, i) => (
                <div
                  key={tag}
                  tw={clsx([
                    'inline-block rounded-md px-1.5 py-0.5 font-medium text-lg',
                    'bg-gray-700 text-gray-200',
                    i !== 0 && 'ml-2',
                  ])}
                >
                  {tag}
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1.4rem',
                alignItems: 'center',
                marginTop: 'auto',
              }}
            >
              <img
                tw='w-[80px] rounded-full'
                src={cloudinaryPersonalLogo}
                alt='Photo of me'
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.1rem',
                }}
              >
                <p
                  style={{ margin: 0 }}
                  tw='font-medium text-[1.6rem] mt-0 text-white'
                >
                  {fullName}
                </p>
                <p style={{ margin: 0 }} tw='text-xl mt-0 text-gray-300'>
                  {twitterId}
                </p>
              </div>
            </div>
          </div>

          {banner && (
            <div style={{ display: 'flex' }}>
              <img tw={clsx('h-[100vh] block')} src={banner} alt='Banner' />
              <div
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(14,17,17,1), rgba(0,0,0,0))',
                }}
                tw={clsx(['absolute inset-0 '])}
              ></div>
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: 'twemoji',
      fonts: [
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
        },
        {
          name: 'Inter',
          data: interMedium,
          weight: 500,
        },
      ],
    }
  );
}
