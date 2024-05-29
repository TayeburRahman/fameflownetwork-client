import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatePublishPackage } from '../../../features/order/orderSlice';

type InputF = {
  name: string;
  price: number;
};

const TabContent1 = () => {
  return (
    <div>
      <div className="flex gap-5 justify-around">
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Acquisitions & Partnerships
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Aesthetic Surgeries
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Alternative Medicine / Metaphysical
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Cryptocurrency (Buying / Trading)
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Dating
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Financial Trading
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Scam & Fraud Recovery Services
          </li>
        </div>
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Live Streaming & Broadcasting
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Legal Cases
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Legal Marijuana / CBD
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Music with Explicit Content Labels
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            NFTs / Metaverse
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Pharmacy / Legal Drugs
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Politics / Political Candidates
          </li>
        </div>
      </div>
    </div>
  );
};
const TabContent2 = () => {
  return (
    <div>
      <div className="flex gap-5 justify-around">
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Acquisitions & Partnerships
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Aesthetic Surgeries
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Alternative Medicine / Metaphysical
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Cryptocurrency (Buying / Trading)
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Dating
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Financial Trading
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Scam & Fraud Recovery Services
          </li>
        </div>
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Live Streaming & Broadcasting
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Legal Cases
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Legal Marijuana / CBD
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Music with Explicit Content Labels
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            NFTs / Metaverse
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Pharmacy / Legal Drugs
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Politics / Political Candidates
          </li>
        </div>
      </div>
    </div>
  );
};
const TabContent3 = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between">
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Regular topics accepted
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            300+ news sites
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            28m monthly readers
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            89 max authority
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Google News included
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes Benzinga
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes affiliates of Fox News
          </li>
        </div>
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Regular topics accepted
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            300+ news sites
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            28m monthly readers
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            89 max authority
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Google News included
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes Benzinga
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes affiliates of Fox News
          </li>
        </div>
      </div>
    </div>
  );
};
const TabContent4 = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between">
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Regular topics accepted
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            300+ news sites
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            28m monthly readers
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            89 max authority
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Google News included
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes Benzinga
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes affiliates of Fox News
          </li>
        </div>
        <div className="space-y-3">
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Regular topics accepted
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            300+ news sites
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            28m monthly readers
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            89 max authority
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Google News included
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes Benzinga
          </li>
          <li className="flex gap-2 items-center text-[14px] font-semibold text-slate-400">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="15"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00a876"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
              />
            </svg>{' '}
            Includes affiliates of Fox News
          </li>
        </div>
      </div>
    </div>
  );
};

const tabData = [
  { title: 'Overview', content: <TabContent1 /> },
  { title: 'Accepted Topics', content: <TabContent2 /> },
  { title: 'Major Outlets', content: <TabContent3 /> },
  { title: 'Story Limitations', content: <TabContent4 /> },
];

type Inputs = {
  title: string;
  description: string;
  price: number;
  value: any;
  imgSrc: string;
  isExpanded: any;
  onExpand: any;
  publishing: {
    title: string;
    price: number;
    included: string;
    value: string;
    included_02: string;
  };
  index: number;
  included: any;
  included_02: any;
};

