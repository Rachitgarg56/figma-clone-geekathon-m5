import { BaseUserMeta, User } from "@liveblocks/client";
// import { Gradient, Pattern } from "fabric/fabric-impl";

export const CursorMode = {
  Hidden: 0,
  Chat: 1,
  ReactionSelector: 2,
  Reaction: 3,
};

export const Reaction = {
  value: "",
  timestamp: 0,
  point: { x: 0, y: 0 },
};

export const ReactionEvent = {
  x: 0,
  y: 0,
  value: "",
};

export const ShapeData = {
  type: "",
  width: 0,
  height: 0,
  fill: "",
  left: 0,
  top: 0,
  objectId: undefined,
};

export const Attributes = {
  width: "",
  height: "",
  fontSize: "",
  fontFamily: "",
  fontWeight: "",
  fill: "",
  stroke: "",
};

export const ActiveElement = null;

export const CustomFabricObject = {};

export const ModifyShape = {
  canvas: null,
  property: "",
  value: null,
  activeObjectRef: null,
  syncShapeInStorage: (shape) => {},
};

export const ElementDirection = {
  canvas: null,
  direction: "",
  syncShapeInStorage: (shape) => {},
};

export const ImageUpload = {
  file: null,
  canvas: null,
  shapeRef: null,
  syncShapeInStorage: (shape) => {},
};

export const RightSidebarProps = {
  elementAttributes: Attributes,
  setElementAttributes: (value) => {},
  fabricRef: null,
  activeObjectRef: null,
  isEditingRef: null,
  syncShapeInStorage: (obj) => {},
};

export const NavbarProps = {
  activeElement: ActiveElement,
  imageInputRef: null,
  handleImageUpload: (e) => {},
  handleActiveElement: (element) => {},
};

export const ShapesMenuProps = {
  item: {
    name: "",
    icon: "",
    value: [],
  },
  activeElement: null,
  handleActiveElement: null,
  handleImageUpload: null,
  imageInputRef: null,
};

export const Presence = null;

export const LiveCursorProps = {
  others: [],
};

export const CanvasMouseDown = {
  options: null,
  canvas: null,
  selectedShapeRef: null,
  isDrawing: null,
  shapeRef: null,
};

export const CanvasMouseMove = {
  options: null,
  canvas: null,
  isDrawing: null,
  selectedShapeRef: null,
  shapeRef: null,
  syncShapeInStorage: (shape) => {},
};

export const CanvasMouseUp = {
  canvas: null,
  isDrawing: null,
  shapeRef: null,
  activeObjectRef: null,
  selectedShapeRef: null,
  syncShapeInStorage: (shape) => {},
  setActiveElement: null,
};

export const CanvasObjectModified = {
  options: null,
  syncShapeInStorage: (shape) => {},
};

export const CanvasPathCreated = {
  options: null,
  syncShapeInStorage: (shape) => {},
};

export const CanvasSelectionCreated = {
  options: null,
  isEditingRef: null,
  setElementAttributes: (value) => {},
};

export const CanvasObjectScaling = {
  options: null,
  setElementAttributes: (value) => {},
};

export const RenderCanvas = {
  fabricRef: null,
  canvasObjects: null,
  activeObjectRef: null,
};

export const CursorChatProps = {
  cursor: { x: 0, y: 0 },
  cursorState: null,
  setCursorState: (cursorState) => {},
  updateMyPresence: (presence) => {},
};
