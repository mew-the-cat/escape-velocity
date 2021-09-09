import { Overlay, Popover } from "react-bootstrap";

interface CustomTooltipProps {
  id: string;
  header: HTMLDivElement;
  body: string;
}

export const CustomTooltip = (props: any) => {
  return (
    <Overlay {...props}>
      <Popover id="popover-basic" {...props}>
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};
