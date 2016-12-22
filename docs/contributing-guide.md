# Contributing Guide

All contributions are welcome no matter the size.

If you would like to contribute to this project this is the guide for you. This document will outline the process of contributing and explain some of the reasoning for this process.

If you're not sure where to start or are making your first contribution then issues tagged with `༼ つ ◕_◕ ༽つ` may be a good place to start.

## Table of Contents
- [Setup](#setup)
- [Making your contribution](#making-your-contribution)
- [Testing](#testing)
- [Linting](#linting)

## Setup
Follow the guide for setting up the development environment in [Development](development.md).

## Making your contribution
A step by step guide to making a contribution:
- Fork this repository
In forked repository:
- Setup development environment
- Ensure tests and linting pass
- Create a branch in the forked repository
- Make changes
- Create Pull Request
- Document aims and changes in pull Request
DONE :D

## Testing
All contribution which have logic included in them should have tests backing them. This not only increases confidence that the code does what is expected but that it does not affect other areas of the application in an unexpected way.

Unit tests are the most basic form of tests and are required where applicable.

Test Driven Development(TDD) is an incredibly useful tool when used correctly.

`Don't test code that isn't yours.` Tests do not need to be added to test the functionality of plugins/packages. These resources should be thoroughly tested themselves.

## Linting
Project-wide linting is important to maintain a similar style across the project to increase readability and productivity. All contributions must pass ESLint standards.
