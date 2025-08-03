import { jsx as _jsx } from "react/jsx-runtime";
import { MissingEditorProp } from 'payload';
import { RenderCustomComponent } from '../../../elements/RenderCustomComponent/index.js';
import { RenderServerComponent } from '../../../elements/RenderServerComponent/index.js';
import { DefaultCell, RenderDefaultCell } from '../../../exports/client/index.js';
import { hasOptionLabelJSXElement } from '../../../utilities/hasOptionLabelJSXElement.js';
import { findValueFromPath } from './findValueFromPath.js';
export function renderCell({
  clientField,
  collectionSlug,
  columnIndex,
  customCellProps,
  doc,
  enableRowSelections,
  i18n,
  isLinkedColumn,
  payload,
  rowIndex,
  serverField,
  viewType
}) {
  const baseCellClientProps = {
    cellData: undefined,
    collectionSlug,
    customCellProps,
    field: clientField,
    rowData: undefined,
    viewType
  };
  const accessor = ('accessor' in clientField ? clientField.accessor : undefined) ?? ('name' in clientField ? clientField.name : undefined);
  const cellClientProps = {
    ...baseCellClientProps,
    cellData: 'name' in clientField ? findValueFromPath(doc, accessor) : undefined,
    link: isLinkedColumn,
    rowData: doc
  };
  const cellServerProps = {
    cellData: cellClientProps.cellData,
    className: baseCellClientProps.className,
    collectionConfig: payload.collections[collectionSlug].config,
    collectionSlug,
    columnIndex,
    customCellProps: baseCellClientProps.customCellProps,
    field: serverField,
    i18n,
    link: cellClientProps.link,
    onClick: baseCellClientProps.onClick,
    payload,
    rowData: doc
  };
  let CustomCell = null;
  if (serverField?.type === 'richText') {
    if (!serverField?.editor) {
      throw new MissingEditorProp(serverField) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
      ;
    }
    if (typeof serverField?.editor === 'function') {
      throw new Error('Attempted to access unsanitized rich text editor.');
    }
    if (!serverField.admin) {
      serverField.admin = {};
    }
    if (!serverField.admin.components) {
      serverField.admin.components = {};
    }
    CustomCell = RenderServerComponent({
      clientProps: cellClientProps,
      Component: serverField.editor.CellComponent,
      importMap: payload.importMap,
      serverProps: cellServerProps
    });
  } else {
    const CustomCellComponent = serverField?.admin?.components?.Cell;
    if (CustomCellComponent) {
      CustomCell = RenderServerComponent({
        clientProps: cellClientProps,
        Component: CustomCellComponent,
        importMap: payload.importMap,
        serverProps: cellServerProps
      });
    } else if (cellClientProps.cellData && cellClientProps.field && hasOptionLabelJSXElement(cellClientProps)) {
      CustomCell = RenderServerComponent({
        clientProps: cellClientProps,
        Component: DefaultCell,
        importMap: payload.importMap
      });
    } else {
      const CustomCellComponent = serverField?.admin?.components?.Cell;
      if (CustomCellComponent) {
        CustomCell = RenderServerComponent({
          clientProps: cellClientProps,
          Component: CustomCellComponent,
          importMap: payload.importMap,
          serverProps: cellServerProps
        });
      } else {
        CustomCell = undefined;
      }
    }
  }
  return /*#__PURE__*/_jsx(RenderCustomComponent, {
    CustomComponent: CustomCell,
    Fallback: /*#__PURE__*/_jsx(RenderDefaultCell, {
      clientProps: cellClientProps,
      columnIndex: columnIndex,
      enableRowSelections: enableRowSelections,
      isLinkedColumn: isLinkedColumn
    })
  }, `${rowIndex}-${columnIndex}`);
}
//# sourceMappingURL=renderCell.js.map