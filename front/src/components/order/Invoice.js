import React from "react";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";

const Invoice = ({ order }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Date of Invoice {new Date().toLocaleString()} ~
      </Text>
      <Text style={styles.title}>Order Invoice</Text>
      <Text style={styles.author}>
        ABC Nails Supply - 1178 Skylark Dr, Morrow , GA 30260
      </Text>
      <Text style={styles.subtitle}>Order Summary</Text>

      <Table>
        <TableHeader>
          <TableCell>Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Brand</TableCell>
        </TableHeader>
      </Table>

      <Table data={order.products}>
        <TableBody>
          <DataTableCell getContent={(x) => x.product.name} />
          <DataTableCell getContent={(x) => `$${x.product.price}`} />
          <DataTableCell getContent={(x) => x.count} />
          <DataTableCell getContent={(x) => x.product.brand} />
        </TableBody>
      </Table>

      <Text style={styles.text}>
        <Text>
          Date Order: {"               "}
          {order.createdAt}
        </Text>
        {"\n"}
        <Text>
          Order Id: {"         "}
          {order.trackId}
        </Text>
        {"\n"}

        {"\n"}
        <Text>
          Total Paid: {"       "}${order.total} (in US Dollars)
        </Text>
      </Text>

      <Text style={styles.footer}> ~ Thank you for shopping with us ~ </Text>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    padding: "100px",
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default Invoice;
