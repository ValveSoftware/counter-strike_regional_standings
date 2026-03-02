### Roster Details<br />
Team Name: Arise<br />
Roster: Anasasis, Bhavi, borosto, clouda, EmbeR<br />
Global Rank: [224](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [28]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  648.0<br />
<br />
Final Rank Value (648.0) = Starting Rank Value (652.8) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.290[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.134<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.8
- 400 + ( ( 0.134 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 652.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      383 | 2026-02-20 | The QUBE        | L   | 1.000      | -            | -                | -                | -         |   -15.26 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|           12 |      434 | 2026-02-19 | BMZ             | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.137 (0.046)    | 0 (0.000) |    19.40 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|           11 |      494 | 2026-02-18 | Deep Cross      | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.033 (0.011)    | 0 (0.000) |    16.25 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|           10 |      550 | 2026-02-17 | Change The Game | L   | 1.000      | -            | -                | -                | -         |   -10.48 | Anasasis, Bhavi, borosto, clouda, EmbeR |
|            9 |     1327 | 2026-01-25 | Legion          | L   | 0.958      | -            | -                | -                | -         |   -13.64 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            8 |     1328 | 2026-01-24 | Flshbck         | W   | 0.957      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.92 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            7 |     1894 | 2025-12-21 | Legion          | W   | 0.724      | 0.262        | 0.006 (0.001)    | 0.317 (0.060)    | 0 (0.000) |    12.62 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            6 |     1896 | 2025-12-20 | WahWah          | W   | 0.724      | 0.262        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.89 | Anasasis, Bhavi, borosto, EmbeR, Ph1NNN |
|            5 |     2271 | 2025-11-29 | Legion          | L   | 0.584      | -            | -                | -                | -         |    -8.47 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            4 |     2864 | 2025-11-08 | Nemesis SEA     | L   | 0.440      | -            | -                | -                | -         |    -9.30 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            3 |     2884 | 2025-11-08 | BIG             | L   | 0.437      | -            | -                | -                | -         |    -0.27 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            2 |     3456 | 2025-10-24 | Just Swing      | L   | 0.339      | -            | -                | -                | -         |    -4.83 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |
|            1 |     3502 | 2025-10-23 | Morningstar     | L   | 0.333      | -            | -                | -                | -         |    -1.57 | Benzene, Bhavi, clouda, EmbeR, reV3nnnn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,203.31)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.958 | $500.00        | $478.95         |
| 2025-12-21 |      0.724 | $1,000.00      | $724.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
