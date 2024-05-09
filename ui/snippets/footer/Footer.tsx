import { Grid } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const containerProps = {
    as: 'footer' as const,  // Specify 'footer' as a literal type
    px: { base: 4, lg: 12 },
    py: { base: 4, lg: 9 },
    borderTop: '1px solid',
    borderColor: 'divider',
    gridTemplateColumns: { base: '1fr', lg: 'minmax(auto, 470px)' },
    columnGap: { lg: '32px', xl: '100px' },
  };

  return (
    <Grid { ...containerProps }>
      {/* Footer is intentionally left blank for future use */}
    </Grid>
  );
};

export default React.memo(Footer);
