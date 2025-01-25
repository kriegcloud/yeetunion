import type { SxProps, Theme } from "@mui/material/styles";

import { useState } from "react";

import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import { Iconify } from "../../components/iconify";
import { Map, MapControls, MapMarker, MapPopup } from "../../components/map";

// ----------------------------------------------------------------------

type ContactMapProps = {
  sx?: SxProps<Theme>;
  contacts: {
    latlng: number[];
    address: string;
    phoneNumber: string;
  }[];
};

export function ContactMap({ contacts, sx }: ContactMapProps) {
  const theme = useTheme();

  const [popupInfo, setPopupInfo] = useState<
    ContactMapProps["contacts"][0] | null
  >(null);

  return (
    <Map
      initialViewState={{ latitude: 12, longitude: 42, zoom: 2 }}
      mapStyle={`mapbox://styles/mapbox/${theme.palette.mode === "light" ? "light" : "dark"}-v10`}
      sx={[
        () => ({
          borderRadius: 1.5,
          height: { xs: 320, md: 560 },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <MapControls hideGeolocate />

      {contacts.map((country, index) => (
        <MapMarker
          key={`marker-${index}`}
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          latitude={country.latlng[0]!}
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          longitude={country.latlng[1]!}
          onClick={(event) => {
            event.originalEvent.stopPropagation();
            setPopupInfo(country);
          }}
        />
      ))}

      {popupInfo && (
        <MapPopup
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          longitude={popupInfo.latlng[1]!}
          // biome-ignore lint/style/noNonNullAssertion: <explanation>
          latitude={popupInfo.latlng[0]!}
          onClose={() => setPopupInfo(null)}
        >
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            Address
          </Typography>

          <Typography component="div" variant="caption">
            {popupInfo.address}
          </Typography>

          <Typography
            component="div"
            variant="caption"
            sx={{ mt: 1, display: "flex", alignItems: "center" }}
          >
            <Iconify icon="solar:phone-bold" width={14} sx={{ mr: 0.5 }} />
            {popupInfo.phoneNumber}
          </Typography>
        </MapPopup>
      )}
    </Map>
  );
}
