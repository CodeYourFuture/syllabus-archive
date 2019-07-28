# Useful Tools

![status-draft](https://img.shields.io/badge/status-draft-darkred.svg)

## Node Version Manager

Sometimes you need to have several different versions of Node
installed on your computer because different projects need different versions.
If you need to be able to do this,
or if you just want an easier way to install Node, use Node Version Manager (nvm).

### Installation

1. Go to the GitHub homepage: <https://github.com/nvm-sh/nvm>
2. Follow the installation instructions: <https://github.com/nvm-sh/nvm#install-script>.
   The easiest way is just to copy the command beginning with `curl`
   and paste it into your command line

**Important Note** ⚠

Using `curl` and `bash` (like you just did) can be unsafe
if you do not trust where the command is coming from.
Always be careful when copy/pasting commands from the internet!

#### Installing a specific version of Node

Run `nvm install YOUR_NODE_VERSION` to install a version of Node.
Once it's installed nvm will switch to using the version you installed.
You can check by running `node -v`.

#### Finding out which versions of Node you have installed

Run `nvm ls`.
You will see a list of all the versions of Node you have installed with nvm.
The arrow points the version that you are currently using.

#### Switching to a version of Node you have installed

If you know a version of Node is already installed on your computer,
you can switch to it by running `nvm use YOUR_NODE_VERSION`.
