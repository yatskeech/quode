'use client';

import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';

import { MDXComponents } from '@/shared/ui';

interface MDXRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export function MDXRenderer({ mdxSource }: MDXRendererProps) {
  return <MDXRemote {...mdxSource} components={MDXComponents} />;
}
