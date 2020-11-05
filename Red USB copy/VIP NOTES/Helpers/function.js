<td>
  {(() => {
    switch (true) {
      case report.type === ReportType.AGGREGATE:
        return (
          <span title="Aggregate Report">
            <FaSitemap />
          </span>
        );
      case report.type === ReportType.TLF:
        return (
          <span title="Aggregate Report">
            <FaSitemap />
          </span>
        );
      default:
        return "";
    }
  })()}
</td>;
