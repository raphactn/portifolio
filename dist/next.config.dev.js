"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  }
};
module.exports = nextConfig;