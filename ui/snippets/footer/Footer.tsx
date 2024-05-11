import { Box, Link, Text, Grid, GridProps } from '@chakra-ui/react';
import React from 'react';

import NetworkAddToWallet from 'ui/shared/NetworkAddToWallet';

const Footer = () => {
  const renderNetworkInfo = React.useCallback(() => {
    return (
      <Box mb={{ base: 5, lg: 10 }}>
        <NetworkAddToWallet />
      </Box>
    );
  }, []);

  const renderProjectInfo = React.useCallback(() => {
    return (
      <Box>
        <Link fontSize="xs" href="https://scan.ultronsmartchain.io">UltronScan</Link>
        <Text mt={3} fontSize="xs">
          Ultron Smartchain's Blockexplorer.
        </Text>
      </Box>
    );
  }, []);

  const containerProps: GridProps = {
    as: 'footer',
    px: { base: 4, lg: 12 },
    py: { base: 4, lg: 9 },
    borderTop: '1px solid',
    borderColor: 'divider',
    templateColumns: { base: '1fr', lg: 'repeat(2, 1fr)' },
    gap: { lg: '32px', xl: '100px' },
  };

  return (
    <Grid {...containerProps}>
      {renderNetworkInfo()}
      {renderProjectInfo()}
    </Grid>
  );
};

export default React.memo(Footer);