### Roster Details<br />
Team Name: RUBY<br />
Roster: fozil, H4SAN4TOR, Kaide, mo0N, sowalio<br />
Global Rank: [259](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [146]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  521.1<br />
<br />
Final Rank Value (521.1) = Starting Rank Value (501.4) + Head To Head Adjustments (19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.4
- 400 + ( ( 0.053 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 501.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      249 | 2025-02-15 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -12.17 | fozil, H4SAN4TOR, Kaide, mo0N, sowalio |
|           14 |      260 | 2025-02-15 | Preasy            | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.204 (0.029)    | 0 (0.000) |    21.24 | fozil, H4SAN4TOR, Kaide, mo0N, sowalio |
|           13 |     2472 | 2024-10-04 | HOTU              | L   | 0.199      | -            | -                | -                | -         |    -1.93 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           12 |     2542 | 2024-10-02 | ECSTATIC          | L   | 0.187      | -            | -                | -                | -         |    -0.75 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           11 |     2598 | 2024-10-01 | Passion UA        | L   | 0.180      | -            | -                | -                | -         |    -0.39 | forkyz, Kaide, mo0N, sowalio, tasman   |
|           10 |     2657 | 2024-09-29 | FLuffy Gangsters  | W   | 0.165      | 0.143        | 0.006 (0.000)    | 0.409 (0.010)    | 0 (0.000) |     3.74 | forkyz, Kaide, mo0N, sowalio, tasman   |
|            9 |     2831 | 2024-09-25 | ENCE Academy      | W   | 0.140      | 0.143        | 0.008 (0.000)    | 0.249 (0.005)    | 0 (0.000) |     3.54 | forkyz, Kaide, mo0N, sowalio, tasman   |
|            8 |     2886 | 2024-09-24 | Daystar           | W   | 0.134      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     2.72 | forkyz, Kaide, mo0N, sowalio, tasman   |
|            7 |     2947 | 2024-09-22 | Rhyno             | L   | 0.121      | -            | -                | -                | -         |    -1.10 | forkyz, Kaide, mo0N, sowalio, tasman   |
|            6 |     2993 | 2024-09-20 | CPH Wolves        | W   | 0.108      | 0.143        | 0.001 (0.000)    | 0.087 (0.001)    | 0 (0.000) |     2.37 | forkyz, Kaide, mo0N, sowalio, tasman   |
|            5 |     3032 | 2024-09-19 | FLuffy Gangsters  | W   | 0.101      | 0.143        | 0.006 (0.000)    | 0.409 (0.006)    | 0 (0.000) |     2.33 | forkyz, Kaide, mo0N, sowalio, tasman   |
|            4 |     3223 | 2024-09-13 | AMKAL             | L   | 0.060      | -            | -                | -                | -         |    -0.68 | Chill, Kaide, mo0N, Something, sowalio |
|            3 |     3271 | 2024-09-12 | ENCE Academy      | W   | 0.051      | 0.143        | 0.008 (0.000)    | 0.249 (0.002)    | 0 (0.000) |     1.31 | Chill, Kaide, mo0N, Something, sowalio |
|            2 |     3299 | 2024-09-11 | AMKAL             | L   | 0.046      | -            | -                | -                | -         |    -0.52 | Chill, Kaide, mo0N, Something, sowalio |
|            1 |     3451 | 2024-09-05 | ECLOT             | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Chill, Kaide, mo0N, Something, sowalio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
