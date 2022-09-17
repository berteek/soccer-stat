import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Box, Card, Typography } from "@mui/material"
import GridWithSearchAndPagination from "../grid-search-pagination"

import { useGetLeagues, selectLeague } from "../../app/repository"

export default function Leagues() {
  const { data, status } = useGetLeagues()
  const dispatch = useDispatch()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>Error</div>
  }

  const mapper = (league) => {
    return (
      <Box component={Link} to="/matches">
        <Card
          onClick={() => selectLeague(dispatch, league.id)}
          sx={{
            backgroundColor: "primary.main",
            padding: 2,
            height: 100
          }}
        >
          <Typography>{league.id}</Typography>
          <Typography>{league.name}</Typography>
          <Typography>{league.area.name}</Typography>
        </Card>
      </Box>
    )
  }

  return (
    <GridWithSearchAndPagination
      mapper={mapper}
      items={data.competitions}
      searchLabel="Поиск по лигам"
      itemsPerPage={9}
    />
  )
}