const PackageButton: React.FC<Inputs> = ({
  title,
  description,
  price,
  value,
  imgSrc,
  isExpanded,
  onExpand,
  publishing,
  index,
  included,
  included_02,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <button
        onClick={(e) =>
          onExpand(title, price, index, value, included, included_02, imgSrc)
        }
        id={`${publishing?.title === title && 'active-re'}`}
        className="d-flex-c w-full writing_box mt-2"
      >
        <img
          src={imgSrc}
          style={{ width: '5%', marginRight: '10px' }}
          alt={title}
        />
        <Box className="w-full">
          <Box className="d-flex-c both-side text-left">
            <div className="writing_text_hed">{title}</div>
            <div className="d-flex-c both-side">
              <Typography>${price}</Typography>
              <Radio
                checked={publishing?.title === title}
                // onChange={onChange}
                value={value}
                name="radio-buttons"
                className="radio-writings"
                inputProps={{ 'aria-label': value }}
              />
            </div>
          </Box>
          <Typography className="text_x_sm top-8 text-left">
            {description}
          </Typography>
        </Box>
      </button>
      {isExpanded && (
        <Box className="additional-content">
          <div className="w-full mx-auto mt-10">
            <div className="flex justify-between mx-10">
              {tabData.map((tab, index) => (
                <button
                  key={index}
                  className={`flex py-2 text-center font-semibold text-[15px] focus:outline-none ${activeTab === index ? 'text-gray-500' : 'text-blue-500'}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="p-4">{tabData[activeTab].content}</div>
          </div>
        </Box>
      )}
    </div>
  );
};

type PropsSet = {
  setNextSteps: any;
  publishPackageLoc: any;
};

const PublishingPackages = ({ setNextSteps, publishPackageLoc }: PropsSet) => {
  const [selectedValue, setSelectedValue] = useState('Write Your Own Story');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [publishingPackage, setPublishingPackages] = useState({
    title: '',
    price: 0,
    included: '',
    value: '',
    included_02: '',
    image: '',
  });
  const dispatch = useDispatch();

  console.log('publishingPackages', publishingPackage);

  useEffect(() => {
    dispatch(
      setStatePublishPackage({
        publishPackage: publishingPackage,
      }),
    );
  }, [publishingPackage]);

  useEffect(() => {
    if (publishPackageLoc) {
      setPublishingPackages({
        title: publishPackageLoc?.title,
        price: publishPackageLoc?.price,
        value: publishPackageLoc?.value,
        included: publishPackageLoc?.included,
        included_02: publishPackageLoc?.included_02,
        image: publishPackageLoc?.image,
      });
    }
  }, [publishPackageLoc]);

  const handleExpand = (
    title: any,
    price: any,
    index: any,
    value: any,
    included: any,
    included_02: any,
    imgSrc: any,
  ) => {
    setPublishingPackages({
      title: title,
      price: price,
      value,
      included,
      included_02,
      image: imgSrc,
    });
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const packages = [
    {
      title: 'Limited Package',
      description:
        'Publish almost any topic, this package provides basic exposure & reach. 250 news sites outlets | 3.3m monthly readers | Most topics accepted',
      price: 165,
      value: 'Publishing on 250+ Limited News Outlets',
      included: 'Publishing on Minyanville & Financial Content',
      included_02: `"As Seen On" Trust Badge`,
      imgSrc:
        'https://www.brandpush.co/assets/img/emojis/BrandPush-Limited-Package.png',
    },
    {
      title: 'Popular Package',
      description:
        'Great for most brands, includes Fox & Google News, but accepts fewer topics. 250 news sites outlets | 3.3m monthly readers | Most topics accepted',
      price: 195,
      value: 'Publishing on 300 Popular News Outlets',
      included: 'Publishing on Benzinga & Fox News',
      included_02: `"As Seen On" Trust Badge`,
      imgSrc:
        'https://www.brandpush.co/assets/img/emojis/BrandPush-Popular-News-Network.png',
    },
    {
      title: 'Authority Package',
      description:
        'Only our 6 highest authority outlets, perfect for SEO improvement. 250 news sites outlets | 3.3m monthly readers | Most topics accepted',
      price: 565,
      value: 'Publishing on 6 Authority News Outlets',
      included: '',
      included_02: `"As Seen On" Trust Badge`,
      imgSrc:
        'https://www.brandpush.co/assets/img/emojis/BrandPush-Authority-News-Network.png',
    },
    {
      title: 'Ultimate Package',
      description:
        'Maximum exposure & impact for best results. 250 news sites outlets | 3.3m monthly readers | Most topics accepted',
      price: 999,
      value: 'Publishing on all 400 News Outlets',
      included: 'Publishing on 7 Major News Outlets',
      included_02: `"As Seen On" Trust Badge`,
      imgSrc: 'https://i.ibb.co/vzwPF0S/News-Network.webp',
    },
  ];

  return (
    <Box className="">
      <div className="space-y-3">
        {packages.map((pkg, index) => (
          <PackageButton
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            value={pkg.value}
            imgSrc={pkg.imgSrc}
            // checked={selectedValue === pkg.value}
            // onChange={handleRadioChange}
            isExpanded={expandedIndex === index}
            onExpand={handleExpand}
            publishing={publishingPackage}
            index={index}
            included_02={pkg.included_02}
            included={pkg.included}
          />
        ))}
      </div>
      <button
        onClick={(e) => setNextSteps('publishing')}
        className="button-next mt-5"
        role="button"
        disabled={publishingPackage.title ? false : true}
      >
        Next Step <ArrowForwardIcon />
      </button>
    </Box>
  );
};

export default PublishingPackages;
